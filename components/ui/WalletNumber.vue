<template>
  <div
    class="flex items-center text-xs gap-1"
    @click="emitEvent('addressClicked')"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-4 text-gray-400"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
      />
    </svg>
    <span class="text-xs wallet-address text-gray-400">{{
      accountStore.getAddress
    }}</span>
  </div>
</template>

<script setup lang="ts">
import { useAccount } from "~/store/account";
import { eventBus } from "@/helpers/eventBus";

const accountStore = useAccount();

// Event-Emitter-Funktionen
const emitEvent = (eventName: string) => {
  eventBus.emit(eventName);
};
</script>

<style scoped>
.wallet-address {
  display: block;
  white-space: nowrap; /* Verhindert Zeilenumbruch */
  overflow: hidden; /* Versteckt überlaufenden Text */
  text-overflow: ellipsis; /* Zeigt '...' bei zu langem Text an */
  max-width: 10ch; /* Maximale Länge: 10 Zeichen */
}

/* Für größere Bildschirme (ab 641px) */
@media (min-width: 641px) {
  .wallet-address {
    max-width: 10ch; /* Begrenze auch hier auf 10 Zeichen */
  }
}
</style>
