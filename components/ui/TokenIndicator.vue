<template>
  <div class="relative group">
    <!-- Dropdown Trigger -->
    <div
      class="flex items-center justify-between w-full rounded-md border border-gray-700 bg-gray-800 py-1 px-3 text-xs text-gray-400 hover:ring-1 hover:ring-incognitee-green focus-within:ring-1 focus-within:ring-incognitee-green cursor-pointer"
      @click="toggleTokenDropdown"
    >
      <!-- Token Icon und Name -->
      <div class="flex items-center">
        <div v-if="getIconUrlForAsset(selectedToken)">
          <img
            :src="getIconUrlForAsset(selectedToken)"
            class="w-[14px] h-[14px]"
          />
        </div>
        <div v-else class="spinner"></div>
        <div v-if="getHubIconUrlForAsset(selectedToken)">
          <img
            :src="getHubIconUrlForAsset(selectedToken)"
            class="w-[8px] h-[8px]"
          />
        </div>
        <span class="ml-2 truncate">{{ selectedToken }}</span>
      </div>

      <!-- Badge -->
      <span
        v-if="
          isBetaSidechain(incogniteeSidechain) &&
          getMaturityForAsset(selectedToken) === 'beta'
        "
        class="hidden sm:inline-flex items-center ml-3 rounded-md bg-yellow-400/10 px-2 py-0.5 text-xs font-medium text-yellow-500 ring-1 ring-yellow-400/20"
      >
        Beta
      </span>
      <span
        v-else-if="
          isBetaSidechain(incogniteeSidechain) &&
          getMaturityForAsset(selectedToken) === 'soon'
        "
        class="hidden sm:inline-flex items-center ml-3 rounded-md bg-gray-400/10 px-2 py-0.5 text-xs font-medium text-gray-400 ring-1 ring-gray-400/30"
      >
        Soon
      </span>
      <span
        v-else-if="isSidechainTestnet(incogniteeSidechain)"
        class="hidden sm:inline-flex items-center ml-3 rounded-md bg-blue-400/10 px-2 py-0.5 text-xs font-medium text-blue-400 ring-1 ring-blue-400/30"
      >
        Test
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
        v-for="item in getSelectableTokens(
          isSidechainTestnet(incogniteeSidechain),
        )"
        :key="item.value"
        class="flex items-center justify-between px-3 py-2 text-xs hover:bg-gray-700 hover:text-white cursor-pointer"
        @click="selectToken(item)"
      >
        <!-- Icon und Token Name -->
        <div class="flex items-center">
          <img :src="item.icon" alt="" class="w-[14px] h-[14px]" />
          <div v-if="item.hubIcon" class="mr-2">
            <img :src="item.hubIcon" alt="" class="w-[10px] h-[10px] mr-2" />
          </div>
          <div v-else class="mr-2"></div>
          <span>{{ item.label }}</span>
        </div>

        <!-- Badge -->
        <span
          v-if="item.maturity === 'beta'"
          class="hidden sm:inline-flex items-center rounded-md bg-yellow-400/10 px-2 py-1 text-xs font-medium text-yellow-500 ring-1 ring-yellow-400/20 ring-inset"
        >
          Beta
        </span>
        <span
          v-else-if="item.maturity === 'soon'"
          class="hidden sm:inline-flex items-center ml-3 rounded-md bg-gray-400/10 px-2 py-0.5 text-xs font-medium text-gray-400 ring-1 ring-gray-400/30"
        >
          Soon
        </span>
        <span
          v-if="item.maturity === 'test'"
          class="hidden sm:inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-blue-400/30 ring-inset"
        >
          Test
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAccount } from "@/store/account";
import { incogniteeSidechain, asset } from "~/lib/environmentConfig";
import { isBetaSidechain, isSidechainTestnet } from "~/configs/chains.ts";
import {
  getIconUrlForAsset,
  getHubIconUrlForAsset,
  getSelectableTokens,
  getMaturityForAsset,
} from "~/configs/assets.ts";

// Zustand des Dropdowns
const dropdownIsOpen = ref(false);
const selectedToken = ref("");
const router = useRouter();
const accountStore = useAccount();

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
  () => accountStore.getSymbol(null),
  (newToken) => {
    if (newToken) {
      // now that all metadata is ready, get the symbol properly
      const token = accountStore.getSymbol(asset.value);
      console.debug("TokenIndicator: setting token to : ", token);
      selectedToken.value = token;
    }
  },
);

onMounted(() => {
  const token = accountStore.getSymbol(null);
  if (token && token !== "UNIT") {
    // if all metadata is ready, get the symbol properly
    const token = accountStore.getSymbol(asset.value);
    console.debug("TokenIndicator onMounted: setting token to : ", token);
    selectedToken.value = token;
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
