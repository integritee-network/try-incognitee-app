<template>
  <div class="container">
    <header class="header bg-gray-800 text-white py-1">
      <div class="header-content mx-auto flex items-center justify-between">
        <!-- Logo -->
        <Incognitee class="logo" />

        <!-- Flex container for network health, indicator, and wallet information -->
        <div class="flex items-center gap-4">
          <!-- gap-4 steuert den Abstand zwischen den Elementen -->
          <!-- Network health text and health indicator -->
          <div class="flex items-center gap-2">
            <!-- gap-2 für den Abstand zwischen Network Health und Indikator -->
            <HealthIndicator />
          </div>

          <!-- SVG icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 12.75H3M21 9.75h-4.5M3 12.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v5.25m-18 0h18m-18 0V16.5A2.25 2.25 0 0 0 5.25 18.75h13.5A2.25 2.25 0 0 0 21 16.5v-3.75"
            />
          </svg>

          <!-- Address and Connect Wallet button -->
          <div
            class="text-white text-sm cursor-pointer"
            @click="emitAddressClicked"
          >
            <!-- Full address on larger screens and short address on mobile -->
            <div v-if="accountStore.getAddress === 'none'">
              <button
                class="incognitee-bg btn btn_gradient rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Connect Wallet
              </button>
            </div>
            <div v-else>
              <span class="hidden md:inline">{{
                accountStore.getAddress
              }}</span>
              <span class="inline md:hidden">{{
                accountStore.getShortAddress
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <footer class="footer">
      <nav class="footer-content container mx-auto">
        <div class="container">
          <div
            class="flex mt-10 fixed left-0 right-0 bottom-10 mb-2 w-full px-4 rounded justify-around z-5"
          >
            <div class="container custom-border-gradient">
              <div class="inner-box">
                <div class="flex justify-around text-white">
                  <div class="flex flex-col items-center text-center">
                    <nuxt-link :to="{ path: '/', query: $route.query }">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6 mx-auto mb-2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                      </svg>
                      <p class="text-xs">Wallet</p>
                    </nuxt-link>
                  </div>

                  <div class="flex flex-col items-center text-center">
                    <nuxt-link :to="{ path: '/swap', query: $route.query }">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6 mx-auto mb-2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                        />
                      </svg>
                      <p class="text-xs">Swap</p>
                    </nuxt-link>
                  </div>

                  <div class="flex flex-col items-center text-center">
                    <nuxt-link :to="{ path: '/gov', query: $route.query }">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6 mx-auto mb-2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                        />
                      </svg>
                      <p class="text-xs cursor-pointer">Gov</p>
                    </nuxt-link>
                  </div>
                  <div
                    v-if="accountStore.getSymbol === 'TEER'"
                    class="flex flex-col items-center justify-center text-center"
                  >
                    <nuxt-link
                      :to="{ path: '/teerdays', query: $route.query }"
                      class="flex flex-col items-center justify-center"
                    >
                      <TEERdays class="w-6 h-6 mb-2" />
                      <!-- Make TEERdays icon the same size as others -->
                      <p class="text-xs cursor-pointer">TEERDays</p>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </footer>
    <main class="main">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
import Incognitee from "@/assets/img/incognitee-mask.svg";
import TEERdays from "@/public/img/index/TEERdays-icon-white.svg";
import { useAccount } from "@/store/account.ts";
import { eventBus } from "@/helpers/eventBus";
import HealthIndicator from "@/components/ui/HealthIndicator.vue";

const accountStore = useAccount();

const emitAddressClicked = () => {
  eventBus.emit("addressClicked");
};
</script>

<style scoped>
.address {
  font-size: 0.875rem; /* Small text size */
  color: white; /* Adjust as necessary for your theme */
}
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header,
.footer {
  background: #11111a;
  width: 100%;
}

.header,
.footer {
  flex-shrink: 0;
}

.header-content,
.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logo {
  height: 50px;
  width: 50px;
}

.main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
}

.address {
  font-size: 0.875rem;
  color: white;
}

.bg-green-500 {
  background-color: #2dad24; /* Adjust the color as needed */
}

.w-4 {
  width: 1rem; /* Adjust the size as needed */
}

.h-4 {
  height: 1rem; /* Adjust the size as needed */
}

.rounded-full {
  border-radius: 9999px; /* Makes the element a circle */
}
</style>
