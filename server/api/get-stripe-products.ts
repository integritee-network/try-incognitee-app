import Stripe from "stripe";
import { defineEventHandler, createError } from "h3";

export default defineEventHandler(async () => {
  console.log("Starting to fetch Stripe products");
  try {
    // Initialize Stripe with secret key from environment variable
    console.log("Checking for STRIPE_SECRET_KEY");
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error("STRIPE_SECRET_KEY is missing");
      return createError({
        statusCode: 500,
        message: "Stripe secret key is not configured",
      });
    }

    console.log("Initializing Stripe client");
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2023-10-16" as Stripe.LatestApiVersion,
    });

    console.log("Attempting to fetch Stripe prices");
    // Fetch all active prices with their products
    try {
      const prices = await stripe.prices.list({
        active: true,
        expand: ["data.product"],
      });

      console.log("Fetched prices successfully, count:", prices.data.length);
  
      // Format the response to match our credit packages structure
      if (!prices.data || prices.data.length === 0) {
        console.log("No prices found, returning fallback packages");
        return { creditPackages: getFallbackCreditPackages() };
      }

      console.log("Mapping price data to credit packages");
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

      console.log("Returning formatted credit packages", { count: creditPackages.length });
      return { creditPackages };
    } catch (stripeError) {
      console.error("Error in Stripe API call:", stripeError);
      console.log("Returning fallback packages due to Stripe API error");
      return { creditPackages: getFallbackCreditPackages() };
    }
  } catch (error) {
    console.error("Error fetching Stripe products:", error);
    console.error("Stack trace:", error instanceof Error ? error.stack : "No stack trace");
    
    // Return fallback packages instead of error
    console.log("Returning fallback packages due to error");
    return { creditPackages: getFallbackCreditPackages() };
    
    /* Commented out error response to prevent 500 errors
    return createError({
      statusCode: 500,
      message:
        error instanceof Error
          ? error.message
          : "Failed to fetch Stripe products",
    });
    */
  }
});

// Fallback credit packages when Stripe API fails
function getFallbackCreditPackages() {
  console.log("Generating fallback credit packages");
  return [
    {
      id: "basic-fallback",
      name: "100 Credits",
      description: "Basic package for casual users",
      priceId: "price_fallback_basic",
      amount: 100,
      price: {
        currency: "USD",
        unit_amount: 999, // $9.99
      },
    },
    {
      id: "standard-fallback",
      name: "500 Credits",
      description: "Standard package for regular users",
      priceId: "price_fallback_standard",
      amount: 500,
      price: {
        currency: "USD",
        unit_amount: 3999, // $39.99
      },
      bestValue: false,
    },
    {
      id: "premium-fallback",
      name: "1000 Credits",
      description: "Premium package with bonus credits",
      priceId: "price_fallback_premium",
      amount: 1000,
      bonusAmount: 100, // 10% bonus
      price: {
        currency: "USD",
        unit_amount: 7999, // $79.99
      },
      bestValue: true,
    },
  ];
}
