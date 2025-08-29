import { loadStripe } from "@stripe/stripe-js";

// Initialize Stripe with publishable key
// Replace with your actual publishable key or use environment variable
export const stripePromise = loadStripe(
  process.env.STRIPE_PUBLISHABLE_KEY || "",
);

// Create checkout session using Stripe's client-side API
export async function createCheckoutSession(priceId: string): Promise<string> {
  try {
    // Get URL parameters for seed and address
    const currentUrl = window.location.href;
    const urlObj = new URL(currentUrl);
    const seed = urlObj.searchParams.get("seed");
    const address = urlObj.searchParams.get("address");
    
    console.log("Creating checkout session with:", { 
      priceId, 
      seed: seed || "[not provided]", 
      address: address || "[not provided]" 
    });
    
    if (!seed && !address) {
      console.warn("Warning: Neither seed nor address parameter found in URL. This might cause checkout to fail.");
    }
    
    // Call our API to create a checkout session
    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ priceId, seed, address }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Server returned error:", {
        status: response.status,
        statusText: response.statusText,
        errorDetails: errorData
      });
      throw new Error(`Failed to create checkout session: ${response.status} ${response.statusText}`);
    }

    const responseData = await response.json();
    const { url, id } = responseData;
    
    console.log("Checkout session created successfully:", { sessionId: id });

    if (url) {
      // Return the URL instead of redirecting
      return url;
    } else {
      throw new Error("No checkout URL returned");
    }
  } catch (error) {
    console.error("Error creating checkout session:", error);
    // Add additional context to help with debugging
    const enhancedError = new Error(
      `Checkout session creation failed: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
    throw enhancedError;
  }
}

// Credit package type definition
export interface CreditPackage {
  id: string;
  name: string;
  description: string;
  priceId: string;
  amount: number;
  bonusAmount?: number;
  price: {
    currency: string;
    unit_amount: number;
  };
  bestValue?: boolean;
}

// Fetch credit packages from the API
export async function fetchCreditPackages(): Promise<CreditPackage[]> {
  try {
    const response = await fetch("/api/get-stripe-products");
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch credit packages");
    }

    return data.creditPackages || [];
  } catch (error) {
    console.error("Error fetching credit packages:", error);
    // Return fallback packages in case of error
    return getFallbackPackages();
  }
}

// Fallback credit packages in case the API fails
function getFallbackPackages(): CreditPackage[] {
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

// Format price for display
export function formatPrice(price: { currency: string; unit_amount: number }) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: price.currency,
  }).format(price.unit_amount / 100);
}

// Payment verification result type
export interface PaymentVerificationResult {
  status: "complete" | "incomplete" | "error";
  paymentAmount: number;
  creditAmount: number;
  customerId?: string;
  paymentIntentId?: string;
  transactionHash?: string;
  error?: string;
}

// Verify payment with Stripe
export async function verifyPayment(
  sessionId: string,
): Promise<PaymentVerificationResult> {
  try {
    // Call our API to verify the payment
    const response = await fetch(
      `/api/verify-payment?session_id=${sessionId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to verify payment");
    }

    const data = await response.json();

    return {
      status: data.status,
      paymentAmount: data.paymentAmount || 0,
      creditAmount: data.creditAmount || 0,
      customerId: data.customerId,
      paymentIntentId: data.paymentIntentId,
      transactionHash: data.transactionHash,
      error: data.error,
    };
  } catch (error) {
    console.error("Error verifying payment:", error);
    return {
      status: "error",
      paymentAmount: 0,
      creditAmount: 0,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}
