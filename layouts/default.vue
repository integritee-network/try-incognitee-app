<template>
  <div class="container layout">
    <header class="header bg-gray-800 text-white py-1">
      <div class="header-content mx-auto flex items-center justify-between">
        <!-- Logo -->
        <Incognitee class="logo" />

        <!-- Flex container for network health, indicator, and wallet information -->
        <div class="flex items-center gap-4">
          <!-- gap-4 steuert den Abstand zwischen den Elementen -->
          <!-- Network health text and health indicator -->
          <div class="flex items-center gap-2 ml-1 mr-1">
            <!-- gap-2 für den Abstand zwischen Network Health und Indikator -->
            <HealthIndicator />
          </div>

          <!-- SVG icon -->
          <div v-if="accountStore.getAddress !== 'none'"></div>

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
            <div v-else class="flex">
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
              <span class="hidden md:inline ml-1 mt-0.5">{{
                accountStore.getAddress
              }}</span>
              <span class="inline md:hidden ml-1 mt-0.5">{{
                accountStore.getShortAddress
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content -->
    <main class="main flex-grow overflow-auto">
      <NuxtPage />
    </main>
    <footer class="footer bg-incognitee-blue">
      <nav class="footer-content container mx-auto">
        <div class="container">
          <div
            class="flex mt-10 fixed left-0 right-0 bottom-10 w-full px-4 rounded justify-around z-20"
          >
            <div class="container custom-border-gradient">
              <div class="inner-box">
                <div class="flex justify-around text-white">
                  <div
                    class="flex flex-col items-center cursor-pointer text-center"
                    @click="emitSwitchToWallet"
                  >
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
                  </div>

                  <div
                    class="flex flex-col items-center cursor-pointer text-center"
                    @click="emitSwitchToSwap"
                  >
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
                  </div>

                  <div
                    class="flex flex-col items-center cursor-pointer text-center"
                    @click="emitSwitchToVouchers"
                  >
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
                        d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                      />
                    </svg>

                    <p class="text-xs">Vouchers</p>
                  </div>
                  <div
                    v-if="accountStore.getSymbol === 'TEER'"
                    class="flex flex-col items-center justify-center text-center"
                    @click="emitSwitchToTeerDays"
                  >
                    <TEERdays class="w-6 h-6 mb-2" />
                    <!-- Make TEERdays icon the same size as others -->
                    <p class="text-xs cursor-pointer">TEERDays</p>
                  </div>
                  <div
                    v-if="accountStore.getSymbol === 'PAS'"
                    class="flex flex-col items-center cursor-pointer text-center"
                    @click="emitSwitchToMessaging"
                  >
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
                        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                      />
                    </svg>

                    <p class="text-xs cursor-pointer">Messages</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </footer>
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

const emitSwitchToWallet = () => {
  eventBus.emit("switchToWallet");
};

const emitSwitchToMessaging = () => {
  eventBus.emit("switchToMessaging");
};

const emitSwitchToSwap = () => {
  eventBus.emit("switchToSwap");
};

const emitSwitchToGov = () => {
  eventBus.emit("switchToGov");
};

const emitSwitchToVouchers = () => {
  eventBus.emit("switchToVouchers");
};

const emitSwitchToTeerDays = () => {
  eventBus.emit("switchToTeerDays");
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
  flex-shrink: 0;
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
