import Stripe from "stripe";
import { defineEventHandler, createError } from "h3";

export default defineEventHandler(async () => {
  try {
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

    // Fetch all active prices with their products
    const prices = await stripe.prices.list({
      active: true,
      expand: ["data.product"],
    });

    // Format the response to match our credit packages structure
    const creditPackages = prices.data.map((price) => {
      const product = price.product as Stripe.Product;

      // Extract credit amount from metadata or use default
      const amount = product.metadata.credits
        ? parseInt(product.metadata.credits)
        : 100;
      const bonusAmount = product.metadata.bonus_credits
        ? parseInt(product.metadata.bonus_credits)
        : undefined;
      const bestValue = product.metadata.best_value === "true";

      return {
        id: product.id,
        name: product.name,
        description: product.description || "",
        priceId: price.id,
        amount: amount,
        bonusAmount: bonusAmount,
        price: {
          currency: price.currency,
          unit_amount: price.unit_amount || 0,
        },
        bestValue: bestValue,
      };
    });

    // Sort packages by price (ascending)
    creditPackages.sort((a, b) => a.price.unit_amount - b.price.unit_amount);

    return { creditPackages };
  } catch (error) {
    console.error("Error fetching Stripe products:", error);

    return createError({
      statusCode: 500,
      message:
        error instanceof Error
          ? error.message
          : "Failed to fetch Stripe products",
    });
  }
});
