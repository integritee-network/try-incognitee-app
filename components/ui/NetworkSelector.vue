<template>
  <div
    class="flex flex-row justify-between w-full text-center gap-4 container mb-10"
  >
    <div class="currency-box p-3 gap-2 basis-1/2" @click="openAssetsInfo">
      <Polkadot class="w-[30px] h-[30px]" />
      <p class="text-xs">DOT</p>
      <span
        class="inline-flex items-center rounded-lg bg-gray-100 px-1.5 py-0.5 text-[10px] font-medium text-gray-600"
        >coming soon</span
      >
    </div>
    <div
      class="currency-box gap-2 p-3 basis-1/2 border-2 border-incognitee-green"
    >
      <Paseo class="w-[30px] h-[30px]" />
      <p class="text-xs">PAS<br />PASEO</p>
    </div>
    <div class="currency-box gap-2 p-3 basis-1/2" @click="openAssetsInfo">
      <USDC class="w-[30px] h-[30px]" />
      <p class="text-xs">USDC</p>
      <span
        class="inline-flex items-center rounded-lg bg-gray-100 px-1.5 py-0.5 text-[10px] font-medium text-gray-600"
        >coming soon</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import Polkadot from "assets/img/polkadot-logo.svg";
import Paseo from "assets/img/paseo-logo.svg";
import USDC from "assets/img/usdc-logo.svg";

import { defineProps } from "vue";

const props = defineProps({
  openAssetsInfo: {
    type: Function,
    required: true,
  },
});
</script>

<style scoped></style>
