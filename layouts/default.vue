<template>
  <div class="flex bg-incognitee-blue text-white h-screen">

    <!-- Sidebar stays left -->
    <Sidebar class="w-64 border-r border-gray-800 hidden lg:block"/>
   
    <!-- Content-Bereich: Container zentriert neben der Sidebar -->
    <div class="flex flex-1 justify-center">

      <!-- Top header for mobile -->
      <div v-if="isMobile" class="p-3 fixed top-0 left-0 right-0 z-40 ">
        <div class="flex justify-between items-center">
          <button
            @click="eventBus.emit('toggleSidebar')"
            class="xl:hidden text-white focus:outline-none text-2xl "
            id="sidebar-open"
          >
            ☰
          </button>
          <div  class="xl:hidden">
            <HealthIndicator id="header-health-indicator" />
          </div>
          <div  class="xl:hidden">
            <WalletIndicator id="header-wallet-indicator" />
          </div>
          <div class="xl:hidden">
            <TokenIndicator id="header-token-indicator" />
          </div>
        </div>
      </div>

      <!-- Innerer Container: Begrenzte Breite, linksbündiger Inhalt -->
      <div class="w-full max-w-[800px] mt-3 flex flex-col items-start overflow-scroll">
        <main class="w-full">
          <div :style="{ paddingTop: isMobile ? '60px' : '20px' }">
            <div :class="[
                'fixed py-4 rounded-xl shadow-xl flex flex-col',
                //'z-40' // Lower than chat history sidebar (z-50) but higher than main sidebar
              ]" :style="{ 
                top: isMobile ? '30px' : isMediumScreen ? '20px' : '20px', 
                left: isMobile ? '20px' : isMediumScreen ? '290px' : '290px', 
                right: isMobile ? '10px' : isMediumScreen ? '10px' : '10px', 
                width: isMobile ? 'calc(100% - 30px)' : isMediumScreen ? 'calc(100% - 290px)' : 'calc(100% - 500px)'
              }"> 
            <NuxtPage />
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import HealthIndicator from "@/components/ui/HealthIndicator.vue";
import TokenIndicator from "@/components/ui/TokenIndicator.vue";
import WalletIndicator from "@/components/ui/WalletIndicator.vue";
import Sidebar from "@/components/ui/Sidebar.vue";
import { useAccount } from "@/store/account";
import { eventBus } from "@/helpers/eventBus";
import { useResponsive } from '@/helpers/useResponsive'

const { isMobile, isMediumScreen } = useResponsive()

// Account Store für Wallet-Adresse
const accountStore = useAccount();

// Event-Emitter-Funktionen
const emitEvent = (eventName: string) => {
  eventBus.emit(eventName);
};

</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header,
.footer {
  background: #11111a;
  flex-shrink: 0;
}

.header-content,
.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.main {
  flex-grow: 1;
  overflow-y: auto;
}

.bg-green-500 {
  background-color: #2dad24;
}

.w-4 {
  width: 1rem;
}

.h-4 {
  height: 1rem;
}
.logo {
}
.rounded-full {
  border-radius: 9999px;
}
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
