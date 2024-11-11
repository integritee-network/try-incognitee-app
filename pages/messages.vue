<template>
    <CampaignBanner v-if="enableActions" :onClick="openGuessTheNumberOverlay" :isMobile="isMobile"
        textMobile="Guess-The-Number" textDesktop="Join the Guess-The-Number Campaign and win some juicy prizes." />

    <InfoBanner v-if="!enableActions" :isMobile="isMobile" textMobile="This page is not yet live for mainnet"
        textDesktop="This page is not yet live for mainnet. please visit <a href='https://try.incognitee.io'>try.incognitee.io</a> for the latest version of our paseo testnet wallet" />

    <InfoBanner v-if="!enableActions" :isMobile="isMobile" textMobile="Looking for <a href='/teerdays'>TEERdays</a>?"
        textDesktop="If you are looking for our TEERDAYS page, please follow <a href='/teerdays'>this link</a>" />

    <div class="mt-4"></div>

    <NetworkSelector :openAssetsInfo="openAssetsInfo" :selectedNetwork="shieldingTarget" />

    <div class="mt-10 flex justify-between items-center">
        <button @click="openNewMessages" type="button"
            class="btn btn_gradient inline-flex items-center gap-x-1.5 rounded-md px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <svg class="-ml-0.5 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                <path
                    d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
            </svg>
            New Message
        </button>
    </div>

    <div class="bg-gray-900 mt-5 rounded-t-md">
  <table class="w-full whitespace-nowrap text-left">
    <tbody class="divide-y divide-white/10">
      <tr class="flex flex-wrap sm:flex-nowrap justify-between">
        <!-- Linksbündige Zelle mit Icon, Text und Datum -->
        <td class="flex items-center gap-x-4 py-4 pl-4 pr-8 sm:pl-6 lg:pl-8 w-full sm:w-auto">
          <svg class="h-6 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-.75-4.75a.75.75 0 0 0 1.5 0V8.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0L6.2 9.74a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z" clip-rule="evenodd" />
          </svg>
          <div class="flex flex-col flex-auto">
            <div class="flex items-center gap-x-3">
              <div class="text-sm font-medium text-white">Incoming Transfer</div>
              <!-- Badge für Desktop und Punkt für Mobile -->
              <div class="hidden sm:block rounded-md bg-green-700 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-green-600/20">New</div>
              <div class="sm:hidden rounded-full bg-green-500 w-2 h-2"></div>
            </div>
            <div class="text-xs text-gray-500">24.08.2024 15:00</div>
          </div>
        </td>

        <!-- Rechtsbündige Zelle für Nachricht -->
        <td class="w-full sm:w-auto py-4 pl-4 sm:pl-0 pr-8 sm:pr-4 text-left text-sm text-white">
          <div class="break-words whitespace-normal">Hi there! Just checking in to see how everything is going. Let me know if you need any help with the tasks at hand or if there’s anything specific you’d like to focus on.</div>
        </td>
      </tr>

      <!-- Weitere Zeilen -->
      <tr class="flex flex-wrap sm:flex-nowrap justify-between">
        <td class="flex items-center gap-x-4 py-4 pl-4 pr-8 sm:pl-6 lg:pl-8 w-full sm:w-auto">
          <svg class="h-6 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-.75-4.75a.75.75 0 0 0 1.5 0V8.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0L6.2 9.74a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z" clip-rule="evenodd" />
          </svg>
          <div class="flex flex-col flex-auto">
            <div class="flex items-center gap-x-3">
              <div class="text-sm font-medium text-white">Submit Guess</div>
              <div class="hidden sm:block rounded-md bg-green-700 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-green-600/20">New</div>
              <div class="sm:hidden rounded-full bg-green-500 w-2 h-2"></div>
            </div>
            <div class="text-xs text-gray-500">24.08.2024 15:00</div>
          </div>
        </td>
        <td class="w-full sm:w-auto py-4 pl-4 sm:pl-0 pr-8 sm:pr-4 text-left text-sm text-white">
          <div class="break-words whitespace-normal">Hi there! Just checking in to see how everything is going. Let me know if you need any help with the tasks at hand or if there’s anything specific you’d like to focus on.</div>
        </td>
      </tr>

           <!-- Weitere Zeilen -->
           <tr class="flex flex-wrap sm:flex-nowrap justify-between">
        <td class="flex items-center gap-x-4 py-4 pl-4 pr-8 sm:pl-6 lg:pl-8 w-full sm:w-auto">
          <svg class="h-6 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-.75-4.75a.75.75 0 0 0 1.5 0V8.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0L6.2 9.74a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z" clip-rule="evenodd" />
          </svg>
          <div class="flex flex-col flex-auto">
            <div class="flex items-center gap-x-3">
              <div class="text-sm font-medium text-white">Submit Guess</div>
              <div class="hidden sm:block rounded-md bg-green-700 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-green-600/20">New</div>
              <div class="sm:hidden rounded-full bg-green-500 w-2 h-2"></div>
            </div>
            <div class="text-xs text-gray-500">24.08.2024 15:00</div>
          </div>
        </td>
        <td class="w-full sm:w-auto py-4 pl-4 sm:pl-0 pr-8 sm:pr-4 text-left text-sm text-white">
          <div class="break-words whitespace-normal">Hi there! Just checking in to see how everything is going. Let me know if you need any help with the tasks at hand or if there’s anything specific you’d like to focus on.</div>
        </td>
      </tr>
           <!-- Weitere Zeilen -->
           <tr class="flex flex-wrap sm:flex-nowrap justify-between">
        <td class="flex items-center gap-x-4 py-4 pl-4 pr-8 sm:pl-6 lg:pl-8 w-full sm:w-auto">
          <svg class="h-6 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-.75-4.75a.75.75 0 0 0 1.5 0V8.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0L6.2 9.74a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z" clip-rule="evenodd" />
          </svg>
          <div class="flex flex-col flex-auto">
            <div class="flex items-center gap-x-3">
              <div class="text-sm font-medium text-white">Submit Guess</div>
              <div class="hidden sm:block rounded-md bg-green-700 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-green-600/20">New</div>
              <div class="sm:hidden rounded-full bg-green-500 w-2 h-2"></div>
            </div>
            <div class="text-xs text-gray-500">24.08.2024 15:00</div>
          </div>
        </td>
        <td class="w-full sm:w-auto py-4 pl-4 sm:pl-0 pr-8 sm:pr-4 text-left text-sm text-white">
          <div class="break-words whitespace-normal">Hi there! Just checking in to see how everything is going. Let me know if you need any help with the tasks at hand or if there’s anything specific you’d like to focus on.</div>
        </td>
      </tr>
           <!-- Weitere Zeilen -->
           <tr class="flex flex-wrap sm:flex-nowrap justify-between">
        <td class="flex items-center gap-x-4 py-4 pl-4 pr-8 sm:pl-6 lg:pl-8 w-full sm:w-auto">
          <svg class="h-6 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-.75-4.75a.75.75 0 0 0 1.5 0V8.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0L6.2 9.74a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z" clip-rule="evenodd" />
          </svg>
          <div class="flex flex-col flex-auto">
            <div class="flex items-center gap-x-3">
              <div class="text-sm font-medium text-white">Submit Guess</div>
              <div class="hidden sm:block rounded-md bg-green-700 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-green-600/20">New</div>
              <div class="sm:hidden rounded-full bg-green-500 w-2 h-2"></div>
            </div>
            <div class="text-xs text-gray-500">24.08.2024 15:00</div>
          </div>
        </td>
        <td class="w-full sm:w-auto py-4 pl-4 sm:pl-0 pr-8 sm:pr-4 text-left text-sm text-white">
          <div class="break-words whitespace-normal">Hi there! Just checking in to see how everything is going. Let me know if you need any help with the tasks at hand or if there’s anything specific you’d like to focus on.</div>
        </td>
      </tr>

      <!-- Weitere Zeilen als Beispiel -->
      <!-- Wiederholen Sie diese Struktur für alle weiteren Zeilen -->
    </tbody>
  </table>
</div>

    <div class="my-20"></div>
    <!-- Messages Info Overlay -->
    <OverlayDialog :show="showMessages" :close="closeMessages" title="Message details">
        <div class="my-5"></div>

        <div class="mt-5">
            <!-- Label and available balance -->
            <div class="flex justify-between items-center">
                <label for="sendAmount" class="text-sm font-medium leading-6 text-white">Sender</label>
            </div>

            <!-- Input field -->
            <div>
                <input id="senderAddress" type="text" disabled value="2Pm7Rdfjansfjkabgh435346bdfasdf"
                    class="w-full text-sm rounded-lg flex-grow py-2 bg-cool-900 text-white placeholder-gray-500 border border-green-500 truncate-input pr-12" />
            </div>
        </div>

        <div>
            <!-- Label and available balance -->
            <div class="flex justify-between items-center">
                <label for="sendAmount" class="text-sm font-medium leading-6 text-white">Receiver</label>
            </div>

            <!-- Input field -->
            <div>
                <input id="recipientAddress" type="text" disabled value="2Pm7Rdfjansfjkabgh435346bdfasdf"
                    class="w-full text-sm rounded-lg flex-grow py-2 bg-cool-900 text-white placeholder-gray-500 border border-green-500 truncate-input pr-12" />
            </div>
        </div>

        <!-- Messages -->
        <div class="flex flex-col">
            <label for="recipientAddress" class="text-sm font-medium leading-6 text-white text-left">Message</label>
            <div class="relative flex items-center rounded-lg">
                <textarea id="messages" rows="4" ref="messageTextarea" name="messages" disabled value="Hi what's up ..."
                    class="w-full text-sm rounded-lg flex-grow py-2 bg-cool-900 text-white placeholder-gray-500 border border-green-500 truncate-input pr-12"></textarea>
            </div>
        </div>

        <div class="w-full mt-8 bg-gray-800">
            <button type="button"
                class="btn btn_gradient inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm">
                Delete
            </button>
        </div>
    </OverlayDialog>

    <!-- New Messages Overlay -->
    <OverlayDialog :show="showNewMessages" :close="closeNewMessages" title="New Messages">
        <div class="mt-10">
            <div class="mt-5">
                <p class="text-sm text-gray-400 text-left my-4">
                    Sending privately means that only you and the recipient know who sent
                    how much to whom.
                </p>
            </div>
            <form class="mt-5" @submit.prevent="submitSendForm">
                <div class="flex flex-col">
                    <label for="recipientAddress"
                        class="text-sm font-medium leading-6 text-white text-left">Recipient</label>
                    <div class="relative flex items-center rounded-lg">
                        <input id="recipientAddress" v-model="recipientAddress" type="text" required
  class="w-full text-sm rounded-lg flex-grow py-2 bg-cool-900 text-white placeholder-gray-500 border border-transparent hover:border-incognitee-green focus:border-incognitee-blue truncate-input pr-12"
  placeholder="Recipient" />
                        <div class="absolute right-3 flex space-x-2">
                            <div @click="openScanOverlay" class="cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-white">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-10">
                    <!-- Label and available balance -->
                    <div class="flex justify-between items-center">
                        <label for="sendAmount" class="text-sm font-medium leading-6 text-white">Message</label>

                        <span class="text-xs text-gray-400">Available private balance:
                            {{ accountStore.formatBalanceFree(incogniteeSidechain) }}</span>
                    </div>

                    <!-- Input field -->
                    <div class="relative flex items-center rounded-lg">
                        <textarea id="messages" rows="4" ref="messageTextarea" name="messages"
  placeholder="Enter your message here"
  class="w-full text-sm rounded-lg flex-grow py-2 bg-cool-900 text-white placeholder-gray-500 border border-transparent hover:border-incognitee-green focus:border-incognitee-blue truncate-input pr-12"></textarea>    </div>

                    <!-- Fee description -->
                    <div class="text-right">
                        <span class="text-xs text-gray-400">Fee: {{ formatDecimalBalance(INCOGNITEE_TX_FEE) }}
                            {{ accountStore.getSymbol }} for Incognitee</span>
                    </div>
                </div>
                <div class="mt-8 bottom-0 left-0 w-full bg-gray-800">
                    <button type="submit"
                        class="btn btn_gradient inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm">
                        Send
                    </button>
                </div>
            </form>
        </div>
    </OverlayDialog>
</template>

<script setup lang="ts">
import NetworkSelector from "@/components/ui/NetworkSelector.vue";
import PublicPrivateBalanceSwitcher from "@/components/ui/PublicPrivateBalanceSwitcher.vue";
import BalanceInteractorContainer from "@/components/ui/BalanceInteractorContainer.vue";
import StatusOverlay from "@/components/ui/StatusOverlay.vue";
import ChooseWalletOverlay from "@/components/ui/ChooseWalletOverlay.vue";
import { computed } from "vue";
import { chainConfigs } from "@/configs/chains.ts";
import { useAccount } from "@/store/account.ts";
import { useIncognitee } from "@/store/incognitee.ts";
import OverlayDialog from "@/components/ui/OverlayDialog.vue";
import { ApiPromise, WsProvider } from "@polkadot/api";
import { Keyring } from "@polkadot/keyring";
import { hexToU8a, u8aToHex } from "@polkadot/util";
import { encodeAddress } from "@polkadot/util-crypto";
import { TypeRegistry, u32 } from "@polkadot/types";
import {
    cryptoWaitReady,
    mnemonicGenerate,
    mnemonicToMiniSecret,
} from "@polkadot/util-crypto";
import { useInterval } from "@vueuse/core";
import { onUnmounted, onMounted, ref, watch } from "vue";
import Qrcode from "vue-qrcode";
import { QrcodeStream } from "vue-qrcode-reader";
import { useRouter } from "vue-router";
import { eventBus } from "@/helpers/eventBus";
import InfoBanner from "~/components/ui/InfoBanner.vue";
import CampaignBanner from "~/components/ui/CampaignBanner.vue";
import {
    extensionAccounts,
    connectExtension,
    injectorForAddress,
} from "@/lib/signerExtensionUtils";
import {
    loadEnv,
    shieldingTarget,
    shieldingLimit,
    incogniteeSidechain,
    incogniteeShard,
    isLive,
} from "@/lib/environmentConfig";
import ObtainTokenOverlay from "@/components/ui/ObtainTokenOverlay.vue";
import { formatDecimalBalance } from "@/helpers/numbers";
import {
    INCOGNITEE_GTN_GUESS_FEE,
    INCOGNITEE_SHIELDING_FEE_FRACTION,
    INCOGNITEE_TX_FEE,
    INCOGNITEE_UNSHIELDING_FEE,
} from "../configs/incognitee";
import { useSystemHealth } from "@/store/systemHealth";

const router = useRouter();
const accountStore = useAccount();
const incogniteeStore = useIncognitee();
const systemHealth = useSystemHealth();
const isFetchingShieldingTargetBalance = ref(true);
const isFetchingIncogniteeBalance = ref(true);
const isUpdatingIncogniteeBalance = ref(false);
const isChoosingAccount = ref(false);
const disableGetter = ref(false);
const isSignerBusy = ref(false);
const txStatus = ref("");
const recipientAddress = ref("");
const sendAmount = ref(1.0);
const shieldAmount = ref(11.0);
const unshieldAmount = ref(10.0);
const guess = ref(null);
const guessTheNumberInfo = ref(null);
const scanResult = ref("No QR code data yet");
const faucetUrl = ref(null);
const forceLive = ref(false);

const isProd = computed(
    () => chainConfigs[shieldingTarget.value].faucetUrl === undefined
);
const onExtensionAccountChange = async (selectedAddress) => {
    dropSubscriptions();
    console.log("user selected extension account:", selectedAddress);
    accountStore.setAccount(selectedAddress.toString());
    accountStore.setInjector(await injectorForAddress(accountStore.getAddress));
    isUpdatingIncogniteeBalance.value = false;
};

let api: ApiPromise | null = null;

const currentTab = ref("public");

const selectTab = (tab) => {
    currentTab.value = tab;
};

const submitSendForm = () => {
    // Handle the form submission here
    openStatusOverlay();
    closePrivateSendOverlay();
    sendPrivately();
};
const submitShieldForm = async () => {
    // double check input values here
    // fixme: why is this necessary? it seems computed max will not be enforced otherwise
    if (shieldAmount.value > computedShieldingMax.value) {
        alert(
            `Shield amount exceeds the maximum allowed value of ${computedShieldingMax.value}`
        );
        return;
    }
    // Handle the form submission here
    openStatusOverlay();
    closeShieldOverlay();
    await shield();
};
const submitUnshieldForm = async () => {
    // Handle the form submission here
    openStatusOverlay();
    closeUnshieldOverlay();
    await unshield();
};
const submitGuessForm = async () => {
    // Handle the form submission here
    openStatusOverlay();
    closeGuessTheNumberOverlay();
    await submitGuess();
};
const setRecipientAddressToSelf = () => {
    recipientAddress.value = accountStore.getAddress;
};

const onDecode = (decodeResult) => {
    console.log("QR scan decoded: " + decodeResult[0].rawValue);
    scanResult.value = decodeResult[0].rawValue;
    recipientAddress.value = decodeResult[0].rawValue;
    closeScanOverlay();
};

const txResHandlerShieldingTarget = ({ events = [], status, txHash }) => {
    status.isFinalized
        ? (txStatus.value = `😀 Finalized. Finalized. You should see your Incognitee balance increase in seconds. Please move to the Private Balance tab`)
        : (txStatus.value = `⌛ Current transaction status: ${status.type}. please be patient a few more seconds. you should see your L1 balance going down`);
    isSignerBusy.value = false;
    // Loop through Vec<EventRecord> to display all events
    events.forEach(({ _, event: { data, method, section } }) => {
        if (section + ":" + method === "system:ExtrinsicFailed") {
            // extract the data for this event
            const [dispatchError, dispatchInfo] = data;
            console.log(`dispatchinfo: ${dispatchInfo}`);
            let errorInfo;

            // decode the error
            if (dispatchError.isModule) {
                // for module errors, we have the section indexed, lookup
                // (For specific known errors, we can also do a check against the
                // api.errors.<module>.<ErrorName>.is(dispatchError.asModule) guard)
                const mod = dispatchError.asModule;
                const error = api.registry.findMetaError(
                    new Uint8Array([
                        mod.index.toNumber(),
                        bnFromHex(mod.error.toHex().slice(0, 4)).toNumber(),
                    ])
                );
                const message = `${error.section}.${error.name}${Array.isArray(error.docs)
                        ? `(${error.docs.join("")})`
                        : error.docs || ""
                    }`;

                errorInfo = `${message}`;
                console.log(`Error-info::${JSON.stringify(error)}`);
            } else {
                // Other, CannotLookup, BadOrigin, no extra info
                errorInfo = dispatchError.toString();
            }
            txStatus.value = `😞 Transaction Failed! ${section}.${method}::${errorInfo}`;
        } else if (section + ":" + method === "system:ExtrinsicSuccess") {
            console.log(
                `✅ Transaction successful with status: ${status} hash: ${txHash}`
            );
        }
    });
};

const txErrHandlerShieldingTarget = (err) =>
    (txStatus.value = `😞 Transaction Failed: ${err.toString()}`);

const handleTopResult = (result, successMsg?) => {
    console.log("TOP result: " + result);
    if (result) {
        if (result.status.isInSidechainBlock) {
            if (successMsg) {
                txStatus.value = successMsg;
            } else {
                txStatus.value =
                    "😀 included in sidechain block: " + result.status.asInSidechainBlock;
            }
            return;
        }
        if (result.status.isInvalid) {
            txStatus.value = "😞 Invalid (unspecified reason)";
            return;
        }
    }
    console.error(`unknown result: ${result}`);
    txStatus.value = "😞 Unknown Result";
};

const handleTopError = (err) => {
    console.error(`error: ${err}`);
    txStatus.value = `😞 Submission Failed: ${err}`;
};

const shield = async () => {
    console.log("shielding .....");
    if (isSignerBusy.value) {
        // fixme! this is a hack. don't know why extension pops up twice without this
        console.log("signer busy. aborting repeated attempt...");
        return;
    }
    isSignerBusy.value = true;
    txStatus.value = "⌛ awaiting signature and connection";
    if (incogniteeStore.vault && api?.isReady) {
        const amount = accountStore.decimalAmountToBigInt(shieldAmount.value);
        console.log(`sending ${amount} to vault: ${incogniteeStore.vault}`);

        await api.tx.balances
            .transferKeepAlive(incogniteeStore.vault, amount)
            .signAsync(accountStore.account, {
                signer: accountStore.injector?.signer,
            })
            .then((tx) => tx.send(txResHandlerShieldingTarget))
            .catch(txErrHandlerShieldingTarget);
    }
};

const unshield = async () => {
    console.log("will unshield 30% of your private funds to same account on L1");
    txStatus.value = "⌛ will unshield to L1";
    const amount = accountStore.decimalAmountToBigInt(unshieldAmount.value);
    const account = accountStore.account;
    const nonce = new u32(
        new TypeRegistry(),
        accountStore.nonce[incogniteeSidechain.value]
    );
    console.log(
        `sending ${unshieldAmount.value} from ${accountStore.getAddress} publicly (nonce:${nonce}) to ${recipientAddress.value} on L1 (shard: ${incogniteeStore.shard})`
    );

    await incogniteeStore.api
        .balanceUnshieldFunds(
            account,
            incogniteeStore.shard,
            incogniteeStore.fingerprint,
            accountStore.getAddress,
            recipientAddress.value,
            amount,
            {
                signer: accountStore.injector?.signer,
                nonce: nonce,
            }
        )
        .then((result) =>
            handleTopResult(
                result,
                "😀 Successfully triggered unshielding process. You should see the unshielded funds appear on L1 in seconds"
            )
        )
        .catch((err) => handleTopError(err));
    //todo: manually inc nonce locally avoiding clashes with fetchIncogniteeBalance
};

const sendPrivately = async () => {
    console.log("sending funds on incognitee");
    txStatus.value = "⌛ sending funds privately on incognitee";
    const amount = accountStore.decimalAmountToBigInt(sendAmount.value);
    const account = accountStore.account;
    const nonce = new u32(
        new TypeRegistry(),
        accountStore.nonce[incogniteeSidechain.value]
    );
    console.log(
        `sending ${sendAmount.value} from ${account.address} privately to ${recipientAddress.value} with nonce ${nonce}`
    );

    await incogniteeStore.api
        .trustedBalanceTransfer(
            account,
            incogniteeStore.shard,
            incogniteeStore.fingerprint,
            accountStore.getAddress,
            recipientAddress.value,
            amount,
            {
                signer: accountStore.injector?.signer,
                nonce: nonce,
            }
        )
        .then((result) => handleTopResult(result, "😀 Balance transfer successful"))
        .catch((err) => handleTopError(err));
    //todo: manually inc nonce locally avoiding clashes with fetchIncogniteeBalance
};

const submitGuess = async () => {
    console.log("submit guess: ", guess.value);
    txStatus.value = "⌛ privately submitting your guess to incognitee";
    const account = accountStore.account;
    const nonce = new u32(
        new TypeRegistry(),
        accountStore.nonce[incogniteeSidechain.value]
    );
    console.log(
        `sending guess ${guess.value} from ${account.address} privately to incognitee`
    );

    await incogniteeStore.api
        .guessTheNumber(
            account,
            incogniteeStore.shard,
            incogniteeStore.fingerprint,
            guess.value,
            {
                signer: accountStore.injector?.signer,
                nonce: nonce,
            }
        )
        .then((result) => handleTopResult(result, "😀 Guess submission successful"))
        .catch((err) => handleTopError(err));
    //todo: manually inc nonce locally avoiding clashes with fetchIncogniteeBalance
};

const getterMap: { [address: string]: any } = {};

const fetchIncogniteeBalance = async () => {
    if (!incogniteeStore.apiReady) return;
    if (!accountStore.account) return;

    if (isUpdatingIncogniteeBalance.value == true) {
        console.log("[fetchIncogniteeBalance] already updating. waiting...");
        return;
    }

    if (disableGetter.value == true) {
        console.log(
            "[fetchIncogniteeBalance] getter disabled. reconnect your account to enable again..."
        );
        return;
    }

    isUpdatingIncogniteeBalance.value = true;

    const injector = accountStore.hasInjector ? accountStore.injector : null;
    try {
        if (!getterMap[accountStore.account]) {
            if (injector) {
                console.debug(
                    `fetching incognitee balance&nonce needs signing in extension: ${injector.name}`
                );
            }
            getterMap[accountStore.account] =
                await incogniteeStore.api.accountInfoGetter(
                    accountStore.account,
                    incogniteeStore.shard,
                    { signer: injector?.signer }
                );
        } else {
            console.debug(`fetching incognitee balance&nonce using cached getter`);
            if (isChoosingAccount.value == false) {
                closeChooseWalletOverlay();
            }
        }
    } catch (e) {
        // this will be the case if we click on cancel in the extension popup.
        console.error(e);
        isUpdatingIncogniteeBalance.value = false;
        disableGetter.value = true;
        return;
    }

    await getterMap[accountStore.account]
        .send()
        .then((accountInfo) => {
            console.debug(
                `current account info L2: ${accountInfo} on shard ${incogniteeStore.shard}`
            );
            accountStore.setBalanceFree(
                BigInt(accountInfo.data.free),
                incogniteeSidechain.value
            );
            accountStore.setNonce(
                Number(accountInfo.nonce),
                incogniteeSidechain.value
            );
            isFetchingIncogniteeBalance.value = false;
            isUpdatingIncogniteeBalance.value = false;
            isChoosingAccount.value = false;
        })
        .catch((err) => {
            console.error(`[fetchIncogniteeBalance] error ${err}`);
            isUpdatingIncogniteeBalance.value = false;
        });
};

const fetchGuessTheNumberInfo = async () => {
    if (!incogniteeStore.apiReady) return;
    console.log("fetch guess the number info");
    const getter = incogniteeStore.api.guessTheNumberInfoGetter(
        incogniteeStore.shard
    );
    await getter.send().then((info) => {
        console.log(`guess the number info: ${info}`);
        guessTheNumberInfo.value = info;
    });
};

const gtnWinners = computed(() => {
    if (guessTheNumberInfo.value) {
        const winners = [];
        for (const winner of guessTheNumberInfo.value.last_winners) {
            winners.push(
                encodeAddress(winner, accountStore.getSs58Format).slice(0, 8) + "..."
            );
        }
        return winners.join("<br>");
    }
    return "no one";
});

const fetchNetworkStatus = async () => {
    const promises = [];
    if (api?.isReady) {
        const p = api.rpc.chain.getFinalizedHead().then((head) => {
            api.rpc.chain.getBlock(head).then((block) => {
                console.log(
                    `finalized L1 block number, according to L1 api: ${block.block.header.number}`
                );
            });
        });
        promises.push(p);
    }
    if (!incogniteeStore.apiReady) return;
    console.debug("fetch network status info");
    const getter = incogniteeStore.api.parentchainsInfoGetter(
        incogniteeShard.value
    );
    const p2 = getter.send().then((info) => {
        console.debug(`parentchains info: ${info}`);
        const shielding_target_id = info.shielding_target
            .toString()
            .replace(/([A-Z])/g, "_$1")
            .toLowerCase()
            .replace(/^_/, "");
        const block_number = info[shielding_target_id]?.block_number;
        const genesis_hash = info[shielding_target_id]?.genesis_hash
            .toHex()
            .toString();
        if (block_number !== null && block_number !== undefined) {
            systemHealth.observeShieldingTargetImportedBlockNumber(block_number);
        }
        if (genesis_hash?.length > 0) {
            systemHealth.setShieldingTargetLightClientGenesisHashHex(genesis_hash);
        }
    });
    promises.push(p2);

    await Promise.all(promises);
};

const pollCounter = useInterval(2000);
watch(pollCounter, async () => {
    await fetchIncogniteeBalance();
    await fetchNetworkStatus();
});

watch(
    () => accountStore.getAddress,
    async () => await subscribeWhatsReady()
);

const subscribeWhatsReady = async () => {
    //todo! only reinitialize if account changes
    if (api?.isReady) {
        //console.log("skipping api init. It seems the ShieldingTarget api is already subscribed to balance changes");
        return;
    }

    const wsProvider = new WsProvider(chainConfigs[shieldingTarget.value].api);
    console.log(
        "trying to init api at " + chainConfigs[shieldingTarget.value].api
    );
    api = await ApiPromise.create({ provider: wsProvider });
    await api.isReady;
    accountStore.setExistentialDeposit(
        BigInt(api.consts.balances.existentialDeposit)
    );
    accountStore.setDecimals(Number(api.registry.chainDecimals));
    accountStore.setSS58Format(Number(api.registry.chainSS58));
    accountStore.setSymbol(String(api.registry.chainTokens));
    console.log(
        "api-reported genesis hash for shielding target: " +
        api.genesisHash.toHex().toString()
    );
    systemHealth.setShieldingTargetApiGenesisHashHex(
        api.genesisHash.toHex().toString()
    );

    // await is quick as we only subscribe
    await api.rpc.chain.subscribeNewHeads((lastHeader) => {
        systemHealth.observeShieldingTargetBlockNumber(
            lastHeader.number.toNumber()
        );
    });
    faucetUrl.value = chainConfigs[shieldingTarget.value].faucetUrl?.replace(
        "ADDRESS",
        accountStore.getAddress
    );
    console.log("faucet url: " + faucetUrl.value);
    if (accountStore.hasInjector) {
        const currentQuery = { ...router.currentRoute.value.query };
        currentQuery.address = accountStore.getAddress;
        currentQuery.seed = undefined;
        router.push({
            query: currentQuery,
        });
    }
    if (accountStore.getAddress === "none") {
        console.log("skipping account subscription. no address");
        return;
    }

    const promises = [];
    const p1 = api.query.system.account(
        accountStore.getAddress,
        ({
            data: {
                free: currentFree,
                reserved: currentReserved,
                frozen: currentFrozen,
            },
        }) => {
            console.log(
                "shielding-target balance: free=" +
                currentFree +
                " reserved=" +
                currentReserved +
                " frozen=" +
                currentFrozen
            );
            accountStore.setBalanceFree(BigInt(currentFree), shieldingTarget.value);
            accountStore.setBalanceReserved(
                BigInt(currentReserved),
                shieldingTarget.value
            );
            accountStore.setBalanceFrozen(
                BigInt(currentFrozen),
                shieldingTarget.value
            );
            isFetchingShieldingTargetBalance.value = false;
        }
    );
    promises.push(p1);
    // for quicker responsiveness we dont wait until the next regular poll, but trigger the balance fetch here
    const p2 = fetchIncogniteeBalance().then(() =>
        console.log("fetched incognitee balance")
    );
    promises.push(p2);

    await Promise.all(promises);
};
const copyOwnAddressToClipboard = () => {
    navigator.clipboard
        .writeText(accountStore.getAddress)
        .then(() =>
            alert(
                "copied your account address to clipboard. Please paste it into the address field on the faucet."
            )
        );
};

onMounted(async () => {
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    loadEnv();
    incogniteeStore.initializeApi(
        chainConfigs[incogniteeSidechain.value].api,
        incogniteeShard.value
    );
    eventBus.on("addressClicked", openChooseWalletOverlay);
    const seedHex = router.currentRoute.value.query.seed;
    const injectedAddress = router.currentRoute.value.query.address;
    if (router.currentRoute.value.query.forceLive) {
        forceLive.value = true;
        console.log("forcing live status to true");
    }
    if (seedHex) {
        console.log("found seed in url: " + seedHex);
        await cryptoWaitReady().then(() => {
            const localKeyring = new Keyring({ type: "sr25519" });
            const account = localKeyring.addFromSeed(hexToU8a(seedHex));
            accountStore.setAccount(account);
        });
    } else if (injectedAddress) {
        await connectExtension();
        try {
            accountStore.setAccount(injectedAddress.toString());
            accountStore.setInjector(
                await injectorForAddress(accountStore.getAddress)
            );
        } catch (e) {
            console.warn("could not load injected account" + e);
            alert(
                "could not find selected address in extensions. Have you enabled your extensions?"
            );
        }
    } else {
        openChooseWalletOverlay();
        await subscribeWhatsReady();
    }
});

onUnmounted(() => {
    eventBus.off("addressClicked", openChooseWalletOverlay);
    window.removeEventListener("resize", checkIfMobile);
});

const dropSubscriptions = () => {
    console.log("dropping subscriptions");
    api?.disconnect();
    api = null;
    isFetchingIncogniteeBalance.value = true;
    disableGetter.value = false;
    accountStore.setInjector(null);
};

const createTestingAccount = async () => {
    await cryptoWaitReady().then(() => {
        dropSubscriptions();
        const generatedMnemonic = mnemonicGenerate();
        const localKeyring = new Keyring({ type: "sr25519", ss58Format: 42 });
        const newAccount = localKeyring.addFromMnemonic(generatedMnemonic, {
            name: "fresh",
        });
        const seed = mnemonicToMiniSecret(generatedMnemonic);
        const privateKeyHex = u8aToHex(seed);
        console.log(`Private Key in Hex: ${privateKeyHex}`);
        // change url to contain new seed to allow bookmarking
        const currentQuery = { ...router.currentRoute.value.query };
        currentQuery.address = undefined;
        currentQuery.seed = privateKeyHex;
        router.push({
            query: currentQuery,
        });
        accountStore.setAccount(newAccount);
        openNewWalletOverlay();
        closeChooseWalletOverlay();
        isChoosingAccount.value = false;
        isUpdatingIncogniteeBalance.value = false;
        isFetchingIncogniteeBalance.value = true;
    });
};

const computedShieldingMax = computed(() => {
    return Math.max(
        0,
        Math.min(
            shieldingLimit.value -
            accountStore.getDecimalBalanceFree(incogniteeSidechain.value),
            accountStore.getDecimalBalanceTransferable(shieldingTarget.value) -
            accountStore.getDecimalExistentialDeposit(shieldingTarget.value) -
            0.1
        )
    );
});

const showAssetsInfo = ref(false);
const openAssetsInfo = () => {
    showAssetsInfo.value = true;
};
const closeAssetsInfo = () => {
    showAssetsInfo.value = false;
};

const showMessages = ref(false);
const openMessages = () => {
    showMessages.value = true;
};
const closeMessages = () => {
    showMessages.value = false;
};

const showNewMessages = ref(false);
const openNewMessages = () => {
    showNewMessages.value = true;
};
const closeNewMessages = () => {
    showNewMessages.value = false;
};

const showPrivacyInfo = ref(false);
const openPrivacyInfo = () => {
    showPrivacyInfo.value = true;
};
const closePrivacyInfo = () => {
    showPrivacyInfo.value = false;
};

const showNewWalletOverlay = ref(false);
const openNewWalletOverlay = () => {
    if (!enableActions.value) {
        console.error("network not live");
        return;
    }
    showNewWalletOverlay.value = true;
};
const closeNewWalletOverlay = () => {
    showNewWalletOverlay.value = false;
};

const showChooseWalletOverlay = ref(false);
const openChooseWalletOverlay = () => {
    if (!enableActions.value) {
        console.error("network not live");
        return;
    }
    isChoosingAccount.value = true;
    isUpdatingIncogniteeBalance.value = true;
    showChooseWalletOverlay.value = true;
};
const closeChooseWalletOverlay = () => {
    isChoosingAccount.value == false;
    showChooseWalletOverlay.value = false;
};

const showShieldOverlay = ref(false);
const openShieldOverlay = () => {
    if (!enableActions.value) {
        console.error("network not live");
        return;
    }
    shieldAmount.value = Math.floor(
        Math.min(shieldAmount.value, computedShieldingMax.value)
    );
    showShieldOverlay.value = true;
};
const closeShieldOverlay = () => {
    showShieldOverlay.value = false;
};

const showFaucetOverlay = ref(false);
const openFaucetOverlay = () => {
    if (!enableActions.value) {
        console.error("network not live");
        return;
    }
    showFaucetOverlay.value = true;
};
const closeFaucetOverlay = () => {
    showFaucetOverlay.value = false;
};

const showObtainTokenOverlay = ref(false);
const openObtainTokenOverlay = () => {
    if (!enableActions.value) {
        console.error("network not live");
        return;
    }
    showObtainTokenOverlay.value = true;
};
const closeObtainTokenOverlay = () => {
    showObtainTokenOverlay.value = false;
};

const showUnshieldOverlay = ref(false);
const openUnshieldOverlay = () => {
    if (!enableActions.value) {
        console.error("network not live");
        return;
    }
    unshieldAmount.value = Math.floor(
        Math.min(10, accountStore.getDecimalBalanceFree(incogniteeSidechain.value))
    );
    showUnshieldOverlay.value = true;
};
const closeUnshieldOverlay = () => {
    showUnshieldOverlay.value = false;
};
const showReceiveOverlay = ref(false);
const openReceiveOverlay = () => {
    if (!enableActions.value) {
        console.error("network not live");
        return;
    }
    showReceiveOverlay.value = true;
};
const closeReceiveOverlay = () => {
    showReceiveOverlay.value = false;
};
const showPrivateSendOverlay = ref(false);
const openPrivateSendOverlay = () => {
    if (!enableActions.value) {
        console.error("network not live");
        return;
    }
    console.debug(
        `openPrivateSendOverlay (scanoverlay=${showScanOverlay.value})`
    );
    sendAmount.value = Math.floor(
        Math.min(
            sendAmount.value,
            accountStore.getDecimalBalanceFree(incogniteeSidechain.value) - 0.1
        )
    );
    showPrivateSendOverlay.value = true;
};
const closePrivateSendOverlay = () => {
    console.debug("closePrivateSendOverlay");
    showPrivateSendOverlay.value = false;
};

const showGuessTheNumberOverlay = ref(false);
const openGuessTheNumberOverlay = () => {
    if (!enableActions.value) {
        console.error("network not live");
        return;
    }
    console.log(
        `openGuessTheNumberOverlay (scanoverlay=${showScanOverlay.value})`
    );
    fetchGuessTheNumberInfo();
    showGuessTheNumberOverlay.value = true;
};
const closeGuessTheNumberOverlay = () => {
    console.log("closeGuessTheNumberOverlay");
    showGuessTheNumberOverlay.value = false;
};

const showScanOverlay = ref(false);
const openScanOverlay = () => {
    scanResult.value = "No QR code data yet";
    showScanOverlay.value = true;
};
const closeScanOverlay = () => {
    console.debug("closeScanOverlay");
    showScanOverlay.value = false;
};
const showStatusOverlay = ref(false);
const openStatusOverlay = () => {
    showStatusOverlay.value = true;
};
const closeStatusOverlay = () => {
    showStatusOverlay.value = false;
    showPrivateSendOverlay.value = false;
    showShieldOverlay.value = false;
    showUnshieldOverlay.value = false;
};

const isMobile = ref(false);

// Überwache die Bildschirmgröße und aktualisiere den isMobile-Wert
const checkIfMobile = () => {
    isMobile.value = window.matchMedia("(max-width: 768px)").matches;
};
const formatTimestamp = (timestamp: number | null) => {
    if (!timestamp) return "undefined";
    console.log("formatting epoch: " + timestamp);
    const date = new Date(timestamp.toNumber());
    const options: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZoneName: "short",
    };
    return new Intl.DateTimeFormat("de-CH", options).format(date);
};

const enableActions = computed(() => {
    return isLive.value || forceLive.value;
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
.cursor-pointer {
    cursor: pointer;
}
</style>
