<template>
 <CampaignBanner v-if="enableActions" :onClick="openGuessTheNumberOverlay" :isMobile="isMobile"
    textMobile="Guess-The-Number" textDesktop="Join the Guess-The-Number Campaign and win some juicy prizes." />

  <InfoBanner v-if="!enableActions" :isMobile="isMobile" textMobile="This page is not yet live for mainnet"
    textDesktop="This page is not yet live for mainnet. please visit <a href='https://try.incognitee.io'>try.incognitee.io</a> for the latest version of our paseo testnet wallet" />

  <InfoBanner v-if="!enableActions" :isMobile="isMobile" textMobile="Looking for <a href='/teerdays'>TEERdays</a>?"
    textDesktop="If you are looking for our TEERDAYS page, please follow <a href='/teerdays'>this link</a>" />

  <div class="mt-4"></div>

  <NetworkSelector :openAssetsInfo="openAssetsInfo" :selectedNetwork="shieldingTarget" />

<div class="text-center mt-10 mb-5">
<span class="text-2xl font-black">Vouchers</span>
<p class="mt-2 text-sm text-gray-400">You can create  new vouchers to share tokens with your friends in seconds. Your friend doesn’t need an existing wallet.​</p>
<button @click="openCreateVoucher" type="button" class="my-10 btn btn_gradient rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm ">Create Voucher​</button>
</div>


  <div class="title text-2xl font-bold tracking-tight text-white sm:text-2xl">
    History
  </div>

  
      
      <div class="flex-1 overflow-y-auto bg-gray-900 mt-5 rounded-md">
        <table class="w-full whitespace-nowrap text-left">
          <tbody class="divide-y divide-white/10">
            <tr class="flex justify-between">
              <!-- Linksbündige Zelle mit Icon, Text und "New"-Badge -->
              <td class="flex items-center gap-x-4 py-4 pl-4 pr-8 text-left sm:pl-6 lg:pl-8">
                <!-- Pfeil-SVG für Incoming Transfer -->

                <svg viewBox="0 0 24 24" fill="currentColor" class="size-5 text-gray-400">
                  <path fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z"
                    clip-rule="evenodd" />
                </svg>

                <div class="flex flex-col">
                  <div class="flex items-start gap-x-3">
                    <div class="text-sm font-medium text-white">
                      Voucher created​
                    </div>
                    <!-- "New" Badge für Desktop und grüner Punkt für Mobile -->
                    <div
                      class="hidden sm:block rounded-md bg-green-700 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-green-600/20">
                      New
                    </div>
                    <div class="sm:hidden rounded-full bg-green-500 w-2 h-2"></div>
                    <!-- Grüner Punkt für mobile Ansicht -->
                  </div>
                  <div class="wallet-address mt-1 text-xs text-gray-500 whitespace-nowrap">
                    2Pm7Rdfjansfjkabgh435346bdfasdf
                  </div>
                </div>
              </td>

              <!-- Rechtsbündige Zelle für TEER Betrag und Datum -->
              <td class="flex flex-col items-end py-4 pr-4 text-right text-sm text-white sm:pr-6 lg:pr-8">
                <div class="text-sm font-medium text-white">+ 100 TEER</div>
                <time class="mt-1 text-xs text-gray-500">24.08.2024 15:00</time>
              </td>
              <td class="hidden py-4 pl-0 pr-4 text-right text-sm/6 text-white sm:table-cell sm:pr-6 lg:pr-8">
                <!-- Desktop Ansicht -->
                <button @click="openNote" type="button"
                  class="hidden sm:inline btn btn_gradient rounded sm:px-2 sm:py-1 text-xs font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                  Note
                </button>
              </td>
            </tr>

            <!-- Weitere Zeile als Beispiel -->
            <tr class="flex justify-between">
              <!-- Linksbündige Zelle mit Icon, Text und "New"-Badge -->
              <td class="flex items-center gap-x-4 py-4 pl-4 pr-8 text-left sm:pl-6 lg:pl-8">
                <!-- Pfeil-SVG für Submit Guess -->
                <svg viewBox="0 0 20 20" fill="currentColor" class="h-6 w-5 text-gray-400">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-.75-4.75a.75.75 0 0 0 1.5 0V8.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0L6.2 9.74a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z"
                    clip-rule="evenodd" />
                </svg>

                <div class="flex flex-col">
                  <div class="flex items-start gap-x-3">
                    <div class="text-sm font-medium text-white">
                      Voucher created​
                    </div>
                    <!-- "New" Badge für Desktop und grüner Punkt für Mobile -->
                    <div
                      class="hidden sm:block rounded-md bg-green-700 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-green-600/20">
                      New
                    </div>
                    <div class="sm:hidden rounded-full bg-green-500 w-2 h-2"></div>
                    <!-- Grüner Punkt für mobile Ansicht -->
                  </div>
                  <div class="wallet-address mt-1 text-xs text-gray-500 whitespace-nowrap">
                    2Pm7Rdfjansfjkabgh435346bdfasdf
                  </div>
                </div>
              </td>

              <!-- Rechtsbündige Zelle für TEER Betrag und Datum -->
              <td class="flex flex-col items-end py-4 pr-4 text-right text-sm text-white sm:pr-6 lg:pr-8">
                <div class="text-sm font-medium text-white">- 0.1 TEER</div>
                <time class="mt-1 text-xs text-gray-500">24.08.2024 15:00</time>
              </td>
              <td class="hidden py-4 pl-0 pr-4 text-right text-sm/6 text-white sm:table-cell sm:pr-6 lg:pr-8">
                <!-- Desktop Ansicht -->
                <button @click="openNote" type="button"
                  class="hidden sm:inline btn btn_gradient rounded sm:px-2 sm:py-1 text-xs font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                  Note
                </button>
              </td>
            </tr>

            <tr class="flex justify-between">
              <td class="flex justify-between py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                <div class="flex items-center gap-x-4">
                  <svg class="h-6 w-5 flex-none text-gray-400 sm:block" viewBox="0 0 20 20" fill="currentColor"
                    aria-hidden="true" data-slot="icon">
                    <path fill-rule="evenodd"
                      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-.75-4.75a.75.75 0 0 0 1.5 0V8.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0L6.2 9.74a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z"
                      clip-rule="evenodd" />
                  </svg>
                  <div class="flex-auto">
                    <div class="flex items-start gap-x-3">
                      <div id="addressnumber" class="text-sm/6 font-medium text-white">
                        Voucher created​
                      </div>
                    </div>
                    <div class="wallet-address mt-1 text-xs/5 text-gray-500 whitespace-nowrap">
                      2Pm7Rdfjansfjkabgh435346bdfasdf​
                    </div>
                  </div>
                </div>
              </td>
              <td class="flex flex-col items-end py-4 pr-4 text-right text-sm text-white sm:pr-6 lg:pr-8">
                <div class="text-sm font-medium text-white">- 5.1 TEER</div>
                <time class="mt-1 text-xs text-gray-500">24.08.2024 15:00</time>
              </td>

              <td class="hidden py-4 pl-0 pr-4 text-right text-sm/6 text-white sm:table-cell sm:pr-6 lg:pr-8">
                <!-- Desktop Ansicht -->
                <button @click="openNote" type="button"
                  class="hidden sm:inline btn btn_gradient rounded sm:px-2 sm:py-1 text-xs font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                  Note
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  

  <!-- Note Info Overlay -->
  <OverlayDialog :show="showNote" :close="closeNote" title="Call details">
    <div class="mt-5">
      <p class="text-sm text-gray-400 text-left my-4">
        Hier sollte eine kurze Beschreibung reinkommen. Zwei Zeilen sehen gut
        aus!
      </p>
    </div>

    <div class="mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-1 gap-6 items-start">
        <div>
          <div class="rounded-lg bg-gray-800 shadow-sm ring-1 ring-gray-700 pb-3">
            <dl class="flex flex-wrap">
              <!-- round info -->
              <div class="w-full flex justify-between px-6 pt-3">
                <div class="flex-auto text-left mb-4 md:mb-0">
                  <dt class="text-sm text-left font-semibold leading-6 text-gray-300">
                    Transaction Type
                  </dt>
                  <dd class="mt-1 text-base text-sm text-gray-500">
                   500 TEER
                  </dd>
                </div>

                <div class="flex-auto text-right">
                  <dt class="text-sm font-semibold leading-6 text-gray-300">
                    Timestamp
                  </dt>
                  <dd class="mt-1 text-base text-sm text-gray-500">
                    sdsds
                  </dd>
                </div>
              </div>
              <!-- last round lucky number -->
              <div
                class="mt-3 flex w-full flex-none gap-x-4 border-t border-gray-700 px-6 pt-3">
                <div class="flex-auto text-left mb-4 md:mb-0">
                  <dt class="text-sm text-left font-semibold leading-6 text-gray-300">
                    Last lucky number
                  </dt>
                 
                    <div class="walletdesktop-address mt-1 text-base text-sm text-gray-500 truncate">
                2Pm7Rdfjansfjkabgh435346bdfasdf
              </div>
                  
                </div>

                <div class="flex-auto text-right">
                  <dt class="text-sm font-semibold leading-6 text-gray-300">
                    Last winning distance
                  </dt>
                  <dd class="mt-1 text-base text-sm text-gray-500">
                    sdsdsdsd
                  </dd>
                </div>
              </div>
              <!-- last round winners -->
              <div class="mt-3 flex flex-col w-full flex-none border-t border-gray-700 px-6 pt-3">
                <div class="text-sm font-semibold leading-6 text-gray-300 text-left">
                  From
                </div>
                <div class="walletdesktop-address mt-1 text-base text-sm text-gray-500 truncate">
                2Pm7Rdfjansfjkabgh435346bdfasdf
              </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full mt-8 bg-gray-800">
      <button type="button"
        class="btn btn_gradient inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm">
        Delete
      </button>
    </div>
  </OverlayDialog>

  <!-- Send Privately -->
  <OverlayDialog :show="showCreateVoucher && !showScanVoucher" :close="closeCreateVoucher"
    title="Create new Voucher">
    <div class="mt-5">
      <p class="text-sm text-gray-400 text-left my-4">
        Sending privately means that only you and the recipient know who sent
        how much to whom.
      </p>
    </div>
    <form class="mt-5" @submit.prevent="submitSendForm">
      
      <div class="mt-10">
        <!-- Label and available balance -->
        <div class="flex justify-between items-center">
          <label for="CreateVoucher" class="text-sm font-medium leading-6 text-white">{{ accountStore.getSymbol }}
            Amount</label>

          <span class="text-xs text-gray-400">Available private balance:
            {{ accountStore.formatBalanceFree(incogniteeSidechain) }}</span>
        </div>

        <!-- Input field -->
        <div>
          <input id="CreateVoucher" v-model="CreateVoucher" type="number" step="0.01" :min="0.1" :max="accountStore.getDecimalBalanceFree(incogniteeSidechain) -
            accountStore.getDecimalExistentialDeposit(incogniteeSidechain) -
            0.1
            " required
            class="w-full text-sm rounded-lg flex-grow py-2 bg-cool-900 text-white placeholder-gray-500 border border-transparent hover:border-incognitee-green focus:border-incognitee-blue truncate-input text-right"
           placeholder="Amount" />
        </div>

        <!-- Fee description -->
        <div class="text-right">
          <span class="text-xs text-gray-400">Fee: {{ formatDecimalBalance(INCOGNITEE_TX_FEE) }}
            {{ accountStore.getSymbol }} for Incognitee</span>
        </div>
      </div>
         <!-- Messages -->
    <div class="flex flex-col">
      <label for="recipientAddress" class="text-sm font-medium leading-6 text-white text-left">Note</label>
      <div class="relative flex items-center rounded-lg">
        <textarea id="note" rows="4" ref="noteTextarea" name="note" placeholder="Enter a private note for the recipient"
          class="w-full text-sm rounded-lg flex-grow py-2 bg-cool-900 placeholder-gray-500 border border-transparent hover:border-incognitee-green focus:border-incognitee-blue truncate-input"></textarea>
      </div>
    </div>
      <div class="mt-8 bottom-0 left-0 w-full bg-gray-800">
        <button @click="openScanVoucher" type="button"
          class="btn btn_gradient inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm">
          Generate Voucher
        </button>
      </div>
    </form>
  </OverlayDialog>

    <!-- Scan Voucher -->
    <OverlayDialog :show="showScanVoucher" :close="closeScanVoucher" title="Scan Voucher">
    <div class="mt-5">
      <p class="text-sm text-gray-400 text-left my-4">
        Share your address with the sender. You can either have them scan this
        QR code or send them a private message.
      </p>
    </div>
    <div class="mt-5 qrcode-container">
      <qrcode :value="accountStore.getAddress"></qrcode>
    </div>

    <div class="flex flex-col mt-5">
      <div class="w-full mt-5 mb-2 text-sm font-medium leading-6 text-white font-semibold">
        Voucher address:
      </div>
      <div class="relative flex items-center rounded-lg">
        <input id="accountAddress" type="text" :value="accountStore.getAddress" readonly
          class="w-full text-sm rounded-lg flex-grow pr-14 py-2 bg-cool-900 text-white placeholder-gray-500 border border-green-500 truncate-input"
          style="border-color: #24ad7c" />
        <div class="absolute right-3 flex space-x-2">
          <div @click="copyOwnAddressToClipboard" class="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </OverlayDialog>
</template>

<script lang="ts" setup>
import NetworkSelector from "@/components/ui/NetworkSelector.vue";
import TEERdays from "@/public/img/index/TEERdays-icon-white.svg";
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


const showScanVoucher = ref(false);
const openScanVoucher = () => {
  showScanVoucher.value = true;
};
const closeScanVoucher = () => {
  showScanVoucher.value = false;
};

const showNote = ref(false);
const openNote = () => {
  showNote.value = true;
};
const closeNote = () => {
  showNote.value = false;
};

const showMessages = ref(false);
const openMessages = () => {
  showMessages.value = true;
};
const closeMessages = () => {
  showMessages.value = false;
};

const showAssetsInfo = ref(false);
const openAssetsInfo = () => {
  showAssetsInfo.value = true;
};
const closeAssetsInfo = () => {
  showAssetsInfo.value = false;
};

const showViewMore = ref(false);
const openViewMore = () => {
  showViewMore.value = true;
};
const closeViewMore = () => {
  showViewMore.value = false;
};

const showPrivacyInfo = ref(false);
const openPrivacyInfo = () => {
  showPrivacyInfo.value = true;
};
const closePrivacyInfo = () => {
  showPrivacyInfo.value = false;
};

const showCreateVoucher = ref(false);
const openCreateVoucher = () => {
    showCreateVoucher.value = true;
};
const closeCreateVoucher = () => {
    showCreateVoucher.value = false;
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

<style>
/* Entfernt die Pfeile für Eingabefelder in Webkit-basierten Browsern wie Chrome und Safari */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Entfernt die Pfeile für Eingabefelder in Firefox */
input[type="number"] {
  -moz-appearance: textfield;
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
</style>