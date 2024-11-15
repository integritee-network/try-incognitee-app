<template>
  <OverlayDialog :show="show" :close="closeProxy" title="Access Your Wallet!">
    <div class="mt-2">
      <div v-if="hasCreateTestingAccountFn" class="mt-4">
        <p class="text-sm text-gray-400">How would you like to connect?</p>
        <br />
        <button
          @click="createTestingAccount"
          class="incognitee-bg btn btn_gradient rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
        >
          Create a New Account for Testing
        </button>
        <p class="mt-4">or</p>
      </div>
      <div v-if="extensionAccounts.length < 1" class="mt-4 flex flex-col">
        <div
          class="mx-auto grid max-w-lg grid-cols-2 gap-x-3 gap-y-3 sm:max-w-xl sm:grid-cols-4 sm:gap-x-3 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          <a href="https://talisman.xyz/download"
            ><img
              class="col-span-1 max-h-10 w-full object-contain lg:col-span-1"
              src="/img/index/talisman-logo.svg"
              alt="talisman"
          /></a>
          <a href="https://novawallet.io/"
            ><img
              class="col-span-1 max-h-7 w-full object-contain lg:col-span-1"
              src="/img/index/nova-wallet-logo.svg"
              alt="nova wallet"
          /></a>
          <a href="https://www.subwallet.app/"
            ><img
              class="col-span-1 max-h-10 w-full object-contain lg:col-span-1"
              src="/img/index/sub-wallet-logo.svg"
              alt="sub wallet"
          /></a>
          <a href="https://polkadot.js.org/extension/"
            ><img
              class="col-span-1 max-h-7 w-full object-contain lg:col-span-1"
              src="/img/index/polkadotjs-logo.svg"
              alt="polkajs"
          /></a>
        </div>
        <div class="mt-10">
          <button
            @click="connectExtension"
            class="incognitee-bg btn btn_gradient rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            Connect Signer Extension
          </button>
        </div>
      </div>
      <div
        v-if="extensionAccounts.length > 0"
        ref="walletSection"
        id="wallet"
        class="py-12 sm:py-16"
      >
        <p class="text-sm text-gray-400">
          Choose one of your extension accounts
        </p>
        <select
          v-model="selectedExtensionAccount"
          id="account.address"
          name="account.address"
          placeholder="account.address"
          class="w-full rounded-md border-0 bg-gray-800 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-700 focus:ring-1 focus:ring-inset focus:ring-incognitee-green sm:text-sm sm:leading-6"
        >
          <option disabled value="">choose...</option>
          <option
            v-for="account in extensionAccounts"
            :key="account.address"
            :value="account.address"
          >
            {{ account.meta.name }}
          </option>
        </select>
      </div>
      <div
        v-if="accountStore.hasInjector && showTrustedGetterHint"
        class="mt-10"
      >
        <p>
          please allow this app to read your balance by signing the upcoming
          request in your extension
        </p>
        <p>this window will close once a balance could be fetched</p>
      </div>
    </div>
  </OverlayDialog>
</template>

<script setup lang="ts">
import {
  connectExtension,
  extensionAccounts,
  injectorForAddress,
} from "~/lib/signerExtensionUtils";
import OverlayDialog from "~/components/overlays/OverlayDialog.vue";
import { defineProps, computed, ref, watch } from "vue";
import { useAccount } from "~/store/account.ts";

const accountStore = useAccount();
const selectedExtensionAccount = ref("");

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
});
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

watch(selectedExtensionAccount, async (selectedAddress) => {
  if (selectedAddress) {
    props.onExtensionAccountChange(selectedAddress);
  }
});
</script>

<style scoped></style>
