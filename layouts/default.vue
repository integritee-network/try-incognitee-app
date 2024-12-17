<template>
  <div class="flex bg-incognitee-blue text-white">
    <Sidebar />

    <!-- Content Area -->
    <div class="flex h-screen w-screen bg-incognitee-blue text-white">
      <!-- Sidebarplatzhalter für Desktop -->
      <aside
        class="bg-incognitee-blue border-r border-gray-800 w-64 hidden lg:block"
      ></aside>
      <!-- Main Content -->
      <div class="flex flex-col flex-1">
        <main class="flex-1">
          <NuxtPage />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import HealthIndicator from "@/components/ui/HealthIndicator.vue";
import Sidebar from "@/components/ui/Sidebar.vue";
import { useAccount } from "@/store/account";
import { eventBus } from "@/helpers/eventBus";
import Incognitee from "@/assets/img/incognitee-full-logo.svg";

// Sidebar-State (local)
const isSidebarOpen = ref(false);

// Event-Handler für Sidebar-Toggle
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

// Event-Abonnement bei Mounten und Entfernen bei Unmounten
onMounted(() => {
  eventBus.on("toggleSidebar", toggleSidebar);
});

onUnmounted(() => {
  eventBus.off("toggleSidebar", toggleSidebar);
});

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
