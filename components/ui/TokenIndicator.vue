<template>
  <div class="relative group mb-3">
    <!-- Dropdown Trigger -->
    <div
      class="flex items-center justify-between w-full rounded-md border border-gray-700 bg-gray-800 py-1 px-3 text-xs text-gray-400 hover:ring-1 hover:ring-incognitee-green focus-within:ring-1 focus-within:ring-incognitee-green cursor-pointer"
      @click="toggleTokenDropdown"
    >
      <!-- Token Icon und Name -->
      <div class="flex items-center">
        <TEER v-if="selectedToken === 'TEER'" class="w-[14px] h-[14px] mr-2" />
        <Paseo
          v-else-if="selectedToken === 'PAS'"
          class="w-[14px] h-[14px] mr-2"
        />
        <DOT
          v-else-if="selectedToken === 'DOT'"
          class="w-[14px] h-[14px] mr-2"
        />
        <div v-else class="spinner"></div>
        <span class="truncate">{{ selectedToken }}</span>
      </div>

      <!-- Badge -->
      <span
        v-if="selectedToken === 'TEER'"
        class="inline-flex items-center ml-3 rounded-md bg-yellow-400/10 px-2 py-0.5 text-xs font-medium text-yellow-500 ring-1 ring-yellow-400/20"
      >
        Beta
      </span>
      <span
        v-else-if="selectedToken === 'PAS'"
        class="inline-flex items-center ml-3 rounded-md bg-blue-400/10 px-2 py-0.5 text-xs font-medium text-blue-400 ring-1 ring-blue-400/30"
      >
        Test
      </span>
      <span
        v-else-if="selectedToken === 'DOT'"
        class="inline-flex items-center ml-3 rounded-md bg-green-400/10 px-2 py-0.5 text-xs font-medium text-green-400 ring-1 ring-green-400/30"
      >
        Beta
      </span>

      <!-- Dropdown Pfeil -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        :class="['w-3 h-3 ml-2', dropdownIsOpen ? 'rotate-180' : '']"
        class="transition-transform text-gray-500 hover:text-incognitee-green"
      >
        <path
          fill-rule="evenodd"
          d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
          clip-rule="evenodd"
        />
      </svg>
    </div>

    <!-- Dropdown Menu -->
    <div
      v-show="dropdownIsOpen"
      class="absolute top-full mt-2 w-full rounded-md bg-gray-800 border border-gray-700 shadow-lg text-gray-400 z-10"
    >
      <div
        v-for="item in tokenSelectorItems"
        :key="item.value"
        class="flex items-center justify-between px-3 py-2 text-xs hover:bg-gray-700 hover:text-white cursor-pointer"
        @click="selectToken(item)"
      >
        <!-- Icon und Token Name -->
        <div class="flex items-center">
          <component :is="item.icon" class="w-[14px] h-[14px] mr-2" />
          <span>{{ item.label }}</span>
        </div>

        <!-- Badge -->
        <span
          v-if="item.label === 'TEER' || item.label === 'DOT'"
          class="inline-flex items-center rounded-md bg-yellow-400/10 px-2 py-1 text-xs font-medium text-yellow-500 ring-1 ring-yellow-400/20 ring-inset"
        >
          Beta
        </span>
        <span
          v-else-if="item.label === 'PAS'"
          class="inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-blue-400/30 ring-inset"
        >
          Test
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import Paseo from "@/assets/img/paseo-logo.svg";
import TEER from "@/assets/img/logo-icon.svg";
import DOT from "@/assets/img/polkadot-logo.svg";
import { useRouter } from "vue-router";
import { useAccount } from "@/store/account";

// Zustand des Dropdowns
const dropdownIsOpen = ref(false);
const selectedToken = ref("");
const router = useRouter();
const accountStore = useAccount();

// Token Liste
const tokenSelectorItems = [
  { label: "TEER", value: "TEER", icon: TEER },
  { label: "PAS", value: "PAS", icon: Paseo },
  { label: "DOT", value: "DOT", icon: DOT },
];

// Dropdown umschalten
const toggleTokenDropdown = () => {
  dropdownIsOpen.value = !dropdownIsOpen.value;
};

// Token auswählen und navigieren
const selectToken = (item) => {
  const currentQuery = { ...router.currentRoute.value.query };
  const newPath = router.currentRoute.value.path.replace(
    /\/[^/?]*(?=\/|\?|$)/,
    `/${item.label.toLowerCase()}`,
  );
  router.push({ path: newPath, query: currentQuery }).then(() => {
    selectedToken.value = item.value;
    window.location.reload(); // Seite neu laden
  });
};

// Token überwachen
watch(
  () => accountStore.getSymbol,
  (newToken) => {
    if (newToken) {
      console.debug("TokenIndicator: setting token to : ", newToken);
      selectedToken.value = newToken;
    }
  },
);

onMounted(() => {
  const token = accountStore.getSymbol;
  if (token && token !== "UNIT") {
    selectedToken.value = accountStore.getSymbol;
  }
});
</script>

<style scoped>
/* Dropdown Animation */
.rotate-180 {
  transform: rotate(180deg);
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
.spinner {
  border: 2px solid #f3f3f3; /* Light grey */
  border-top: 2px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 1em; /* Adjust the size here */
  height: 1em; /* Adjust the size here */
  animation: spin 2s linear infinite;
  vertical-align: middle; /* Align with the text */
}
</style>
