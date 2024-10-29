<template>
  <OverlayDialog :show="show" :close="close" title="System Health">
    <div class="mt-2">
      <div v-if="router.currentRoute.value.path === '/teerdays'">
        <p
          :class="[
            'text-sm',
            'text-gray-400',
            healthColor(
              systemHealth.getIntegriteeSystemHealth.integriteeProgress,
            ),
          ]"
        >
          Integritee Network Block Height:<br />
          {{
            formatBlockNumber(
              systemHealth.getIntergiteeBlockNumberObservable?.value,
            )
          }}
          <b>{{ integriteeNetworkBlockNumberAge }}s</b>
        </p>
      </div>
      <div v-else>
        <p class="text-sm text-gray-400">
          This service is in <b>BETA</b>. Use at your own risk.
        </p>
        <br />
        <p class="text-sm text-gray-400 wrap">
          Incognitee shard: <i>{{ incogniteeShard }}</i>
        </p>
        <p class="text-sm text-gray-400 wrap">
          Incognitee fingerprint: <i>{{ incogniteeStore.getFingerprint }}</i>
        </p>
        <br />
        <p class="text-sm text-gray-400">
          Shielding Target: <b>{{ chainConfigs[shieldingTarget].name }}</b>
        </p>
        <p
          :class="[
            'text-sm',
            'text-gray-400',
            healthColor(
              systemHealth.getSidechainSystemHealth.shieldingTargetProgress,
            ),
          ]"
        >
          Last block:
          {{
            formatBlockNumber(
              systemHealth.getShieldingTargetBlockNumberObservable?.value,
            )
          }}
          <b>{{ shieldingTargetBlockNumberAge }}s</b>
        </p>
        <br />
        <p class="text-sm text-gray-400 wrap">
          genesis hash for api vs enclave light client:
        </p>
        <p
          :class="[
            'text-sm',
            'text-gray-400',
            healthColor(systemHealth.getSidechainSystemHealth.genesisMatch),
          ]"
        >
          {{
            systemHealth.getShieldingTargetApiGenesisHashHex
              ? systemHealth.getShieldingTargetApiGenesisHashHex.slice(0, 8) +
                "..."
              : "unknown"
          }}
          vs
          {{
            systemHealth.getShieldingTargetLightClientGenesisHashHex
              ? systemHealth.getShieldingTargetLightClientGenesisHashHex.slice(
                  0,
                  8,
                ) + "..."
              : "unknown"
          }}
        </p>
        <br />
        <p class="text-sm text-gray-400">
          Sidechain import of finalized target blocks
        </p>
        <p
          :class="[
            'text-sm',
            'text-gray-400',
            healthColor(
              systemHealth.getSidechainSystemHealth
                .shieldingTargetImportProgress,
            ),
          ]"
        >
          Last imported L1 block<br />
          {{
            formatBlockNumber(
              systemHealth.getShieldingTargetImportedBlockNumberObservable
                ?.value,
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
import { computed, defineProps, ref, watch } from "vue";
import { Health, useSystemHealth } from "@/store/systemHealth";
import { useInterval } from "@vueuse/core";
import { useRouter } from "vue-router";
import { useIncognitee } from "@/store/incognitee.ts";
import { chainConfigs } from "@/configs/chains.ts";
import { shieldingTarget, incogniteeShard } from "@/lib/environmentConfig";

const router = useRouter();
const systemHealth = useSystemHealth();
const incogniteeStore = useIncognitee();
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

const healthColor = (health: Health) => {
  switch (health) {
    case Health.Healthy:
      return "text-green-500";
    case Health.Warning:
      return "text-yellow-500";
    case Health.Critical:
      return "text-red-500";
    default:
      return "text-gray-500";
  }
};
</script>

<style scoped>
.wrap {
  white-space: pre-wrap; /* CSS3 */
  white-space: -moz-pre-wrap; /* Mozilla */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
}
</style>
