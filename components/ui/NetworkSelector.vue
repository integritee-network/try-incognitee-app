<template>
  <div
    class="flex flex-row justify-between w-full text-center gap-4 container mb-4"
  >
    <!-- TEER Box -->
    <div
      class="currency-box gap-2 p-3 basis-1/3 relative cursor-pointer"
      :class="{
        'border-incognitee-green':
          teerHover || selectedNetwork === ChainId.IntegriteeKusama,
      }"
      @mouseover="teerHover = true"
      @mouseleave="teerHover = false"
      @click="handleTeerClick"
      title="Integritee Network"
    >
      <TEER class="w-[30px] h-[30px]" />
      <p class="text-xs">TEER</p>
      <div class="ribbon red"><span>beta</span></div>
    </div>

    <!-- PAS PASEO Box -->
    <div
      class="currency-box gap-2 p-3 basis-1/3 relative cursor-pointer"
      :class="{
        'border-incognitee-green':
          pasHover || selectedNetwork === ChainId.PaseoRelay,
      }"
      @mouseover="pasHover = true"
      @mouseleave="pasHover = false"
      @click="handlePasClick"
      title="Paseo Testnet"
    >
      <Paseo class="w-[30px] h-[30px]" />
      <p class="text-xs">PAS</p>
      <div class="ribbon blue"><span>test</span></div>
    </div>

    <!-- USDC Box -->
    <div
      class="currency-box gap-2 p-3 basis-1/3 relative cursor-pointer"
      @click="openAssetsInfo"
      title="USDC on Asset Hub"
    >
      <USDC class="w-[30px] h-[30px]" />
      <p class="text-xs">USDC</p>
      <div class="ribbon gray"><span>soon</span></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import Paseo from "assets/img/paseo-logo.svg";
import USDC from "assets/img/usdc-logo.svg";
import TEER from "@/assets/img/logo-icon.svg";
import { ChainId } from "@/configs/chains.ts";
import { defineProps } from "vue";
import { chainConfigs } from "@/configs/chains.ts";

// Props werden übergeben
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

// Hover-Zustände
const teerHover = ref(false);
const pasHover = ref(false);

// Funktionen für das Klicken auf die Boxen
const handleTeerClick = () => {
  try {
    if (props.selectedNetwork === ChainId.IntegriteeKusama) {
      console.log("do nothing");
    } else {
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
      window.open("https://try.incognitee.io", "_blank");
    }
  } catch (e) {
    console.log(e);
  }
};
</script>

<style scoped>
.currency-box {
  position: relative;
  border: 2px solid transparent; /* Transparenter Rahmen als Platzhalter */
  transition: border-color 0.3s ease; /* Sanfter Übergang der Rahmenfarbe */
}

.currency-box.border-incognitee-green {
  border-color: #24ad7c; /* Grüne Rahmenfarbe */
}

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

.ribbon.gray span {
  background-color: var(--integritee-gray);
}
</style>
