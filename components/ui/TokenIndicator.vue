<template>
  <div v-if="accountStore.getSymbol === 'TEER'">
    <TEER class="w-[23px] h-[23px]" />
  </div>
  <div v-else-if="accountStore.getSymbol === 'DOT'">
    <DOT class="w-[23px] h-[23px]" />
  </div>
  <div v-else-if="accountStore.getSymbol === 'PAS'">
    <Paseo class="w-[23px] h-[23px]" />
  </div>
  <div v-else class="spinner"></div>
</template>

<script setup lang="ts">
import Paseo from "@/assets/img/paseo-logo.svg";
import TEER from "@/assets/img/logo-icon.svg";
import DOT from "@/assets/img/polkadot-logo.svg";
import { useAccount } from "~/store/account";

const accountStore = useAccount();
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

.ribbon.gray span {
  background-color: var(--integritee-gray);
}
</style>
