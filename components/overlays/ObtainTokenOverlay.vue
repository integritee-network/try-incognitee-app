<template>
  <OverlayDialog :show="show" :close="close" title="Obtain TEER Tokens!">
    <div class="mt-2">
      <p class="text-sm text-gray-400">
        You can get {{ tokenSymbol }} at
        <a href="https://www.gate.io/de/trade/TEER_USDT">gate.io</a> and
        <a
          href="https://www.kraken.com/prices/integritee?quote=usd&interval=24h"
          >Kraken</a
        >
      </p>
      <p class="text-sm text-gray-400">
        after buying {{ tokenSymbol }}, withdraw them to this address:
      </p>
      <div class="flex flex-col mt-5">
        <div class="relative flex items-center rounded-lg">
          <input
            id="accountAddress"
            type="text"
            :value="withdrawToAddress"
            readonly
            class="w-full text-sm rounded-lg flex-grow pr-14 py-2 bg-cool-900 text-white placeholder-gray-500 border border-green-500 truncate-input"
            style="border-color: #24ad7c"
          />
          <div class="absolute right-3 flex space-x-2">
            <div @click="copyOwnAddressToClipboard" class="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </OverlayDialog>
</template>

<script setup lang="ts">
import OverlayDialog from "~/components/overlays/OverlayDialog.vue";
import { defineProps } from "vue";

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  close: {
    type: Function,
    required: true,
  },
  tokenSymbol: {
    type: String,
    required: true,
  },
  withdrawToAddress: {
    type: String,
    required: true,
  },
});

const copyOwnAddressToClipboard = () => {
  navigator.clipboard
    .writeText(props.withdrawToAddress)
    .then(() =>
      alert(
        "copied your account address to clipboard. Please use this address to withdraw tokens to",
      ),
    );
};
</script>

<style scoped></style>
