<template>
  <OverlayDialog :show="show" :close="closeProxy" title="Access Your Wallet!">
    <div class="my-2">
      <div v-if="hasCreateTestingAccountFn" class="mt-4">
        <p
          v-if="!isConnected && extensionAccounts.length < 1"
          class="text-sm my-5 mb-5 text-gray-400"
        >
          How would you like to connect?
        </p>
      </div>
      <div
        :class="{
          'flex items-start space-x-4': extensionAccounts.length < 1,
          'flex flex-col items-center space-y-5': extensionAccounts.length > 0,
        }"
      >
        <!-- Left Column -->
        <div
          v-if="hasCreateTestingAccountFn"
          :class="{
            'text-center': extensionAccounts.length > 0,
            'flex-1 text-left': extensionAccounts.length < 1,
          }"
        >
          <p class="text-sm mb-3 text-gray-400">Create a new testing wallet:</p>
          <button
            @click="createTestingAccount"
            class="bg-gradient-to-r from-incognitee-green to-incognitee-blue rounded-md text-sm font-semibold text-white py-1.5 w-full hover:shadow-lg hover:shadow-incognitee-green/50"
          >
            Create Wallet
          </button>
        </div>

        <!-- Vertical Divider -->
        <div
          v-if="hasCreateTestingAccountFn"
          class="w-px bg-gray-700 h-auto self-stretch"
        ></div>
        <!-- Right Column -->
        <div v-if="extensionAccounts.length < 1" class="flex-1 text-left">
          <p class="text-sm mb-3 text-gray-400">
            Connect using a browser extension:
          </p>
          <button
            @click="tryConnectExtension"
            class="bg-gradient-to-r from-incognitee-green to-incognitee-blue rounded-md text-sm font-semibold text-white py-1.5 w-full hover:shadow-lg hover:shadow-incognitee-green/50"
          >
            Connect
          </button>
          <div v-if="maybeWarning" class="text-yellow-400 text-sm mt-2">
            {{ maybeWarning }}
          </div>
        </div>
      </div>

      <!-- Choose Account Section -->
      <div
        v-if="extensionAccounts.length > 0"
        ref="walletSection"
        id="wallet"
        class="py-5 sm:py-5 w-full text-center"
      >
        <p class="text-sm mb-2 text-gray-400">
          Choose one of your extension accounts:
        </p>
        <select
          v-model="selectedExtensionAccount"
          id="account.address"
          name="account.address"
          class="w-full rounded-md border-0 bg-gray-800 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-700 focus:ring-1 focus:ring-inset focus:ring-incognitee-green sm:text-sm sm:leading-6"
        >
          <option disabled value="">Choose...</option>
          <option
            v-for="account in extensionAccounts"
            :key="account.address"
            :value="account.address"
          >
            {{ account.meta.name }}
          </option>
        </select>
      </div>

      <!-- Supported Extensions Section -->
      <div v-if="!isConnected && extensionAccounts.length < 1" class="mt-5">
        <p class="text-sm text-gray-400">Supported extensions:</p>
        <div
          class="mt-3 grid grid-cols-2 gap-x-3 gap-y-3 sm:grid-cols-4 sm:gap-x-3 lg:grid-cols-4"
        >
          <a href="https://talisman.xyz/download">
            <img
              class="max-h-10 w-full object-contain"
              src="/img/index/talisman-logo.svg"
              alt="talisman"
            />
          </a>
          <a href="https://novawallet.io/">
            <img
              class="max-h-7 w-full object-contain"
              src="/img/index/nova-wallet-logo.svg"
              alt="nova wallet"
            />
          </a>
          <a href="https://www.subwallet.app/">
            <img
              class="max-h-10 w-full object-contain"
              src="/img/index/sub-wallet-logo.svg"
              alt="sub wallet"
            />
          </a>
          <a href="https://polkadot.js.org/extension/">
            <img
              class="max-h-7 w-full object-contain"
              src="/img/index/polkadotjs-logo.svg"
              alt="polkajs"
            />
          </a>
        </div>
      </div>

      <!-- Currently Selected Account Section -->
      <div v-if="accountStore.hasInjector">
        <div
          class="text-sm text-gray-400 wrap-text p-4 bg-gray-900 border border-gray-800 rounded-md text-center"
        >
          <span> Your currently selected account is:<br /></span>
          <span class="text-white">{{ accountStore.getAddress }}</span>
        </div>

        <div
          v-if="accountStore.sessionProxyForRole(SessionProxyRole.ReadBalance)"
          class="mt-7"
        >
          <p class="text-sm mb-2 text-gray-400">
            Would you like to update your session key authorization settings?
          </p>
          <button
            @click="changeSessionAuthorization"
            class="bg-gradient-to-r from-incognitee-green to-incognitee-blue rounded-md text-sm font-semibold text-white py-1.5 w-full hover:shadow-lg hover:shadow-incognitee-green/50"
          >
            Update Session Key Role
          </button>
        </div>
      </div>

      <!-- Trusted Getter Hint Section -->
      <div
        v-if="
          accountStore.hasInjector &&
          showTrustedGetterHint &&
          selectedExtensionAccountIsNew
        "
        class="mt-10"
      >
        <p class="text-sm text-gray-400">
          Please allow this app to read your balance by signing the upcoming
          request in your extension
        </p>
        <p class="mt-5 text-sm text-gray-400">
          This window will close once a balance could be fetched
        </p>
        <div class="spinner-container">
          <div class="spinner"></div>
        </div>
      </div>
    </div>
  </OverlayDialog>
</template>

<script setup lang="ts">
import {
  connectExtension,
  extensionAccounts,
} from "~/lib/signerExtensionUtils";
import OverlayDialog from "~/components/overlays/OverlayDialog.vue";
import { computed, defineProps, ref, watch } from "vue";
import { useAccount } from "~/store/account.ts";
import { encodeAddress } from "@polkadot/util-crypto";
import { SessionProxyRole } from "~/lib/sessionProxyStorage";
const isConnected = ref(false);

const handleConnect = () => {
  isConnected.value = true;
};

const accountStore = useAccount();
const currentExtensionAccount = ref("");
const selectedExtensionAccount = ref("");
const maybeWarning = ref(null);

const selectedExtensionAccountIsNew = computed(() => {
  try {
    const selectedAddressEncoded = encodeAddress(
      selectedExtensionAccount.value,
      accountStore.getSs58Format,
    );
    console.log(
      "comparing",
      currentExtensionAccount.value,
      " to ",
      selectedAddressEncoded,
    );
    return selectedAddressEncoded !== currentExtensionAccount.value;
  } catch (e) {
    return false;
  }
});

const props = defineProps({
  createTestingAccount: {
    type: Function,
    required: false,
  },
  show: {
    type: Boolean,
    required: true,
  },
  close: {
    type: Function,
    required: true,
  },
  onExtensionAccountChange: {
    type: Function,
    required: true,
  },
  showTrustedGetterHint: {
    type: Boolean,
    required: false,
  },
  changeSessionAuthorization: {
    type: Function,
    required: false,
  },
});

watch(
  () => props.show,
  (show) => {
    if (show) {
      console.log("current extension account: ", accountStore.getAddress);
      currentExtensionAccount.value = accountStore.getAddress;
      //selectedExtensionAccount.value = "";
    }
  },
);

const hasCreateTestingAccountFn = computed(
  () => typeof props.createTestingAccount === "function",
);

// even if the same account stays selected and the overlay is manually closed
// we need to call onExtensionAccountChange. otherwise the balance poll will wait forever
const closeProxy = () => {
  if (selectedExtensionAccount.value) {
    props.onExtensionAccountChange(selectedExtensionAccount.value);
  }
  props.close();
};

const tryConnectExtension = async () => {
  maybeWarning.value = await connectExtension();
};

watch(selectedExtensionAccount, async (selectedAddress) => {
  if (selectedAddress && selectedExtensionAccountIsNew.value) {
    props.onExtensionAccountChange(selectedAddress);
  }
});
</script>

<style scoped>
.wrap-text {
  white-space: normal;
  word-wrap: break-word;
}

.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; /* Adjust as needed */
}

.spinner {
  border: 2px solid #f3f3f3; /* Light grey */
  border-top: 2px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 1em; /* Adjust the size here */
  height: 1em; /* Adjust the size here */
  animation: spin 2s linear infinite;
  vertical-align: middle; /* Align with the text */
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
