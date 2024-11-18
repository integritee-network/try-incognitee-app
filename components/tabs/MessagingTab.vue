<template>
  <div class="bg-gray-900 text-white max-h-[650px] flex">
    <!-- Form starts here -->
    <form class="flex" @submit.prevent="submitSendForm">
      <!-- Sidebar -->
      <div class="md:w-1/3 bg-gray-800 border-r border-gray-700 flex flex-col">
        <div class="px-4 py-4 flex items-center justify-between">
          <div class="title text-2xl font-bold tracking-tight text-white sm:text-2xl">
            Messages
          </div>
        </div>
        <!-- Recipient Address Input -->
        <div class="relative flex items-center rounded-lg px-4 py-2">
          <input id="recipientAddress" v-model="recipientAddress" type="text" required
            class="w-full text-sm rounded-lg flex-grow py-2 bg-cool-900 text-white placeholder-gray-500 border border-transparent hover:border-incognitee-green focus:border-incognitee-blue truncate-input pr-12"
            placeholder="Recipient" />
          <div class="absolute right-6 flex space-x-2">
            <div @click="openScanOverlay" class="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="h-6 w-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
              </svg>
            </div>
          </div>
        </div>
        <!-- Message List -->
        <div class="overflow-y-auto flex-1">
          <div class="space-y-1 px-4">
            <!-- Active Message -->
            <div v-for="(chat, index) in noteStore.getMessages" :key="index" class="relative flex items-center">
              <div class="flex-1 p-3 pl-5 bg-gray-700 rounded-lg hover:text-black hover:bg-gray-600 cursor-pointer">
                <div class="flex justify-between items-center">
                  <!-- Wallet-Adresse des Versenders -->
                  <p class="wallet-address text-sm font-bold text-white">
                    {{ chat.account }}
                  </p>
                  <!-- Timestamp der letzten Nachricht -->
                  <span class="text-xs text-gray-400">{{
                    formatDate(chat.timestamp)
                    }}</span>
                </div>
                <!-- Letzte Nachricht im Chat-Verlauf -->
                <p class="text-gray-400 text-xs line-clamp-2 mt-1">
                  {{ chat.note }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Chat window -->
      <div class="md:w-2/2 bg-gray-900 flex flex-col">
        <!-- Header -->
        <div class="px-4 py-4 flex justify-between items-center border-b border-gray-700">
          <h2 class="text-lg font-bold">Chat</h2>
        </div>
        <!-- Chat Messages -->
        <div class="flex-1 overflow-y-auto">
          <PrivateMessageHistory :show="true" />
        </div>
        <!-- Input Box -->
        <div class="border-t border-gray-700">
          <div class="flex items-center bg-gray-800 px-4 py-2">
            <textarea id="messages" v-model="sendPrivateNote" rows="1" name="messages" required
              placeholder="Enter a private note for the recipient"
              class="w-full text-sm rounded-lg flex-grow py-2 bg-cool-900 text-white placeholder-gray-500 border border-transparent hover:border-incognitee-green focus:border-incognitee-blue"></textarea>
            <button type="submit" class="ml-4 text-gray-400 hover:text-gray-300">
              <svg viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z"
                  clip-rule="evenodd" />
              </svg>
            </button>
          </div>

          <div class="border-l-4 border-yellow-400 bg-gray-700 p-4">
            <div class="flex">
              <div class="shrink-0">
                <svg class="size-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                  data-slot="icon">
                  <path fill-rule="evenodd"
                    d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                    clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-xs text-yellow-400">
                  Please be aware that message retention time does not guarantee
                  delivery. Messages are automatically purged in FIFO manner
                  when the buffer limit is reached
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>

  <!-- Scan QR -->
  <OverlayDialog :show="showScanOverlay" :close="closeScanOverlay" title="Scan recipient's QR code">
    <div class="mt-6 qrcode-container">
      <qrcode-stream @detect="onDecode"></qrcode-stream>
    </div>
  </OverlayDialog>

  <!-- Global notification live region -->
  <div v-if="showNotification" aria-live="assertive"
    class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6">
    <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
      <!-- Notification panel -->
      <div
        class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black/5 transition transform ease-out duration-300">
        <div class="p-4">
          <div class="flex items-center">
            <div class="flex w-0 flex-1 justify-between">
              <div class="text-black">{{ txStatus }}</div>
            </div>
            <div class="ml-4 flex shrink-0">
              <button @click="closeNotification" type="button"
                class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <span class="sr-only">Close</span>
                <svg class="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PrivateMessageHistory from "~/components/ui/PrivateMessageHistory.vue";
import { incogniteeSidechain } from "~/lib/environmentConfig";
import { INCOGNITEE_TX_FEE } from "~/configs/incognitee";
import { Health, useSystemHealth } from "~/store/systemHealth";
import { TypeRegistry, u32 } from "@polkadot/types";
import { defineProps, ref, watch, computed } from "vue";
import { useAccount } from "~/store/account";
import { useIncognitee } from "~/store/incognitee";
import OverlayDialog from "~/components/overlays/OverlayDialog.vue";
import { QrcodeStream } from "vue-qrcode-reader";
import { useInterval } from "@vueuse/core";
import { encodeAddress } from "@polkadot/util-crypto";
import identities from "@/lib/polkadotPeopleIdentites";
import { formatDate } from "@/helpers/date";
import { useNotes } from "@/store/notes.ts";
import { Note, NoteDirection } from "@/lib/notes";
import { divideBigIntToFloat } from "@/helpers/numbers";
import NoteDetailsOverlay from "~/components/overlays/NoteDetailsOverlay.vue";

const noteStore = useNotes();

const showNote = ref<Note>(null);
const showViewMore = ref(false);
const openViewMore = (note: Note) => {
  showNote.value = note;
  showViewMore.value = true;
};
const closeViewMore = () => {
  showViewMore.value = false;
};

const recipientAddress = ref("");
const sendPrivateNote = ref("");
const txStatus = ref("");
const accountStore = useAccount();
const incogniteeStore = useIncognitee();
const systemHealth = useSystemHealth();

// txStatus (Statusmeldung) und showNotification (Kontrolle der Anzeige)

const showNotification = ref(false); // Benachrichtigung anzeigen

// Beobachte Änderungen an txStatus
watch(txStatus, (newValue) => {
  if (newValue) {
    showNotification.value = true;

    // Verstecke die Benachrichtigung nach 5 Sekunden
    setTimeout(() => {
      showNotification.value = false;
      txStatus.value = ""; // Zurücksetzen des Status
    }, 5000);
  }
});

// Funktion zum manuellen Schließen der Benachrichtigung
const closeNotification = () => {
  showNotification.value = false;
  txStatus.value = ""; // Zurücksetzen des Status
};

const pollCounter = useInterval(2000);
watch(pollCounter, async () => {
  console.debug("polling for new incognitee notes");
  await props.updateNotes();
});

const filteredLut = computed(() => {
  if (!recipientAddress.value) return [];
  return identities.filter((entry) =>
    entry.username.toLowerCase().includes(recipientAddress.value.toLowerCase())
  );
});

const selectAddress = (address: string) => {
  recipientAddress.value = encodeAddress(address, accountStore.getSs58Format);
};

const submitSendForm = () => {
  if (systemHealth.getSidechainSystemHealth.overall() !== Health.Healthy) {
    alert(
      "Sidechain health currently can't be assessed. Please wait for a green health indicator and try again"
    );
    return;
  }
  sendPrivately();
};

const sendPrivately = async () => {
  console.log("sending message on incognitee");
  txStatus.value = "⌛ sending message privately on incognitee";
  const amount = BigInt(0);
  const account = accountStore.account;
  if (
    accountStore.getDecimalBalanceTransferable(incogniteeSidechain.value) <
    3 * INCOGNITEE_TX_FEE
  ) {
    alert("Insufficient balance");
    return;
  }
  const encoder = new TextEncoder();
  const byteLength = encoder.encode(sendPrivateNote.value).length;
  // fixme: https://github.com/encointer/encointer-js/issues/123
  if (byteLength > 161) {
    alert(
      "Note is too long when encoded to UTF-8. Please keep it under 162 bytes."
    );
    return;
  }
  const note = sendPrivateNote.value.length > 0 ? sendPrivateNote.value : null;
  const nonce = new u32(
    new TypeRegistry(),
    accountStore.nonce[incogniteeSidechain.value]
  );
  console.log(
    `sending message from ${account.address} privately to ${recipientAddress.value} with nonce ${nonce} and note: ${note}`
  );

  await incogniteeStore.api
    .trustedBalanceTransfer(
      account,
      incogniteeStore.shard,
      incogniteeStore.fingerprint,
      accountStore.getAddress,
      recipientAddress.value,
      amount,
      note,
      {
        signer: accountStore.injector?.signer,
        nonce: nonce,
      }
    )
    .then((result) => handleTopResult(result, "😀 message sent successfully"))
    .catch((err) => handleTopError(err));
  //todo: manually inc nonce locally avoiding clashes with fetchIncogniteeBalance
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
      //update history to see successfuly action immediately
      props.updateNotes();
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

const scanResult = ref("No QR code data yet");
const onDecode = (decodeResult) => {
  console.log("QR scan decoded: " + decodeResult[0].rawValue);
  scanResult.value = decodeResult[0].rawValue;
  recipientAddress.value = decodeResult[0].rawValue;
  closeScanOverlay();
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

const props = defineProps({
  isMobile: {
    type: Boolean,
    required: true,
  },
  updateNotes: {
    type: Function,
    required: true,
  },
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
  max-width: 15ch;
  /* Maximale Länge: 10 Zeichen */
}

/* Für größere Bildschirme (ab 641px) */
@media (min-width: 641px) {
  .wallet-address {
    max-width: 15ch;
    /* Begrenze auch hier auf 10 Zeichen */
  }
}

.pointer-events-none {
  z-index: 50;
  /* Optional: Um sicherzustellen, dass es über anderen Elementen liegt */
}

.border-green-500 {
  border-color: #24ad7c;
}

.bg-gray-800 {
  background-color: #1f2937;
}

.text-white {
  color: #ffffff;
}

.truncate-input {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

h1 {
  font-size: 1em;
  /* Adjust as needed */
  font-weight: bold;
  /* Makes the text bold */
  color: #999;
  /* Change color as needed */
  text-align: center;
  /* Centers the text */
  margin-bottom: 20px;
  /* Adds space below the heading */
}

hr {
  border: none;
  border-top: 1px #222;
  /* Change color as needed */
  color: #111;
  /* Change color as needed */
  background-color: #333;
  /* Change color as needed */
  height: 1px;
  /* Adjust as needed */
}

.qrcode-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.form-container input {
  background-color: #333;
  color: #fff;
  /* You might want to change the text color to ensure it's readable against the dark background */
}

.form-container input#amount {
  font-size: 2em;
  /* Make the font size twice as large */
  text-align: center;
  /* Center the text */
  width: 50%;
  /* Reduce the width by 50% */
}

.spinner {
  border: 2px solid #f3f3f3;
  /* Light grey */
  border-top: 2px solid #3498db;
  /* Blue */
  border-radius: 50%;
  width: 1em;
  /* Adjust the size here */
  height: 1em;
  /* Adjust the size here */
  animation: spin 2s linear infinite;
  vertical-align: middle;
  /* Align with the text */
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
