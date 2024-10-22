<template>
  <div
    class="flex flex-row justify-between w-full text-center gap-4 container mb-10"
  >
    <!-- USE THIS LATER TO LINK TO app.incognitee.io <a
          href=""
      target="_blank"
      class="currency-box p-3 gap-2 basis-1/4 hover:border-2 hover:border-incognitee-green"
    >
      <TEER class="w-[30px] h-[30px]" />
      <p class="text-xs">TEER<br />Integritee</p>
    </a>
    -->
    <div
      class="currency-box gap-2 p-3 basis-1/3 relative"
      @click="openAssetsInfo"
    >
      <TEER class="w-[30px] h-[30px]" />
      <p class="text-xs">TEER</p>
      <span
        class="inline-flex items-center rounded-lg bg-gray-100 px-1.5 py-0.5 text-[10px] font-medium text-gray-600"
        >coming soon</span
      >
      <div class="ribbon"><span>beta</span></div>
    </div>
    <div
      class="currency-box gap-2 p-3 basis-1/3 border-2 border-incognitee-green"
    >
      <Paseo class="w-[30px] h-[30px]" />
      <p class="text-xs">PAS<br />PASEO</p>
    </div>
    <div class="currency-box gap-2 p-3 basis-1/3" @click="openAssetsInfo">
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
import Paseo from "assets/img/paseo-logo.svg";
import USDC from "assets/img/usdc-logo.svg";
import TEER from "@/assets/img/logo-icon.svg";

import { defineProps } from "vue";

defineProps({
  openAssetsInfo: {
    type: Function,
    required: true,
  },
});
</script>

<style scoped>
.ribbon {
  position: absolute;
  top: 0;
  right: 0;
  width: 75px;
  height: 75px;
  overflow: hidden;
  pointer-events: none;
}

.ribbon span {
  position: absolute;
  display: block;
  width: 100px;
  padding: 0px 0;
  background-color: red;
  color: white;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  transform: rotate(45deg);
  top: 9px;
  right: -33px;
}
</style>
