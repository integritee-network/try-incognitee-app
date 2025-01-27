<template>
  <div v-if="show">
    <div class="mt-10 flex justify-between items-center">
      <div
        class="title text-2xl font-bold tracking-tight text-white sm:text-2xl"
      >
        History
      </div>
    </div>
    <div
      class="my-5 mx-5 flex flex-col items-center text-center text-incognitee-blue text-xs"
    >
      <!-- Text oben -->
      <span class="mb-2"
        >Look up your account's public tx history on public indexers:</span
      >

      <!-- Icons unten -->
      <div class="indexer-links flex justify-center items-center space-x-4">
        <div
          v-for="(url, index) in indexerUrls"
          :key="index"
          class="flex items-center justify-center mt-3"
        >
          <a
            :href="url"
            target="_blank"
            class="flex items-center justify-center"
          >
            <img :src="getIcon(url)" alt="indexer icon" class="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, ref } from "vue";
import { useAccount } from "@/store/account.ts";
import { chainConfigs } from "~/configs/chains";
import { shieldingTarget } from "~/lib/environmentConfig";
import SUBSCAN from "@/assets/img/subscan-logo.png";
import STATESCAN from "@/assets/img/statescan-logo.png";
const accountStore = useAccount();

const indexerUrls = computed(() => {
  return chainConfigs[shieldingTarget.value].indexerUrls?.map((url) =>
    url.replace("ADDRESS", accountStore.getAddress),
  );
});

const getIcon = (url: string) => {
  if (url.includes("subscan.io")) {
    return SUBSCAN;
  } else if (url.includes("statescan.io")) {
    return STATESCAN;
  }
  return ""; // Replace with actual path to default icon
};

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
});
</script>

<style scoped>
.wallet-address {
  display: block;
  white-space: nowrap;
  /* Verhindert Zeilenumbruch */
  overflow: hidden;
  /* Versteckt überlaufenden Text */
  text-overflow: ellipsis;
  /* Zeigt '...' bei zu langem Text an */
}

/* Für mobile Bildschirme (max-width: 640px) */
@media (max-width: 640px) {
  .wallet-address {
    max-width: 10ch;
    /* Zeigt nur die ersten 5 Zeichen */
  }
}

/* Für größere Bildschirme (ab 641px) */
@media (min-width: 641px) {
  .wallet-address {
    max-width: none;
    /* Zeigt die komplette Adresse an */
  }
}

.walletdesktop-address {
  display: block;
  white-space: nowrap;
  /* Verhindert Zeilenumbruch */
  overflow: hidden;
  /* Versteckt überlaufenden Text */
  text-overflow: ellipsis;
  /* Zeigt '...' bei zu langem Text an */
  max-width: 10ch;
}

.text-blue {
  color: #2563eb;
}

textarea {
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  resize: none;
  /* Verhindert manuelles Ändern der Größe */
}

.currency-box {
  position: relative;
  outline: none;
  /* Keine Outline standardmäßig */
}

.currency-box:hover {
  outline: 2px solid var(--incognitee-green);
  /* Verwende outline statt border */
}

.text-overflow {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.border-green-500 {
  border-color: #24ad7c;
}

.bg-gray-800 {
  background-color: #1f2937;
}

.text-white {
  color: #ffffff;
}

.truncate-input {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

h1 {
  font-size: 1em;
  /* Adjust as needed */
  font-weight: bold;
  /* Makes the text bold */
  color: #999;
  /* Change color as needed */
  text-align: center;
  /* Centers the text */
  margin-bottom: 20px;
  /* Adds space below the heading */
}

hr {
  border: none;
  border-top: 1px #222;
  /* Change color as needed */
  color: #111;
  /* Change color as needed */
  background-color: #333;
  /* Change color as needed */
  height: 1px;
  /* Adjust as needed */
}

.qrcode-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.form-container input {
  background-color: #333;
  color: #fff;
  /* You might want to change the text color to ensure it's readable against the dark background */
}

.form-container input#amount {
  font-size: 2em;
  /* Make the font size twice as large */
  text-align: center;
  /* Center the text */
  width: 50%;
  /* Reduce the width by 50% */
}

.spinner {
  border: 2px solid #f3f3f3;
  /* Light grey */
  border-top: 2px solid #3498db;
  /* Blue */
  border-radius: 50%;
  width: 1em;
  /* Adjust the size here */
  height: 1em;
  /* Adjust the size here */
  animation: spin 2s linear infinite;
  vertical-align: middle;
  /* Align with the text */
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
.indexer-links {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 10px; /* Adjust the gap between links as needed */
}
</style>
