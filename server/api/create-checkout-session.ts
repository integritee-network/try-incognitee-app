import Stripe from "stripe";
import { defineEventHandler, readBody, createError, H3Event } from "h3";

export default defineEventHandler(async (event) => {
  console.log("Received checkout session creation request");
  try {
    // Get request body
    const body = await readBody(event);
    const { priceId, seed: bodySeed, address: bodyAddress } = body as { priceId: string; seed?: string; address?: string };
    console.log("Request body received:", { priceId, bodySeed: bodySeed || "[not provided]", bodyAddress: bodyAddress || "[not provided]" });
    
    if (!priceId) {
      return createError({
        statusCode: 400,
        message: "Price ID is required",
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

    // Get original URL parameters from the request
    const referer = event.headers.get("referer") || "";
    
    let network = "pas"; // Default network
    let seed = bodySeed || ""; // Use seed from request body if available
    let address = bodyAddress || ""; // Use address from request body if available

    // Extract network and seed/address from referer if not in body
    console.log("Initial parameters:", { network, seed: seed || "[not provided]", address: address || "[not provided]" });
    
    if (!seed && !address) {
      try {
        const refererUrl = new URL(referer);
        network = refererUrl.pathname.split("/")[1] || "pas"; // Extract network from path
        seed = refererUrl.searchParams.get("seed") || ""; // Extract seed from query params
        address = refererUrl.searchParams.get("address") || ""; // Extract address from query params
      } catch (e) {
        console.warn("Could not parse referer URL:", e);
      }
    }
    
    // Extract network from referer in any case (for consistent URLs)
    try {
      const refererUrl = new URL(referer);
      network = refererUrl.pathname.split("/")[1] || "pas"; // Extract network from path
    } catch (e) {
      console.warn("Could not parse referer URL for network:", e);
    }

    // Log final parameters before creating session
    console.log("Creating checkout session with final parameters:", {
      network,
      seed: seed || "[not provided]", 
      address: address || "[not provided]",
      priceId
    });
    
    if (seed) {
      // Create checkout session with preserved URL parameters
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${process.env.APP_URL || ""}/${network}?app=payment-success&seed=${seed}&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.APP_URL || ""}/${network}?app=omnichat&seed=${seed}`,
      });
      // Return session ID and URL for new window checkout
      return {
        id: session.id,
        url: session.url, // Return the URL for the new window checkout flow
      };
    } else if (address) {
      console.log("Creating checkout with address instead of seed");
      // Create checkout session with preserved URL parameters
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${process.env.APP_URL || ""}/${network}?app=payment-success&address=${address}&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.APP_URL || ""}/${network}?app=omnichat&address=${address}`,
      });
      // Return session ID and URL for new window checkout
      return {
        id: session.id,
        url: session.url, // Return the URL for the new window checkout flow
      };
    } else {
      return createError({
        statusCode: 400,
        message: "Seed or address is required",
      });
    }
  } catch (error) {
    console.error("Error creating checkout session:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error details:", { message: errorMessage, stack: error instanceof Error ? error.stack : "No stack trace" });

    return createError({
      statusCode: 500,
      message:
        error instanceof Error
          ? error.message
          : "Failed to create checkout session",
    });
  }
});
