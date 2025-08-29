<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 bg-incognitee-blue text-white"
  >
    <div
      class="max-w-md w-full bg-gray-800 p-5 sm:p-8 rounded-lg shadow-lg border border-gray-700"
    >
      <div v-if="isLoading" class="flex flex-col items-center py-4">
        <div
          class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-500 mb-4"
        ></div>
        <h2 class="text-xl font-semibold mb-2">Verifying payment...</h2>
        <p class="text-gray-400">
          Please wait while we verify your payment and issue your credits.
        </p>
      </div>

      <div v-else-if="isSuccess" class="flex flex-col items-center py-2">
        <div class="bg-green-500 rounded-full p-4 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 class="text-2xl font-bold mb-2">Payment Successful!</h2>
        <p class="text-gray-300 mb-4">
          Your credits have been added to your wallet.
        </p>

        <div class="bg-gray-700 p-4 rounded-lg w-full mb-6 overflow-hidden">
          <div class="flex justify-between mb-2">
            <span class="text-gray-400">Transaction:</span>
            <a
              :href="transactionUrl"
              target="_blank"
              class="text-blue-400 hover:text-blue-300 truncate max-w-[140px] sm:max-w-[200px]"
              v-if="transactionHash"
            >
              {{ transactionHash.substring(0, 10) }}...{{
                transactionHash.substring(transactionHash.length - 8)
              }}
            </a>
            <span v-else class="text-gray-300">Processing...</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-400">Credits:</span>
            <span class="text-green-400 font-semibold"
              >{{ totalCredits }} credits</span
            >
          </div>
        </div>

        <button @click="returnToChat" class="btn btn_gradient w-full mt-4 h-12 min-h-[3rem] text-base">
          Return to Chat
        </button>
      </div>

      <div v-else class="flex flex-col items-center py-2">
        <div class="bg-red-500 rounded-full p-4 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <h2 class="text-2xl font-bold mb-2">Payment Verification Failed</h2>
        <p class="text-gray-300 mb-6">
          {{
            errorMessage ||
            "There was an issue verifying your payment. Please try again or contact support."
          }}
        </p>

        <button @click="returnToChat" class="btn btn_gradient w-full mt-4 h-12 min-h-[3rem] text-base">
          Return to Chat
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { verifyPayment } from "~/utils/stripe";
import { useAccount } from "@/store/account";

// State
const isLoading = ref(true);
const isSuccess = ref(false);
const errorMessage = ref("");
const transactionHash = ref("");
const totalCredits = ref(0);
const currentUrl = window.location.href;
const url = new URL(currentUrl);
const seed = url.searchParams.get("seed");
const address = url.searchParams.get("address");
const network = url.pathname.split("/")[1] || "pas";

// Get account store
const accountStore = useAccount();

// Computed property for transaction URL
const transactionUrl = computed(() => {
  if (!transactionHash.value) return "";
  //this has to be adjusted later on
  return `https://explorer.incognito.ink/extrinsic/${transactionHash.value}`;
});

// Function to return to chat while preserving URL parameters
const returnToChat = () => {
  if (seed) {
    console.log("Returning to chat with seed:", seed, "and network:", network);

    // Construct the URL to return to chat with the same network and seed
    const chatUrl = `/${network}?app=omnichat&seed=${seed}`;
    console.log("Redirecting to:", chatUrl);
    window.location.href = chatUrl;
  } else if (address) {
    console.log(
      "Returning to chat with address:",
      address,
      "and network:",
      network,
    );

    // Construct the URL to return to chat with the same network and address
    const chatUrl = `/${network}?app=omnichat&address=${address}`;
    console.log("Redirecting to:", chatUrl);
    window.location.href = chatUrl;
  }
};

onMounted(async () => {
  // Debug logging for account store state
  console.log("Payment Success Tab Loaded");
  console.log("Current URL:", window.location.href);
  console.log("Account Store State:", {
    address: accountStore.getAddress,
    hasAccount: accountStore.account !== null
  });

  // Check if wallet is connected - use account directly as isConnected might not exist
  const hasConnectedWallet = accountStore.account !== null;
  if (!hasConnectedWallet && !seed && !address) {
    console.error("No wallet connected");
    isLoading.value = false;
    errorMessage.value =
      "No wallet connected. Please connect your wallet and try again.";
    return;
  }

  try {
    // Get session ID from URL parameters
    const url = new URL(window.location.href);
    const sessionId = url.searchParams.get("session_id");

    if (!sessionId) {
      throw new Error("No session ID provided");
    }

    console.log("Verifying payment for session:", sessionId);

    // Call the verify-payment API which now handles both verification and credit issuance
    const paymentResult = await verifyPayment(sessionId);
    console.log("Payment result:", JSON.stringify(paymentResult, null, 2));

    if (paymentResult.status === "complete") {
      // Update UI with success message
      isSuccess.value = true;
      transactionHash.value = paymentResult.transactionHash || "";
      totalCredits.value = paymentResult.creditAmount;
      console.log("Total Credits set for display:", totalCredits.value);
    } else {
      throw new Error(paymentResult.error || "Payment not completed");
    }
  } catch (error) {
    console.error("Error processing payment:", error);
    errorMessage.value =
      error instanceof Error ? error.message : "Unknown error occurred";
  } finally {
    isLoading.value = false;
  }
});
</script>
