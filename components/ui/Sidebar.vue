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
        <ul>
          <li class="px-4">
            <button
              class="flex items-center w-full text-left text-sm text-gray-400 hover:text-white hover:bg-gray-800 px-2 py-2 rounded-md"
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
              class="flex items-center w-full text-left text-sm text-gray-400 hover:text-white hover:bg-gray-800 px-2 py-2 rounded-md"
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
              class="flex items-center w-full text-left text-sm text-gray-400 hover:text-white hover:bg-gray-800 px-2 py-2 rounded-md"
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
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>

              Messages
            </button>
          </li>
          <li v-if="accountStore.getSymbol === 'TEER'" class="px-4">
            <button
              class="flex items-center w-full text-left text-sm text-gray-400 hover:text-white hover:bg-gray-800 px-2 py-2 rounded-md"
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
              class="flex items-center w-full text-left text-sm text-gray-600 hover:bg-gray-800 px-2 py-2 rounded-md"
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
          <UDivider
            class="flex border-gray-800 w-full border-t-1 border-solid my-5"
          />
          <li class="px-4">
            <span
              class="flex items-center w-full text-left text-sm font-semibold text-gray-500 mb-2"
            >
              SETTINGS
            </span>
          </li>
          <li class="px-4">
            <button @click="changeSessionAuthorization"
              class="flex items-center w-full text-left text-sm text-gray-400 hover:text-white hover:bg-gray-800 px-2 py-2 rounded-md">
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
                  d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                />
              </svg>

              Session Keys
            </button>
          </li>
          <UDivider
            class="flex border-gray-800 w-full border-t-1 border-solid my-5"
          />
          <li class="px-4">
            <span
              class="flex items-center w-full text-left text-sm font-semibold text-gray-500 mb-2"
            >
              COMMUNITY & SUPPORT
            </span>
          </li>
          <li class="px-4">
            <a
  href="mailto:support@integritee.network"
  class="flex items-center w-full text-left text-sm text-gray-400 hover:text-white hover:bg-gray-800 px-2 py-2 rounded-md"
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
  Contact support
</a>

          </li>
        </ul>
      </nav>
    </div>

    <!-- Footer Content -->
    <div class="px-4 space-y-4 mb-4">
      <div class="flex items-center text-xs" @click="toggleSidebar">
        <span class="mr-2 text-gray-500">System Health</span>
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
    <div class="text-xs text-gray-500 mb-1">Select Token:</div>
    <div class="relative group mb-3">
  <!-- Dropdown Trigger -->
  <div
    class="flex items-center w-full rounded-md border border-gray-700 bg-gray-800 py-1.5 px-3 text-xs text-gray-400 hover:ring-1 hover:ring-incognitee-green focus-within:ring-1 focus-within:ring-incognitee-green cursor-pointer"
    @click="toggleDropdown"
  >
    <TEER v-if="selected === 'TEER'" class="w-[14px] h-[14px] mr-2" />
    <Paseo v-else-if="selected === 'PAS'" class="w-[14px] h-[14px] mr-2" />
    <USDC v-else class="w-[14px] h-[14px] mr-2" />
    <span class="truncate">{{ selected }}</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      :class="['w-3 h-3 ml-auto', isOpen ? 'rotate-180' : '']"
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
    v-show="isOpen"
    class="absolute bottom-full mb-2 w-full rounded-md bg-gray-800 border border-gray-700 shadow-lg text-gray-400 z-10"
  >
    <div
      v-for="item in items"
      :key="item.value"
      class="flex text-xs items-center px-3 py-2 hover:bg-gray-700 hover:text-white cursor-pointer"
      @click="redirect(item)"
    >
      <component :is="item.icon" class="w-[14px] h-[14px] mr-2" />
      <span>{{ item.label }}</span>
    </div>
  </div>


  <!-- Dropdown Menu -->
  <div
    v-show="isOpen"
    class="absolute bottom-full mb-2 w-full rounded-md bg-gray-800 border border-gray-700 shadow-lg text-gray-400 z-10"
  >
    <div
      v-for="item in items"
      :key="item.value"
      class="flex text-xs items-center px-3 py-2 hover:bg-gray-700 hover:text-white cursor-pointer"
      @click="selectItem(item)"
    >
      <component :is="item.icon" class="w-[14px] h-[14px] mr-2" />
      <span>{{ item.label }}</span>
    </div>
  </div>
</div>

  <div class="text-xs text-gray-500 mb-1">Connected with:</div>
  <div class="relative group">
    <div
  class="flex items-center w-full rounded-md border border-gray-700 bg-gray-800 py-1.5 px-3 text-xs text-gray-400 hover:ring-1 hover:ring-incognitee-green focus-within:ring-1 focus-within:ring-incognitee-green"
  @click="
    () => {
      emitEvent('addressClicked');
      toggleSidebar();
    }
  "
>
  <span class="truncate">{{ accountStore.getAddress }}</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    class="w-5 h-5 text-gray-500 ml-auto hover:text-incognitee-green"
  >
    <path
      fill-rule="evenodd"
      d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
      clip-rule="evenodd"
    />
  </svg>
</div>
</div>


</div>

</div>
    </div>
    
  </div>

  <!-- Overlay: Hintergrund abdunkeln nur in mobiler Ansicht -->
  <div
    v-if="isSidebarOpen"
    class="fixed inset-0 bg-black bg-opacity-90 z-40 lg:hidden"
    @click="toggleSidebar"
  ></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, defineProps, watch } from "vue";
import HealthIndicator from "@/components/ui/HealthIndicator.vue";
import { useAccount } from "@/store/account";
import { eventBus } from "@/helpers/eventBus";
import Incognitee from "@/assets/img/incognitee-full-logo.svg";
import TEERdays from "@/public/img/index/TEERdays-icon-white.svg";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import { connectExtension, extensionAccounts, } from "~/lib/signerExtensionUtils";
import OverlayDialog from "~/components/overlays/OverlayDialog.vue";
import { encodeAddress } from "@polkadot/util-crypto";
import { SessionProxyRole } from "~/lib/sessionProxyStorage";
import Paseo from "assets/img/paseo-logo.svg";
import USDC from "assets/img/usdc-logo.svg";
import TEER from "@/assets/img/logo-icon.svg";

const isOpen = ref(false);
const selected = ref("PAS");

const items = [
  { label: "TEER", value: "TEER", icon: TEER },
  { label: "PAS", value: "PAS", icon: Paseo },
  { label: "USDC", value: "USDC", icon: USDC },
];

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectItem = (item) => {
  selected.value = item.label;
  isOpen.value = false; // Close dropdown after selection
};

const accountStore = useAccount();
const currentExtensionAccount = ref("");
const selectedExtensionAccount = ref("");

const selectedExtensionAccountIsNew = computed(() => {
  try {
    const selectedAddressEncoded = encodeAddress(
      selectedExtensionAccount.value,
      accountStore.getSs58Format,
    );
    console.log(
      "comparing",
      currentExtensionAccount.value,
      " to ",
      selectedAddressEncoded,
    );
    return selectedAddressEncoded !== currentExtensionAccount.value;
  } catch (e) {
    return false;
  }
});

const props = defineProps({
  createTestingAccount: {
    type: Function,
    required: false,
  },
  show: {
    type: Boolean,
    required: true,
  },
  close: {
    type: Function,
    required: true,
  },
  onExtensionAccountChange: {
    type: Function,
    required: true,
  },
  showTrustedGetterHint: {
    type: Boolean,
    required: false,
  },
  changeSessionAuthorization: {
    type: Function,
    required: false,
  },
});

watch(
  () => props.show,
  (show) => {
    if (show) {
      console.log("current extension account: ", accountStore.getAddress);
      currentExtensionAccount.value = accountStore.getAddress;
      //selectedExtensionAccount.value = "";
    }
  },
);

const hasCreateTestingAccountFn = computed(
  () => typeof props.createTestingAccount === "function",
);

// even if the same account stays selected and the overlay is manually closed
// we need to call onExtensionAccountChange. otherwise the balance poll will wait forever
const closeProxy = () => {
  if (selectedExtensionAccount.value) {
    props.onExtensionAccountChange(selectedExtensionAccount.value);
  }
  props.close();
};

watch(selectedExtensionAccount, async (selectedAddress) => {
  if (selectedAddress && selectedExtensionAccountIsNew.value) {
    props.onExtensionAccountChange(selectedAddress);
  }
});

// Neuer Zustand und Methode für Menü
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const handleOutsideClick = (event) => {
  const dropdown = document.getElementById("menu-button");
  if (dropdown && !dropdown.contains(event.target)) {
    closeMenu();
  }
};

// Event-Listener für Klicks außerhalb des Dropdowns
onMounted(() => {
  document.addEventListener("click", handleOutsideClick);
});

onUnmounted(() => {
  document.removeEventListener("click", handleOutsideClick);
});

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
