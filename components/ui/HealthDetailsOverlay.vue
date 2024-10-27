<template>
  <OverlayDialog :show="show" :close="close" title="System Health">
    <div class="mt-2">
      <p class="text-sm text-gray-400">blabla</p>
      <div v-if="router.currentRoute.value.path === '/teerdays'">
        <p :class="['text-sm', 'text-gray-400', integriteeNetworkBlockNumberAgeColor]">
          Integritee Network Block Height:<br>
          {{
            formatBlockNumber(
              systemHealth.getIntergiteeBlockNumberObservable?.value,
            )
          }}
          <b>{{ integriteeNetworkBlockNumberAge }}s</b>
        </p>
      </div>
      <div v-else>
        <p :class="['text-sm', 'text-gray-400', shieldingTargetBlockNumberAgeColor]">
          Shielding Target Network Block Height:<br>
          {{
            formatBlockNumber(
              systemHealth.getShieldingTargetBlockNumberObservable?.value,
            )
          }}
          <b>{{ shieldingTargetBlockNumberAge }}s</b>
        </p>
        <p :class="['text-sm', 'text-gray-400', shieldingTargetImportLagColor]">
          last imported to sidechain:<br>
          {{
            formatBlockNumber(
              systemHealth.getShieldingTargetImportedBlockNumberObservable?.value,
            )
          }}

          <b>{{ shieldingTargetImportLag }} blocks behind</b>
        </p>
      </div>
    </div>
  </OverlayDialog>
</template>

<script setup lang="ts">
import OverlayDialog from "@/components/ui/OverlayDialog.vue";
import {computed, defineProps, ref, watch} from "vue";
import {Health, useSystemHealth} from "@/store/systemHealth";
import { useInterval } from "@vueuse/core";
import { useRouter } from "vue-router";
const router = useRouter();
const systemHealth = useSystemHealth();

const integriteeNetworkBlockNumberAge = ref(0);
const shieldingTargetBlockNumberAge = ref(0);

const tickerCounter = useInterval(300);

watch(tickerCounter, () => {
  const now = Date.now();
  let observable = systemHealth.getIntergiteeBlockNumberObservable;
  if (observable?.timestamp) {
    integriteeNetworkBlockNumberAge.value = Math.round(
      (now - observable?.timestamp.getTime()) / 1000,
    );
  }
  observable = systemHealth.getShieldingTargetBlockNumberObservable;
  if (observable?.timestamp) {
    shieldingTargetBlockNumberAge.value = Math.round(
      (now - observable?.timestamp.getTime()) / 1000,
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
  return blockNumber?.toLocaleString("de-CH", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    thousandsSeparator: "'",
  });
};

const shieldingTargetImportLag = computed(() => {
  return (
    systemHealth.getShieldingTargetBlockNumberObservable?.value -
    systemHealth.getShieldingTargetImportedBlockNumberObservable?.value
  );
});

const integriteeNetworkBlockNumberAgeColor = computed(() => {
  const age = integriteeNetworkBlockNumberAge.value;
  if (age < 14) {
    return 'text-green-500';
  } else if (age <= 30) {
    return 'text-yellow-500';
  } else {
    return 'text-red-500';
  }
});

const shieldingTargetBlockNumberAgeColor = computed(() => {
  const age = shieldingTargetBlockNumberAge.value;
  if (age < 14) {
    return 'text-green-500';
  } else if (age <= 30) {
    return 'text-yellow-500';
  } else {
    return 'text-red-500';
  }
});

const shieldingTargetImportLagColor = computed(() => {
  const lag = shieldingTargetImportLag.value;
  if (lag < 5) {
    return 'text-green-500';
  } else if (lag < 10) {
    return 'text-yellow-500';
  } else {
    return 'text-red-500';
  }
});
</script>

<style scoped></style>
