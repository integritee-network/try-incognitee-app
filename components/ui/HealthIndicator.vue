<template>
  <div
    @click="openHealthDetailsOverlay"
    class="cursor-pointer"
    id="health-indicator"
  >
    <div
      class="flex items-center text-xs"
      v-if="contextualHealth === Health.Healthy"
    >
      <div
        class="bg-green-500 w-3 h-3 rounded-full"
        title="system health: all good"
      ></div>
    </div>
    <div
      class="flex items-center text-xs"
      v-else-if="contextualHealth === Health.Warning"
    >
      <div
        class="bg-yellow-500 w-3 h-3 rounded-full"
        title="system health: warnings"
      ></div>
    </div>
    <div
      class="flex items-center text-xs"
      v-else-if="contextualHealth === Health.Critical"
    >
      <div
        class="bg-red-500 w-3 h-3 rounded-full"
        title="system health: critical"
      ></div>
    </div>
    <div class="flex items-center text-xs" v-else>
      <div
        class="bg-gray-500 w-3 h-3 rounded-full"
        title="health unknown"
      ></div>
    </div>
  </div>
  <HealthDetailsOverlay
    :show="showHealthDetailsOverlay"
    :close="closeHealthDetailsOverlay"
  />
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useSystemHealth, Health } from "@/store/systemHealth.ts";
import { useRouter } from "vue-router";
import HealthDetailsOverlay from "~/components/overlays/HealthDetailsOverlay.vue";

const systemHealth = useSystemHealth();
const router = useRouter();

const contextualHealth = computed(() => {
  //    case "/teerdays":
  //      return systemHealth.getIntegriteeSystemHealth.overall();
  return systemHealth.getSidechainSystemHealth.overall();
});

const showHealthDetailsOverlay = ref(false);
const openHealthDetailsOverlay = () => {
  showHealthDetailsOverlay.value = true;
};
const closeHealthDetailsOverlay = () => {
  showHealthDetailsOverlay.value = false;
};
</script>

<style scoped></style>
