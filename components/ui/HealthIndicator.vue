<template>
  <div v-if="contextualHealth === Health.Healthy">
    <div class="bg-green-500 w-4 h-4 rounded-full" title="all good"></div>
  </div>
  <div v-else-if="contextualHealth === Health.Warning">
    <div class="bg-yellow-500 w-4 h-4 rounded-full" title="warnings"></div>
  </div>
  <div v-else-if="contextualHealth === Health.Critical">
    <div class="bg-red-500 w-4 h-4 rounded-full" title="critical"></div>
  </div>
  <div v-else>
    <div class="bg-gray-500 w-4 h-4 rounded-full" title="health unknown"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useSystemHealth, Health } from "@/store/systemHealth.ts";
import { useRouter } from 'vue-router';

const systemHealth = useSystemHealth();
const router = useRouter();



const contextualHealth = computed(() => {
  switch (router.currentRoute.value.path) {
    case '/':
      return systemHealth.getAggregatedSystemHealth;
    case '/teerdays':
      return systemHealth.getIntegriteeSystemHealth;
    default:
      return Health.Unknown;
  }
});
</script>


<style scoped>

</style>
