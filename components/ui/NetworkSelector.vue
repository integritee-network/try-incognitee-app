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
      :class="{
        'border-2 border-incognitee-green':
          selectedNetwork === ChainId.IntegriteeKusama,
      }"
      @click="handleTeerClick"
    >
      <TEER class="w-[30px] h-[30px]" />
      <p class="text-xs">TEER</p>
      <span
        class="inline-flex items-center rounded-lg bg-gray-100 px-1.5 py-0.5 text-[10px] font-medium text-gray-600"
        >coming soon</span
      >
      <div class="ribbon red"><span>beta</span></div>
    </div>
    <div
      class="currency-box gap-2 p-3 basis-1/3 relative"
      :class="{
        'border-2 border-incognitee-green':
          selectedNetwork === ChainId.PaseoRelay,
      }"
      @click="handlePasClick"
    >
      <Paseo class="w-[30px] h-[30px]" />
      <p class="text-xs">PAS<br />PASEO</p>
      <div class="ribbon blue"><span>test</span></div>
    </div>
    <div
      class="currency-box gap-2 p-3 basis-1/3 relative"
      @click="openAssetsInfo"
    >
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
import { ChainId } from "@/configs/chains.ts";
import { defineProps } from "vue";

const props = defineProps({
  openAssetsInfo: {
    type: Function,
    required: true,
  },
  selectedNetwork: {
    type: Number,
    required: true,
  },
});

const handleTeerClick = () => {
  try {
    if (props.selectedNetwork === ChainId.IntegriteeKusama) {
      console.log("do nothing");
    } else {
      console.log("open link");
      window.open("https://app.incognitee.io", "_blank");
    }
  } catch (e) {
    console.log(e);
  }
};

const handlePasClick = () => {
  try {
    if (props.selectedNetwork === ChainId.PaseoRelay) {
      console.log("do nothing");
    } else {
      console.log("open link");
      window.open("https://try.incognitee.io", "_blank");
    }
  } catch (e) {
    console.log(e);
  }
};
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
  color: white;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  transform: rotate(45deg);
  top: 9px;
  right: -33px;
}

.ribbon.red span {
  background-color: var(--integritee-red);
}

.ribbon.blue span {
  background-color: var(--integritee-blue);
}
</style>
