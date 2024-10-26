<template>
  <OverlayDialog :show="show" :close="close" title="System Health">
    <div class="mt-2">
      <p class="text-sm text-gray-400">blabla</p>
      <p class="text-sm text-gray-400">
        Integritee Network Block Height:
        {{
          formatBlockNumber(
            systemHealth.getIntergiteeBlockNumberObservable?.value,
          )
        }}
        {{ integriteeNetworkBlockNumberAge }}s
      </p>
    </div>
  </OverlayDialog>
</template>

<script setup lang="ts">
import OverlayDialog from "@/components/ui/OverlayDialog.vue";
import { defineProps, ref, watch } from "vue";
import { useSystemHealth } from "@/store/systemHealth";
import { useInterval } from "@vueuse/core";

const systemHealth = useSystemHealth();

const integriteeNetworkBlockNumberAge = ref(0);

const tickerCounter = useInterval(300);
watch(tickerCounter, () => {
  const observable = systemHealth.getIntergiteeBlockNumberObservable;
  if (observable?.timestamp) {
    integriteeNetworkBlockNumberAge.value = Math.round(
      (Date.now() - observable?.timestamp.getTime()) / 1000,
    );
  }
});

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  close: {
    type: Function,
    required: true,
  },
});

const formatBlockNumber = (blockNumber: number) => {
  return blockNumber.toLocaleString("de-CH", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    thousandsSeparator: "'",
  });
};
</script>

<style scoped></style>
