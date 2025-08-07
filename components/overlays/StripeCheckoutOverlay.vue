<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div
      class="bg-gray-800 rounded-lg p-6 max-w-md w-full border border-gray-700"
    >
      <!-- Modal Header -->
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold">Buy Incognitee Credits</h2>
        <button
          @click="$emit('close')"
          class="text-gray-400 hover:text-white p-1 rounded-full hover:bg-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      <!-- Wallet Connection -->
      <div class="mb-4">
        <div
          v-if="!accountStore.account"
          class="flex flex-col items-center p-3 border border-gray-700 rounded-lg"
        >
          <p class="text-sm text-gray-400 mb-2">
            Connect your wallet to purchase credits
          </p>
          <button @click="connectWallet" class="btn btn-outline">
            <font-awesome-icon :icon="['fas', 'wallet']" class="mr-2" /> Connect
            Wallet
          </button>
        </div>
        <div v-else class="flex items-center">
          <div>
            <div class="text-sm font-medium">Wallet Connected</div>
            <div class="text-xs text-gray-400" id="modal-wallet-address">
              {{ accountStore.getAddress }}
            </div>
          </div>
        </div>
      </div>

      <!-- Credit Packages -->
      <div v-if="loading" class="text-center py-4">
        <font-awesome-icon :icon="['fas', 'spinner']" spin class="mr-2" />
        Loading packages...
      </div>
      <div v-else class="space-y-3">
        <div
          v-for="pkg in creditPackages"
          :key="pkg.id"
          class="border rounded-lg p-4 cursor-pointer transition-all"
          :class="
            selectedPackage?.id === pkg.id
              ? 'border-incognitee-green bg-gray-700'
              : 'border-gray-700 hover:border-gray-500'
          "
          @click="selectPackage(pkg)"
        >
          <div class="flex justify-between items-center">
            <h3 class="font-medium text-lg">{{ pkg.name }}</h3>
            <span
              v-if="pkg.bestValue"
              class="bg-incognitee-green text-white text-xs px-2 py-1 rounded"
              >Best Value</span
            >
          </div>
          <p class="text-sm text-gray-400">{{ pkg.description }}</p>
          <div class="flex justify-between items-center mt-2">
            <div class="text-sm">
              <span v-if="pkg.bonusAmount" class="text-incognitee-green">
                +{{ pkg.bonusAmount }} Bonus
              </span>
            </div>
            <div class="font-bold">{{ formatPrice(pkg.price) }}</div>
          </div>
        </div>
      </div>

      <!-- Checkout Button -->
      <button
        @click="checkout"
        :disabled="!selectedPackage || checkoutLoading || !accountStore.account"
        class="btn btn_gradient w-full mt-4 h-10"
      >
        <span v-if="!accountStore.account">Connect Wallet First</span>
        <span v-else-if="checkoutLoading">
          <font-awesome-icon :icon="['fas', 'spinner']" spin class="mr-2" />
          Processing...
        </span>
        <span v-else> Purchase Credits </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  createCheckoutSession,
  fetchCreditPackages,
  formatPrice,
  type CreditPackage,
} from "~/utils/stripe";
import { useAccount } from "~/store/account";

// Get the account store
const accountStore = useAccount();

const emit = defineEmits(["close"]);

const loading = ref(true);
const creditPackages = ref<CreditPackage[]>([]);
const selectedPackage = ref<CreditPackage | null>(null);
const checkoutLoading = ref(false);

// Load packages and set default selection
onMounted(async () => {
  try {
    // Fetch credit packages from the API
    creditPackages.value = await fetchCreditPackages();

    // Select the first package by default
    if (creditPackages.value.length > 0) {
      selectedPackage.value = creditPackages.value[0];
    }
  } catch (error) {
    console.error("Failed to load credit packages:", error);
  } finally {
    loading.value = false;
  }
});

// Methods
function selectPackage(pkg) {
  selectedPackage.value = pkg;
}

async function connectWallet() {
  try {
    // This should integrate with your existing wallet connection logic
    // In a real implementation, this would connect to MetaMask, Polkadot.js, etc.

    // Use the existing account store method
    if (typeof accountStore.connectWallet === "function") {
      await accountStore.connectWallet();
    } else if (
      typeof accountStore.setAccount === "function" &&
      !accountStore.account
    ) {
      // Mock wallet connection if no connectWallet method exists
      const mockAddress = `0x${Math.random().toString(16).substring(2, 42)}`;
      accountStore.setAccount(mockAddress);
    }
  } catch (error) {
    console.error("Error connecting wallet:", error);
    alert("Failed to connect wallet. Please try again.");
  }
}

async function checkout() {
  if (!selectedPackage.value || !accountStore.account) return;

  checkoutLoading.value = true;
  try {
    // Store credit amount in localStorage for the success page
    localStorage.setItem(
      "incognitee_credit_amount",
      selectedPackage.value.amount.toString(),
    );

    // Store wallet address and original URL in localStorage for persistence across redirects
    if (accountStore.account) {
      console.log(
        "Saving wallet address to localStorage before redirect:",
        accountStore.getAddress,
      );
      localStorage.setItem(
        "incognitee_wallet_address",
        accountStore.getAddress,
      );
    }

    // Store the current URL parameters that contain wallet state (network, seed)
    // We'll use these to reconstruct the URL after payment
    const currentUrl = window.location.href;
    const urlObj = new URL(currentUrl);
    const urlParams = urlObj.searchParams;

    // Extract the important parameters (seed,address, network, etc.)
    const seed = urlParams.get("seed");
    const address = urlParams.get("address");
    const network = urlParams.get("network") || urlObj.pathname.split("/")[1]; // In case network is in the path

    // Store these parameters for later reconstruction
    if (seed) {
      localStorage.setItem("incognitee_seed", seed);
      console.log("Saved seed parameter:", seed);
    }
    if (address) {
      localStorage.setItem("incognitee_address", address);
      console.log("Saved address parameter:", address);
    }

    if (network) {
      localStorage.setItem("incognitee_network", network);
      console.log("Saved network parameter:", network);
    }

    // Also store the full original URL as fallback
    localStorage.setItem("incognitee_original_url", currentUrl);
    console.log("Saved original URL as fallback:", currentUrl);

    // Create checkout session and open Stripe in a new window
    const checkoutUrl = await createCheckoutSession(
      selectedPackage.value.priceId,
    );

    // Open Stripe checkout in a new window/tab
    if (checkoutUrl) {
      console.log("Opening Stripe checkout in new window:", checkoutUrl);
      window.open(checkoutUrl, "_blank");

      // Close the modal since we're staying on this page
      emit("close");

      // Show a message to the user about the new window
      alert(
        "Stripe checkout has opened in a new tab. Please complete your payment there.",
      );
    }
  } catch (error) {
    console.error("Error creating checkout session:", error);
    alert("Failed to create checkout session. Please try again.");
  } finally {
    checkoutLoading.value = false;
  }
}
</script>
