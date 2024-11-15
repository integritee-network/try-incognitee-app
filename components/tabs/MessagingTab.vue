<template>
  <form class="mt-5" @submit.prevent="submitSendForm">
    <div class="flex flex-col">
      <label
        for="recipientAddress"
        class="text-sm font-medium leading-6 text-white text-left"
        >Recipient</label
      >
      <div class="relative flex items-center rounded-lg">
        <input
          id="recipientAddress"
          v-model="recipientAddress"
          type="text"
          required
          class="w-full text-sm rounded-lg flex-grow py-2 bg-cool-900 text-white placeholder-gray-500 border border-green-500 truncate-input pr-12"
          style="border-color: #24ad7c"
          placeholder="Recipient"
        />
        <div class="absolute right-3 flex space-x-2">
          <div @click="openScanOverlay" class="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <ul
        v-if="filteredLut.length"
        class="mt-10 absolute bg-white border border-gray-300 bg-gray-400 rounded-lg mt-1 w-full z-10"
      >
        <li
          v-for="entry in filteredLut.slice(0, 5)"
          :key="entry.address"
          @click="selectAddress(entry.address)"
          class="cursor-pointer p-2 hover:bg-gray-200"
        >
          {{ entry.username }}
        </li>
      </ul>
    </div>

    <!-- Messages -->
    <div class="flex flex-col">
      <label
        for="paymentNote"
        class="text-sm font-medium leading-6 text-white text-left"
        >Message</label
      >
      <div class="relative flex items-center rounded-lg">
        <textarea
          id="messages"
          v-model="sendPrivateNote"
          rows="2"
          ref="messageTextarea"
          name="messages"
          required
          placeholder="Enter a private note for the recipient"
          :minlength="1"
          :maxlength="140"
          class="w-full text-sm rounded-lg flex-grow py-2 bg-cool-900 text-white placeholder-gray-500 border border-green-500 truncate-input pr-12"
        ></textarea>
      </div>
    </div>

    <div class="mt-8 bottom-0 left-0 w-full bg-gray-800">
      <button
        type="submit"
        class="btn btn_gradient inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm"
      >
        Send Privately
      </button>
    </div>
    <p>
      <i
        >please be aware that message retention time does not guarantee
        delivery. Messages are automatically purged in FIFO manner when the
        buffer limit is reached</i
      >
    </p>
    <div>{{ txStatus }}</div>
  </form>
  <PrivateMessageHistory :show="true" />
  <!-- Scan QR -->
  <OverlayDialog
    :show="showScanOverlay"
    :close="closeScanOverlay"
    title="Scan recipient's QR code"
  >
    <div class="mt-6 qrcode-container">
      <qrcode-stream @detect="onDecode"></qrcode-stream>
    </div>
  </OverlayDialog>
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

const recipientAddress = ref("");
const sendPrivateNote = ref("");
const txStatus = ref("");
const accountStore = useAccount();
const incogniteeStore = useIncognitee();
const systemHealth = useSystemHealth();

const pollCounter = useInterval(2000);
watch(pollCounter, async () => {
  console.debug("polling for new incognitee notes");
  await props.updateNotes();
});

const lut = ref([
  {
    username: "alice",
    address: "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
  },
  {
    username: "bob",
    address: "5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty",
  },
  {
    username: "charlie",
    address: "5FLSigC9HGRKVhB9FiEo4Y3koPsNmBmLJbpXg2mp1hXcS59Y",
  },
  {
    username: "tester",
    address: "5F4m4au63SbgSdRoF5wPetF9VQaNDDN9kfqQNre9py3x6Smy",
  },
  {
    username: "tester2",
    address: "5DqArikbjsXqZq2UfSRENBrMg3Eadhu2bhdi4M4dGjKtnYwd",
  },
]);

const filteredLut = computed(() => {
  if (!recipientAddress.value) return [];
  return lut.value.filter((entry) =>
    entry.username.toLowerCase().includes(recipientAddress.value.toLowerCase()),
  );
});

const selectAddress = (address: string) => {
  recipientAddress.value = encodeAddress(address, accountStore.getSs58Format);
};

const submitSendForm = () => {
  if (systemHealth.getSidechainSystemHealth.overall() !== Health.Healthy) {
    alert(
      "Sidechain health currently can't be assessed. Please wait for a green health indicator and try again",
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
    `sending message from ${account.address} privately to ${recipientAddress.value} with nonce ${nonce} and note: ${note}`,
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
      },
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
  font-size: 1em; /* Adjust as needed */
  font-weight: bold; /* Makes the text bold */
  color: #999; /* Change color as needed */
  text-align: center; /* Centers the text */
  margin-bottom: 20px; /* Adds space below the heading */
}

hr {
  border: none;
  border-top: 1px #222; /* Change color as needed */
  color: #111; /* Change color as needed */
  background-color: #333; /* Change color as needed */
  height: 1px; /* Adjust as needed */
}

.qrcode-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.form-container input {
  background-color: #333;
  color: #fff; /* You might want to change the text color to ensure it's readable against the dark background */
}

.form-container input#amount {
  font-size: 2em; /* Make the font size twice as large */
  text-align: center; /* Center the text */
  width: 50%; /* Reduce the width by 50% */
}

.spinner {
  border: 2px solid #f3f3f3; /* Light grey */
  border-top: 2px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 1em; /* Adjust the size here */
  height: 1em; /* Adjust the size here */
  animation: spin 2s linear infinite;
  vertical-align: middle; /* Align with the text */
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
