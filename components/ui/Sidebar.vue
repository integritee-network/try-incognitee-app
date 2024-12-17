<!-- components/Sidebar.vue -->
<template>
  <!-- Sidebar -->
  <div
    :class="[
      'bg-incognitee-blue border-r border-gray-800 fixed top-0 left-0 h-full transform transition-transform lg:translate-x-0 w-64 z-50 flex flex-col justify-between text-white',
      isSidebarOpen ? 'translate-x-0' : '-translate-x-full',
    ]"
  >
    <!-- Sidebar Header -->
    <div>
      <div class="p-4 flex items-center justify-between">
        <Incognitee class="h-5" />
        <button
          @click="eventBus.emit('toggleSidebar')"
          class="lg:hidden text-white focus:outline-none"
        >
          ✕
        </button>
      </div>

      <!-- Navigation -->
      <nav class="mt-8">
        <ul class="space-y-4">
          <li class="px-4">
            <button
              class="flex items-center w-full text-left text-sm font-semibold hover:bg-gray-800 px-2 py-2 rounded-md"
              @click="
                () => {
                  emitEvent('switchToWallet');
                  toggleSidebar();
                }
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 12.75H3M21 9.75h-4.5M3 12.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v5.25m-18 0h18m-18 0V16.5A2.25 2.25 0 0 0 5.25 18.75h13.5A2.25 2.25 0 0 0 21 16.5v-3.75"
                />
              </svg>
              Wallet
            </button>
          </li>
          <li class="px-4">
            <button
              class="flex items-center w-full text-left text-sm font-semibold hover:bg-gray-800 px-2 py-2 rounded-md"
              @click="
                () => {
                  emitEvent('switchToVouchers');
                  toggleSidebar();
                }
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                />
              </svg>
              Vouchers
            </button>
          </li>
          <li class="px-4">
            <button
              class="flex items-center w-full text-left text-sm font-semibold hover:bg-gray-800 px-2 py-2 rounded-md"
              @click="
                () => {
                  emitEvent('switchToMessaging');
                  toggleSidebar();
                }
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
              Messages
            </button>
          </li>
          <li v-if="accountStore.getSymbol === 'TEER'" class="px-4">
            <button
              class="flex items-center w-full text-left text-sm font-semibold hover:bg-gray-800 px-2 py-2 rounded-md"
              @click="
                () => {
                  emitEvent('switchToTeerDays');
                  toggleSidebar();
                }
              "
            >
              <TEERdays class="w-6 h-6 mb-2 mr-2" />
              TeerDays
            </button>
          </li>
          <li class="px-4">
            <button
              class="flex items-center w-full text-left text-sm font-semibold text-gray-500 hover:bg-gray-800 px-2 py-2 rounded-md"
              @click="
                () => {
                  emitEvent('switchToSwap');
                  toggleSidebar();
                }
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                />
              </svg>
              Swap
            </button>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Footer Content -->
    <div class="px-4 space-y-4 mb-4">
      <div class="flex items-center text-xs" @click="toggleSidebar">
        <span class="mr-2">System Health</span>
        <HealthIndicator />
      </div>
      <div class="text-sm flex flex-col space-y-1">
        <div v-if="accountStore.getAddress === 'none'">
          <button
            @click="
              () => {
                emitEvent('addressClicked');
                toggleSidebar();
              }
            "
            class="bg-gradient-to-r from-incognitee-green to-incognitee-blue w-full justify-center rounded-md text-sm font-semibold text-white py-1.5 px-4 sm:w-auto hover:shadow-lg hover:shadow-incognitee-green/50"
          >
            Connect Wallet
          </button>
        </div>
        <div v-else>
          <div class="text-xs text-white">Connected with</div>
          <div
            class="text-xs text-gray-600 break-all cursor-pointer"
            @click="
              () => {
                emitEvent('addressClicked');
                toggleSidebar();
              }
            "
          >
            {{ accountStore.getAddress }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Overlay: Hintergrund abdunkeln -->
  <!-- Overlay: Hintergrund abdunkeln nur in mobiler Ansicht -->
  <div
    v-if="isSidebarOpen"
    class="fixed inset-0 bg-black bg-opacity-90 z-40 lg:hidden"
    @click="toggleSidebar"
  ></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import HealthIndicator from "@/components/ui/HealthIndicator.vue";
import { useAccount } from "@/store/account";
import { eventBus } from "@/helpers/eventBus";
import Incognitee from "@/assets/img/incognitee-full-logo.svg";
import TEERdays from "@/public/img/index/TEERdays-icon-white.svg";

// Sidebar-State (local)
const isSidebarOpen = ref(false);

// Event-Handler für Sidebar-Toggle
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const emitAddressClicked = () => {
  eventBus.emit("addressClicked");
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
/* Optional: zusätzliche Styles für die Sidebar */
</style>
