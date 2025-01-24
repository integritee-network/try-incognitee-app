<template>
  <div class="mt-3 sm:mt-5 px-3 flex justify-between items-center">
    <button
      @click="eventBus.emit('toggleSidebar')"
      class="lg:hidden text-white focus:outline-none text-2xl"
    >
      ☰
    </button>
    <div class="lg:hidden">
      <HealthIndicator />
    </div>
    <div class="lg:hidden">
      <WalletIndicator />
    </div>
    <TokenIndicator class="lg:hidden" />
  </div>
  <div class="p-3">
    <div class="text-center mt-10 mb-5">
      <span class="text-2xl font-black">Vouchers</span>
      <p class="mt-2 text-sm text-gray-400">
        Here you can create new vouchers to share tokens with your friends in
        seconds. <br />Your friend doesn’t need an existing wallet but can
        redeem the voucher to a secure wallet later at their convenience.​
      </p>
      <button
        @click="openCreateVoucher"
        type="button"
        class="my-10 bg-gradient-to-r from-incognitee-green to-incognitee-blue w-full justify-center rounded-md text-sm font-semibold text-white py-1.5 px-4 sm:w-auto hover:shadow-lg hover:shadow-incognitee-green/50"
      >
        Create Voucher​
      </button>
    </div>

    <div
      v-if="allVouchers?.length > 0"
      class="flex items-center justify-between text-2xl font-bold tracking-tight text-white sm:text-2xl"
    >
      <!-- Linke Seite: Überschrift -->
      <div>History</div>

      <!-- Rechte Seite: Button -->
      <button
        @click="openDeleteModal('all')"
        type="button"
        class="text-sm font-semibold hover:text-incognitee-green"
      >
        Clear all history
      </button>
    </div>

    <div class="flex-1 overflow-y-auto bg-gray-900 mt-5 rounded-md">
      <table class="w-full whitespace-nowrap text-left">
        <tbody class="divide-y divide-white/10">
          <tr
            v-for="(voucher, index) in allVouchers"
            :key="index"
            class="flex justify-between"
          >
            <!-- Linksbündige Zelle mit Icon, Text und "New"-Badge -->
            <td
              class="flex items-center gap-x-4 py-4 pl-4 pr-8 text-left sm:pl-6 lg:pl-8"
            >
              <div class="flex flex-col">
                <div class="flex items-start gap-x-3">
                  <div class="text-sm font-medium text-white wallet-address">
                    {{ voucher.address }}
                  </div>
                </div>
                <div class="mt-1 text-xs text-gray-500">{{ voucher.note }}</div>
              </div>
            </td>

            <!-- Rechtsbündige Zelle für TEER Betrag und Datum -->
            <td
              class="flex flex-col items-end py-4 pr-4 text-right text-sm text-white sm:pr-6 lg:pr-8"
            >
              <div class="text-sm font-medium text-white">
                {{ voucher.amount }} {{ accountStore.getSymbol }}
              </div>
              <time class="mt-1 text-xs text-gray-500">{{
                formatDate(voucher.timestamp)
              }}</time>
            </td>
            <td
              class="py-4 pl-0 pr-4 text-right text-sm/6 text-white sm:table-cell sm:pr-6 lg:pr-8"
            >
              <!-- Desktop Ansicht -->
              <div class="flex items-center gap-4">
                <svg
                  @click="showVoucher(voucher)"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-5 cursor-pointer"
                >
                  <path
                    d="M11.625 16.5a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75Z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm6 16.5c.66 0 1.277-.19 1.797-.518l1.048 1.048a.75.75 0 0 0 1.06-1.06l-1.047-1.048A3.375 3.375 0 1 0 11.625 18Z"
                    clip-rule="evenodd"
                  />
                  <path
                    d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z"
                  />
                </svg>
                <svg
                  @click="openDeleteModal(voucher)"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-5 cursor-pointer"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <!-- this is necessary to avoid the footer overlapping the text -->
      <br /><br /><br /><br /><br /><br /><br />
    </div>

    <!-- Delete Popup -->
    <div
      v-if="isDeleteModalOpen"
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="fixed inset-0 bg-gray-500/75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex min-h-full items-start justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <div
            class="w-full relative transform overflow-hidden rounded-lg bg-gray-800 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
          >
            <!-- Close Button (X) -->
            <button
              @click="closeDeleteModal"
              type="button"
              class="absolute top-3 right-3 text-white bg-transparent hover:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div class="sm:flex sm:items-start">
              <div
                class="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-incognitee-gray sm:mx-0 sm:size-10"
              >
                <svg
                  class="size-6 text-green"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                  />
                </svg>
              </div>
              <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <h3 class="text-base font-semibold text-white" id="modal-title">
                  Forget voucher(s)
                </h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    You are only clearing the entry, funds remain on the address
                    and are accessible via the link if you shared or saved it
                  </p>
                </div>
              </div>
            </div>
            <div class="relative group">
              <div class="relative inline-block group"></div>
            </div>
            <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
              <button
                @click="doForgetVoucher()"
                type="button"
                class="bg-gradient-to-r from-incognitee-green to-incognitee-blue w-full justify-center rounded-md text-sm font-semibold text-white py-1.5 px-4 sm:w-auto hover:shadow-lg hover:shadow-incognitee-green/50"
              >
                Forget
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <OverlayDialog
      :show="showCreateVoucher"
      :close="closeCreateVoucher"
      title="Create new Voucher"
    >
      <div class="mt-5">
        <p class="text-sm text-gray-400 text-left my-4">
          We will create a new temporary keypair where you can transfer funds
          to. In the next step, you'll be able to share your new voucher
        </p>
      </div>
      <form class="mt-5" @submit.prevent="submitGenerateVoucherForm">
        <div class="mt-10">
          <!-- Label and available balance -->
          <div class="flex justify-between items-center">
            <label
              for="CreateVoucher"
              class="text-sm font-medium leading-6 text-white"
              >{{ accountStore.getSymbol }} Amount</label
            >

            <span class="text-xs text-gray-400"
              >Available private balance:
              {{ accountStore.formatBalanceFree(incogniteeSidechain) }}</span
            >
          </div>

          <!-- Input field -->
          <div>
            <input
              id="sendAmount"
              v-model="sendAmount"
              type="number"
              step="0.01"
              :min="0.1"
              :max="
                Math.max(
                  0,
                  accountStore.getDecimalBalanceFree(incogniteeSidechain) -
                    accountStore.getDecimalExistentialDeposit(
                      incogniteeSidechain,
                    ) -
                    0.1,
                )
              "
              required
              class="w-full text-sm rounded-lg flex-grow py-2 bg-cool-900 text-white placeholder-gray-500 border border-transparent hover:border-incognitee-green focus:border-incognitee-blue truncate-input text-right"
              placeholder="Amount"
            />
          </div>

          <!-- Fee description -->
          <div class="text-right">
            <span class="text-xs text-gray-400"
              >Fee: {{ formatDecimalBalance(INCOGNITEE_TX_FEE) }}
              {{ accountStore.getSymbol }} for Incognitee</span
            >
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
            class="w-full text-sm rounded-lg flex-grow py-2 bg-cool-900 text-white placeholder-gray-500 border border-transparent hover:border-incognitee-green focus:border-incognitee-blue truncate-input"
          ></textarea>
        </div>
        <div class="mt-8 bottom-0 left-0 w-full bg-gray-800">
          <button
            type="submit"
            class="bg-gradient-to-r from-incognitee-green to-incognitee-blue w-full justify-center rounded-md text-sm font-semibold text-white py-1.5 px-4 sm:w-auto hover:shadow-lg hover:shadow-incognitee-green/50"
          >
            Generate Voucher
          </button>
        </div>
      </form>
    </OverlayDialog>

    <!-- share QR Voucher -->
    <OverlayDialog
      :show="showShareVoucher"
      :close="closeShareVoucher"
      title="Share Voucher"
    >
      <div class="mt-5">
        <p class="text-sm text-gray-400 text-left my-4">
          Share this voucher with your friend. You can either have them scan
          this QR code or send them the link via private message. Make sure no
          one else has access to this voucher as any holder can redeem the funds
        </p>
      </div>
      <div class="mt-5 flex justify-center items-center qrcode-container">
        <qrcode :value="selectedVoucher?.url"></qrcode>
      </div>

      <div class="flex flex-col mt-5">
        <div
          class="w-full mt-5 mb-2 text-sm font-medium leading-6 text-white font-semibold"
        >
          Voucher URL:
        </div>
        <div class="relative flex items-center rounded-lg">
          <input
            id="voucherAddress"
            type="text"
            :value="selectedVoucher?.url"
            readonly
            class="w-full text-sm rounded-lg flex-grow py-2 bg-cool-900 text-white placeholder-gray-500 border border-transparent hover:border-incognitee-green focus:border-incognitee-blue truncate-input pr-12"
          />
          <div class="absolute right-3 flex space-x-2">
            <div @click="copyVoucherUrlToClipboard" class="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                />
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
  </div>
</template>

<script setup lang="ts">
import OverlayDialog from "~/components/overlays/OverlayDialog.vue";
import { watch, ref, onMounted } from "vue";
import Qrcode from "vue-qrcode";
import { divideBigIntToFloat, formatDecimalBalance } from "~/helpers/numbers";
import { useAccount } from "~/store/account";
import { useIncognitee } from "~/store/incognitee";
import { INCOGNITEE_TX_FEE } from "~/configs/incognitee";
import { formatDate } from "@/helpers/date";
import { shieldingTarget, incogniteeSidechain } from "~/lib/environmentConfig";
import { TypeRegistry, u32 } from "@polkadot/types";
import StatusOverlay from "~/components/overlays/StatusOverlay.vue";
import { Health, useSystemHealth } from "~/store/systemHealth";
import {
  cryptoWaitReady,
  encodeAddress,
  mnemonicGenerate,
  mnemonicToMiniSecret,
} from "@polkadot/util-crypto";
import { Keyring } from "@polkadot/keyring";
import { u8aToHex } from "@polkadot/util";
import { useRouter } from "vue-router";
import {
  Voucher,
  storeVoucher,
  getStoredVouchers,
  forgetAllVouchersForShard,
  forgetVoucherForShard,
} from "~/lib/voucherStorage";
import { eventBus } from "@/helpers/eventBus";
import { SessionProxyRole } from "~/lib/sessionProxyStorage";
import HealthIndicator from "~/components/ui/HealthIndicator.vue";
import TokenIndicator from "~/components/ui/TokenIndicator.vue";
import WalletIndicator from "~/components/ui/WalletIndicator.vue";

const accountStore = useAccount();
const incogniteeStore = useIncognitee();
const systemHealth = useSystemHealth();
const router = useRouter();

const txStatus = ref("");
const selectedVoucher = ref(null);
const sendAmount = ref(1.0);
const sendPrivateNote = ref("");
const allVouchers = ref(null);

// State for modal visibility
const isDeleteModalOpen = ref(false);

// Variable to store the current voucher to be deleted
let voucherToDelete = ref<Voucher | string>(null);

// Function to open the modal
function openDeleteModal(voucher: Voucher | string) {
  voucherToDelete.value = voucher; // Set the current voucher to delete
  isDeleteModalOpen.value = true; // Open the modal
}

// Function to close the modal
function closeDeleteModal() {
  voucherToDelete.value = null; // Clear the voucher to delete
  isDeleteModalOpen.value = false; // Close the modal
}

const submitGenerateVoucherForm = async () => {
  if (systemHealth.getSidechainSystemHealth.overall() !== Health.Healthy) {
    alert(
      "Sidechain health currently can't be assessed. Please wait for a green health indicator and try again",
    );
    return;
  }
  closeCreateVoucher();
  openStatusOverlay();
  await fundNewVoucher();
  openShareVoucher();
};

watch(selectedVoucher, () => {
  if (selectedVoucher.value) {
    updateVouchers();
  }
});
const updateVouchers = () => {
  allVouchers.value = getStoredVouchers(incogniteeStore.shard);
};

const showVoucher = (voucher) => {
  selectedVoucher.value = voucher;
  openShareVoucher();
};

const doForgetVoucher = () => {
  if (voucherToDelete.value === "all") {
    console.log("forgetting all vouchers for shard: " + incogniteeStore.shard);
    forgetAllVouchersForShard(incogniteeStore.shard);
  } else {
    console.log(
      "forgetting voucher: " +
        voucherToDelete.value?.address +
        " for shard: " +
        incogniteeStore.shard,
    );
    forgetVoucherForShard(voucherToDelete.value, incogniteeStore.shard);
  }
  updateVouchers();
  closeDeleteModal();
};

const fundNewVoucher = async () => {
  console.log("sending funds on incognitee");
  txStatus.value = "⌛ Sending funds privately on incognitee.";
  const amount = accountStore.decimalAmountToBigInt(sendAmount.value);
  const account = accountStore.account;
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
  const voucher = await generateNewVoucher(amount, incogniteeStore.shard, note);
  selectedVoucher.value = voucher;
  console.log(
    `sending ${sendAmount.value} from ${account.address} privately to ${voucher.address} with nonce ${nonce} and note: ${note}`,
  );

  await incogniteeStore.api
    .trustedBalanceTransfer(
      account,
      incogniteeStore.shard,
      incogniteeStore.fingerprint,
      accountStore.getAddress,
      voucher.address,
      amount,
      note,
      {
        signer: accountStore.injector?.signer,
        delegate: accountStore.sessionProxyForRole(SessionProxyRole.Any),
        nonce: nonce,
      },
    )
    .then((result) => handleTopResult(result, "😀 Balance transfer successful"))
    .catch((err) => handleTopError(err));
  //todo: manually inc nonce locally avoiding clashes with fetchIncogniteeBalance
};

const generateNewVoucher = async (
  amount: BigInt,
  shard: string,
  note: string | null,
): Voucher => {
  return cryptoWaitReady().then(() => {
    const generatedMnemonic = mnemonicGenerate();
    const localKeyring = new Keyring({ type: "sr25519", ss58Format: 42 });
    const newAccount = localKeyring.addFromMnemonic(generatedMnemonic, {
      name: "fresh",
    });
    const seed = mnemonicToMiniSecret(generatedMnemonic);
    const voucherSeedHex = u8aToHex(seed);
    console.log(
      `Voucher address: ${newAccount.address},  Private Key in Hex: ${voucherSeedHex}`,
    );
    const url = new URL(window.location.href);
    url.searchParams.set("seed", voucherSeedHex);
    url.searchParams.delete("app");
    url.searchParams.delete("address");
    const voucher = new Voucher(
      new Date(),
      shard,
      encodeAddress(newAccount.address, accountStore.getSs58Format),
      voucherSeedHex,
      url.toString(),
      divideBigIntToFloat(amount, 10 ** accountStore.getDecimals),
      note,
    );
    console.log("generated new voucher: " + voucher);
    storeVoucher(voucher);
    return voucher;
  });
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
      txStatus.value = "😞 Invalid (unspecified reason).";
      return;
    }
  }
  console.error(`unknown result: ${result}`);
  txStatus.value = "😞 Unknown result.";
};
const handleTopError = (err) => {
  console.error(`error: ${err}`);
  txStatus.value = `😞 Submission failed: ${err}.`;
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

onMounted(() => {
  updateVouchers();
});

const copyVoucherUrlToClipboard = () => {
  navigator.clipboard
    .writeText(selectedVoucher.value?.url)
    .then(() =>
      alert(
        "copied your account address to clipboard. Please paste it into the address field on the faucet.",
      ),
    );
};
</script>

<style scoped>
.btn {
  transition: 0.3s ease;
  cursor: pointer;
  backdrop-filter: blur(30px);

  @include sm {
    font-size: $sm_pDef;
    padding: 12px 18px;
    border-radius: 10px;
  }

  &_gradient {
    background: linear-gradient(84.58deg, #24ad7c 0%, #1845b9 100%);

    &:before {
      position: absolute;
      content: "";
      inset: 0;
      background: linear-gradient(
          0deg,
          rgba(255, 255, 255, 0.15),
          rgba(255, 255, 255, 0.15)
        ),
        linear-gradient(84.58deg, rgb(36, 173, 124) 0%, rgb(24, 69, 185) 100%);
      transition: opacity 0.25s ease;
      opacity: 0;
      border-radius: 12px;
      z-index: -1;

      @include sm {
        border-radius: 10px;
      }
    }

    &:hover {
      &:before {
        opacity: 1;
        box-shadow: 0px 0px 20px 0px rgba(36, 173, 124, 0.65);
      }
    }
  }

  &_border {
    border: 2px solid rgba(255, 255, 255, 0.2);

    &:hover {
      border: 2px solid rgba(255, 255, 255, 0.5);
    }
  }
}
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

.wallet-address {
  display: block;
  white-space: nowrap;
  /* Verhindert Zeilenumbruch */
  overflow: hidden;
  /* Versteckt überlaufenden Text */
  text-overflow: ellipsis;
  /* Zeigt '...' bei zu langem Text an */
  max-width: 10ch;
  /* Maximale Länge: 10 Zeichen */
}

/* Für größere Bildschirme (ab 641px) */
@media (min-width: 641px) {
  .wallet-address {
    max-width: 15ch;
    /* Begrenze auch hier auf 10 Zeichen */
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
</style>
