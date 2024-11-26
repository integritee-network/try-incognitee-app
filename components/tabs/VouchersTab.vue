<template>
  <NetworkSelector
    :openAssetsInfo="()=>{}"
    :selectedNetwork="shieldingTarget"
  />
  <div class="text-center mt-10 mb-5">
    <span class="text-2xl font-black">Vouchers</span>
    <p class="mt-2 text-sm text-gray-400">You can create  new vouchers to share tokens with your friends in seconds. Your friend doesn’t need an existing wallet.​</p>
    <button @click="openCreateVoucher" type="button" class="my-10 btn btn_gradient rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm ">Create Voucher​</button>
  </div>

  <OverlayDialog :show="showCreateVoucher && !showShareVoucher" :close="closeCreateVoucher"
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
          <input id="sendAmount" v-model="sendAmount" type="number" step="0.01" :min="0.1" :max="accountStore.getDecimalBalanceFree(incogniteeSidechain) -
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
      <div class="relative flex items-center rounded-lg">
          <textarea
            id="messages"
            v-model="sendPrivateNote"
            rows="2"
            ref="messageTextarea"
            name="messages"
            placeholder="Enter a private note for the recipient"
            :maxlength="140"
            class="w-full text-sm rounded-lg flex-grow py-2 bg-cool-900 text-white placeholder-gray-500 border border-green-500 truncate-input pr-12"
          ></textarea>
      </div>
      <div class="mt-8 bottom-0 left-0 w-full bg-gray-800">
        <button @click="submitGenerateVoucherForm" type="button"
                class="btn btn_gradient inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm">
          Generate Voucher
        </button>
      </div>
    </form>
  </OverlayDialog>

  <!-- share QR Voucher -->
  <OverlayDialog :show="showShareVoucher" :close="closeShareVoucher" title="Share Voucher">
    <div class="mt-5">
      <p class="text-sm text-gray-400 text-left my-4">
        Share your address with the sender. You can either have them scan this
        QR code or send them a private message.
      </p>
    </div>
    <div class="mt-5 qrcode-container">
      <qrcode :value="voucherUrl"></qrcode>
    </div>

    <div class="flex flex-col mt-5">
      <div class="w-full mt-5 mb-2 text-sm font-medium leading-6 text-white font-semibold">
        Voucher URL:
      </div>
      <div class="relative flex items-center rounded-lg">
        <input id="voucherAddress" type="text" :value="voucherUrl" readonly
               class="w-full text-sm rounded-lg flex-grow pr-14 py-2 bg-cool-900 text-white placeholder-gray-500 border border-green-500 truncate-input"
               style="border-color: #24ad7c" />
        <div class="absolute right-3 flex space-x-2">
          <div @click="copyVoucherUrlToClipboard" class="cursor-pointer">
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
  <StatusOverlay
    :tx-status="txStatus"
    :show="showStatusOverlay"
    :close="closeStatusOverlay"
  />
</template>


<script setup lang="ts">
import NetworkSelector from "~/components/ui/NetworkSelector.vue";
import OverlayDialog from "~/components/overlays/OverlayDialog.vue";
import { computed, defineProps, ref, defineExpose } from "vue";
import Qrcode from "vue-qrcode";
import { formatDecimalBalance } from "~/helpers/numbers";
import { useAccount } from "~/store/account";
import { useIncognitee } from "~/store/incognitee";
import {
  INCOGNITEE_GTN_GUESS_FEE,
  INCOGNITEE_SHIELDING_FEE_FRACTION,
  INCOGNITEE_TX_FEE,
  INCOGNITEE_UNSHIELDING_FEE,
} from "~/configs/incognitee";
import {
  shieldingTarget,
  shieldingLimit,
  incogniteeSidechain,
  isLive,
} from "~/lib/environmentConfig";
import {TypeRegistry, u32} from "@polkadot/types";
import StatusOverlay from "~/components/overlays/StatusOverlay.vue";
import {Health, useSystemHealth} from "~/store/systemHealth";
import {cryptoWaitReady, mnemonicGenerate, mnemonicToMiniSecret} from "@polkadot/util-crypto";
import {Keyring} from "@polkadot/keyring";
import {u8aToHex} from "@polkadot/util";
import { useRouter } from "vue-router";

const accountStore = useAccount();
const incogniteeStore = useIncognitee();
const systemHealth = useSystemHealth();
const router = useRouter();

const txStatus = ref("");
const voucherSeedHex = ref(null);
const sendAmount = ref(1.0);
const sendPrivateNote = ref("");

const voucherUrl = computed(() => {
  const currentUrl = new URL(window.location.href);
  currentUrl.searchParams.set('seed', voucherSeedHex.value);
  currentUrl.searchParams.delete('app');
  return currentUrl.toString();
})

const submitGenerateVoucherForm = async () => {
  if (systemHealth.getSidechainSystemHealth.overall() !== Health.Healthy) {
    alert(
      "Sidechain health currently can't be assessed. Please wait for a green health indicator and try again",
    );
    return;
  }
  openStatusOverlay();
  await fundNewVoucher();
  openShareVoucher()
};
const fundNewVoucher = async () => {
  console.log("sending funds on incognitee");
  txStatus.value = "⌛ sending funds privately on incognitee";
  const amount = accountStore.decimalAmountToBigInt(sendAmount.value);
  const account = accountStore.account;
  const voucherAddress = await generateNewVoucher();
  const encoder = new TextEncoder();
  const byteLength = encoder.encode(sendPrivateNote.value).length;
  // fixme: https://github.com/encointer/encointer-js/issues/123
  if (byteLength > 161) {
    alert(
      "Note is too long when encoded to UTF-8. Please keep it under 162 bytes.",
    );
    return;
  }
  const note = sendPrivateNote.value.length > 0 ? sendPrivateNote.value : null;
  const nonce = new u32(
    new TypeRegistry(),
    accountStore.nonce[incogniteeSidechain.value],
  );
  console.log(
    `sending ${sendAmount.value} from ${account.address} privately to ${voucherAddress} with nonce ${nonce} and note: ${note}`,
  );

  await incogniteeStore.api
    .trustedBalanceTransfer(
      account,
      incogniteeStore.shard,
      incogniteeStore.fingerprint,
      accountStore.getAddress,
      voucherAddress,
      amount,
      note,
      {
        signer: accountStore.injector?.signer,
        nonce: nonce,
      },
    )
    .then((result) => handleTopResult(result, "😀 Balance transfer successful"))
    .catch((err) => handleTopError(err));
  //todo: manually inc nonce locally avoiding clashes with fetchIncogniteeBalance
};

const generateNewVoucher = async () => {
  return cryptoWaitReady().then(() => {
    const generatedMnemonic = mnemonicGenerate();
    const localKeyring = new Keyring({ type: "sr25519", ss58Format: 42 });
    const newAccount = localKeyring.addFromMnemonic(generatedMnemonic, {
      name: "fresh",
    });
    const seed = mnemonicToMiniSecret(generatedMnemonic);
    voucherSeedHex.value = u8aToHex(seed);
    console.log(`Voucher address: ${newAccount.address},  Private Key in Hex: ${voucherSeedHex.value}`);
    return newAccount.address;
  })
};
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

const showShareVoucher = ref(false);
const openShareVoucher = () => {
  showShareVoucher.value = true;
};
const closeShareVoucher = () => {
  showShareVoucher.value = false;
};

const showCreateVoucher = ref(false);
const openCreateVoucher = () => {
  showCreateVoucher.value = true;
};
const closeCreateVoucher = () => {
  showCreateVoucher.value = false;
};

const showStatusOverlay = ref(false);
const openStatusOverlay = () => {
  showStatusOverlay.value = true;
};
const closeStatusOverlay = () => {
  showStatusOverlay.value = false;
};

const copyVoucherUrlToClipboard = () => {
  navigator.clipboard
    .writeText(voucherUrl.value)
    .then(() =>
      alert(
        "copied your account address to clipboard. Please paste it into the address field on the faucet.",
      ),
    );
};
</script>

<style scoped>
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
