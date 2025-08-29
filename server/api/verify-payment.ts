import Stripe from "stripe";
import { defineEventHandler, getQuery, createError } from "h3";
import { issueCredits } from "../../utils/issue-credits";

// Interface for the response
interface PaymentVerificationResult {
  status: "complete" | "incomplete" | "error";
  paymentAmount: number;
  creditAmount: number;
  customerId?: string;
  paymentIntentId?: string;
  transactionHash?: string;
  error?: string;
}

export default defineEventHandler(async (event) => {
  try {
    // Get session ID from query parameters
    const query = getQuery(event);
    const sessionId = query.session_id as string;

    if (!sessionId) {
      return createError({
        statusCode: 400,
        message: "Session ID is required",
      });
    }

    // Initialize Stripe with secret key from environment variable
    if (!process.env.STRIPE_SECRET_KEY) {
      return createError({
        statusCode: 500,
        message: "Stripe secret key is not configured",
      });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2023-10-16" as Stripe.LatestApiVersion,
    });

    // Retrieve session to verify payment status
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items.data.price.product"],
    });

    // Check if payment is successful
    if (session.payment_status === "paid") {
      // Get the payment amount
      const paymentAmount = session.amount_total
        ? session.amount_total / 100
        : 0;

      // Get the credit amount from the product metadata
      let creditAmount = 0;

      // Access line items to get product information
      if (
        session.line_items &&
        session.line_items.data &&
        session.line_items.data.length > 0
      ) {
        const lineItem = session.line_items.data[0];

        // Try to get credit amount from product metadata
        if (
          lineItem.price &&
          lineItem.price.product &&
          typeof lineItem.price.product !== "string"
        ) {
          const product = lineItem.price.product;

          // Check if it's a valid product (not deleted)
          if ("deleted" in product && product.deleted) {
            console.warn("Product is deleted, cannot extract credit amount");
          } else {
            // It's a valid Product, not a DeletedProduct
            const validProduct = product as Stripe.Product;

            // First try to get from metadata with key credit_amount
            console.log("Product metadata:", validProduct.metadata);

            if (validProduct.metadata && validProduct.metadata.credit_amount) {
              console.log(
                "Found credit_amount in metadata:",
                validProduct.metadata.credit_amount,
              );

              // Ensure we're parsing a string value correctly
              const rawCreditAmount = validProduct.metadata.credit_amount;

              // Try to parse as number, handling various formats
              if (typeof rawCreditAmount === "string") {
                // Remove any non-numeric characters except decimal point
                const cleanedValue = rawCreditAmount.replace(/[^0-9.]/g, "");
                creditAmount = Number(cleanedValue) || 0;
              } else if (typeof rawCreditAmount === "number") {
                creditAmount = rawCreditAmount;
              }

              console.log("Parsed creditAmount:", creditAmount);
            }
            // If not in metadata, try to parse from name or description
            else if (
              validProduct.name &&
              validProduct.name.match(/\d+\s*credits/i)
            ) {
              const match = validProduct.name.match(/(\d+)\s*credits/i);
              if (match && match[1]) {
                creditAmount = parseInt(match[1], 10) || 0;
              }
            }
            // Fallback to description
            else if (
              validProduct.description &&
              validProduct.description.match(/\d+\s*credits/i)
            ) {
              const match = validProduct.description.match(/(\d+)\s*credits/i);
              if (match && match[1]) {
                creditAmount = parseInt(match[1], 10) || 0;
              }
            }
          }

          // If we still don't have a credit amount, use the quantity
          if (creditAmount === 0 && lineItem.quantity) {
            creditAmount = lineItem.quantity;
          }
        }
      }

      try {
        // Only issue credits if we have a valid credit amount
        if (creditAmount > 0) {
          // Issue credits to the user's wallet
          const issuanceResult = await issueCredits(creditAmount);
          console.log("Credits issued:", issuanceResult);

          // Return the complete result with transaction hash
          const result: PaymentVerificationResult = {
            status: "complete",
            paymentAmount,
            creditAmount,
            customerId: session.customer as string,
            paymentIntentId: session.payment_intent as string,
            transactionHash: issuanceResult.transactionHash,
          };

          console.log(
            "Payment verification and credit issuance complete:",
            result,
          );
          return result;
        } else {
          throw new Error("Invalid credit amount: " + creditAmount);
        }
      } catch (error) {
        console.error("Error issuing credits:", error);

        return {
          status: "error",
          paymentAmount,
          creditAmount,
          customerId: session.customer as string,
          paymentIntentId: session.payment_intent as string,
          error:
            error instanceof Error ? error.message : "Failed to issue credits",
        } as PaymentVerificationResult;
      }
    } else {
      return {
        status: "incomplete",
        paymentAmount: 0,
        creditAmount: 0,
        error: `Payment not completed. Status: ${session.payment_status}`,
      } as PaymentVerificationResult;
    }
  } catch (error) {
    console.error("Error verifying payment:", error);

    return createError({
      statusCode: 500,
      message:
        error instanceof Error ? error.message : "Failed to verify payment",
    });
  }
});
