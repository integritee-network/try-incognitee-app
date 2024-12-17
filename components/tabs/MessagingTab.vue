<template>
  <div v-if="show">
    <!-- Overlay Start -->
    <div
      v-if="showStartOverlay"
      class="fixed inset-0 bg-gray-[#000000bd] bg-opacity-75 flex items-center justify-center z-50"
    >
      <div
        class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md shadow-lg max-w-lg"
      >
        <div class="flex items-start">
          <div class="shrink-0">
            <svg
              class="size-5 text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="ml-3">
            <p class="text-sm text-yellow-700">
              Please be aware that message retention time does not guarantee
              delivery. Messages are automatically purged in FIFO manner when
              the buffer limit is reached
            </p>
          </div>
          <div class="ml-auto">
            <button
              @click="closeStartOverlay"
              class="text-yellow-400 hover:text-yellow-600 focus:outline-none"
              aria-label="Close"
            >
              <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Overlay End -->

    <div class="bg-incognitee-blue text-white flex">
      <!-- Form starts here -->

      <!-- Sidebar -->
      <div
        v-if="!isMobile || !showChatDetail"
        :class="isMobile ? 'w-full' : 'md:w-1/3'"
        class="bg-incognitee-blue border-r border-gray-700 flex flex-col"
      >
        <div class="px-4 py-4 flex items-center justify-between">
          <!-- Sidebar-Button -->
          <button
            @click="eventBus.emit('toggleSidebar')"
            class="lg:hidden text-white focus:outline-none text-2xl"
          >
            ☰
          </button>
          <!-- Linksbündiger Titel -->
          <div
            class="title text-2xl font-bold tracking-tight text-white sm:text-2xl"
          >
            Chats
          </div>

          <!-- Rechtsbündiges "Neue Nachricht" Icon -->
          <!-- Button zum Öffnen des Overlays -->
          <button
            @click="openNewRecipientOverlay"
            class="text-gray-400 rounded"
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <span class="sr-only">Start ne chat</span>
          </button>
        </div>
        <!-- Recipient Address Input -->
        <!--
          <div class="relative flex items-center rounded-lg px-4 py-2">
            <input
              id="search"
              v-model="search"
              type="text"
              class="w-full text-sm rounded-lg flex-grow bg-cool-900 text-white placeholder-gray-500 border border-transparent hover:border-incognitee-green focus:border-incognitee-blue truncate-input"
              placeholder="Search..."
            />
          </div>
          -->
        <!-- Message List -->
        <div class="overflow-y-auto flex-1">
          <div class="space-y-1 px-4">
            <div v-if="isInitializing" class="spinner"></div>
            <div
              v-if="noteStore.getConversationCounterparties.length === 0"
              class="mt-5 flex justify-center text-gray-500"
            >
              <button @click="fetchOlderBucket">
                query recent chats
                {{ accountStore.hasInjector ? "(needs signature)" : "" }}
              </button>
              <div v-if="isUpdatingNotes" class="spinner"></div>
            </div>
            <div
              v-for="(
                counterparty, index
              ) in noteStore.getConversationCounterparties"
              :key="index"
              class="relative flex items-center"
            >
              <div
                class="flex-1 p-3 pl-5 rounded-lg hover:text-black hover:bg-gray-600 cursor-pointer"
                :class="{
                  'bg-gray-700': counterparty !== conversationAddress,
                  'bg-gray-500': counterparty === conversationAddress,
                }"
                @click="openChat(counterparty)"
              >
                <div class="flex justify-between items-center">
                  <div v-if="maybeUsername(counterparty)">
                    <div class="wallet-address text-sm font-bold text-white">
                      {{ maybeUsername(counterparty) }}
                    </div>
                    <p class="wallet-address text-xs text-gray-400">
                      {{ counterparty }}
                    </p>
                  </div>
                  <div
                    v-else
                    class="wallet-address text-sm font-bold text-white"
                  >
                    {{ counterparty }}
                  </div>
                  <!--<span class="text-xs text-gray-300">
                    {{
                      formatDate(
                        noteStore.getMessagesWith(counterparty)?.[0]
                          ?.timestamp || "",
                      )
                    }}
                  </span>-->
                </div>
                <!-- Letzte Nachricht -->
                <!--<p class="text-gray-300 text-xs line-clamp-2 mt-1">
                  {{ noteStore.getMessagesWith(counterparty)?.[0]?.note || "" }}
                </p>-->
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Chat window -->
      <div
        v-if="!isMobile || showChatDetail"
        :class="isMobile ? 'w-full' : 'md:w-2/3'"
        class="bg-incognitee-blue flex flex-col h-screen relative"
        :style="{ height: chatWindowHeight }"
      >
        <!-- Header -->
        <div
          class="px-4 py-4 flex justify-between items-center border-b border-gray-700"
        >
          <button
            v-if="isMobile"
            @click="closeChat"
            class="text-white text-sm font-medium"
          >
            ← Back
          </button>
          <h2 class="text-lg font-bold">
            {{
              recipientValid(conversationAddress)
                ? (maybeUsername(conversationAddress) || "") +
                  " " +
                  (isMobile
                    ? conversationAddress.slice(0, 10) + "..." // Mobile: Abgekürzt
                    : conversationAddress) // Desktop: Vollständige Adresse
                : "Chat"
            }}
          </h2>
        </div>
        <!-- Chat Messages -->
        <div class="flex-1 overflow-y-auto" style="height: calc(100vh - 12rem)">
          <div
            v-if="eventHorizon"
            class="my-5 mx-5 flex text-center text-xs text-gray-500"
          >
            messages before {{ formatMoment(eventHorizon) }} have been purged
            from Incognitee state. more recent messages can be polled in batches
          </div>
          <div
            v-if="unfetchedBucketsCount > 0"
            class="my-5 mx-5 flex text-center text-xs text-gray-500"
          >
            <button @click="fetchOlderBucket">
              query more messages
              {{
                accountStore.hasInjector
                  ? "(needs signature in extension)"
                  : ""
              }}: fetch older batch {{ bucketsCount - unfetchedBucketsCount }} /
              {{ bucketsCount }}
            </button>
            <div v-if="isUpdatingNotes" class="spinner"></div>
          </div>
          <PrivateMessageHistory
            :show="true"
            :counterparty="conversationAddress"
          />
        </div>
        <!-- Input Box -->
        <div
          v-if="recipientValid(conversationAddress)"
          class="border-t border-gray-700 bg-gray-800 absolute bottom-0 left-0 right-0 z-10"
        >
          <div class="flex items-center bg-gray-800 px-4 py-2">
            <form class="flex w-full" @submit.prevent="submitSendForm">
              <div class="relative w-full">
                <textarea
                  id="newMessage"
                  v-model="sendPrivateNote"
                  rows="1"
                  maxlength="140"
                  name="newMessage"
                  required
                  placeholder="Enter message"
                  class="w-full text-sm rounded-lg py-2 pr-12 bg-cool-900 text-white placeholder-gray-500 border border-transparent hover:border-incognitee-green focus:border-incognitee-blue"
                ></textarea>
                <!-- Zeichen-Counter -->
                <div
                  class="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 text-xs"
                >
                  {{ sendPrivateNote.length }}/140
                </div>
              </div>
              <!-- Senden-Button -->
              <button
                type="submit"
                class="ml-4 text-gray-400 hover:text-gray-300 flex-shrink-0"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
                  <path
                    fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

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

    <!-- New Message -->
    <OverlayDialog
      :show="showNewRecipientOverlay"
      :close="closeNewRecipientOverlay"
      title="Chat With"
    >
      <!-- Recipient Address Input -->
      <div class="flex flex-col gap-4 container mb-4">
        <div class="relative flex items-center rounded-lg mt-10">
          <input
            id="conversationAddress"
            v-model="conversationAddress"
            type="text"
            required
            class="w-full text-sm rounded-lg py-2 bg-cool-900 text-white placeholder-gray-500 border border-transparent hover:border-incognitee-green focus:border-incognitee-blue pr-12"
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
        <div v-if="filteredLut.length">
          <div class="text-sm font-bold mb-3">Select contact</div>
          <ul
            class="z-10 text-sm max-h-60 w-full overflow-auto bg-gray-800 text-gray-400"
          >
            <li
              v-for="entry in filteredLut.slice(0, 5)"
              :key="entry.address"
              @click="selectAddress(entry.address)"
              class="cursor-pointer rounded-md py-1 hover:text-white hover:bg-gray-700"
            >
              {{ entry.username }}
            </li>
          </ul>
        </div>
      </div>
    </OverlayDialog>

    <!-- Global notification live region -->
    <div
      v-if="showNotification"
      aria-live="assertive"
      class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
    >
      <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
        <!-- Notification panel -->
        <div
          class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black/5 transition transform ease-out duration-300"
        >
          <div class="p-4">
            <div class="flex items-center">
              <div class="flex w-0 flex-1 justify-between">
                <div class="text-black">{{ txStatus }}</div>
              </div>
              <div class="ml-4 flex shrink-0">
                <button
                  @click="closeNotification"
                  type="button"
                  class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span class="sr-only">Close</span>
                  <svg
                    class="size-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"
                    />
                  </svg>
                </button>
              </div>
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
import { eventBus } from "@/helpers/eventBus";
import { INCOGNITEE_TX_FEE } from "~/configs/incognitee";
import { Health, useSystemHealth } from "~/store/systemHealth";
import { TypeRegistry, u32 } from "@polkadot/types";
import { defineProps, ref, watch, computed, onMounted, onUnmounted } from "vue";
import { useAccount } from "~/store/account";
import { useIncognitee } from "~/store/incognitee";
import OverlayDialog from "~/components/overlays/OverlayDialog.vue";
import { QrcodeStream } from "vue-qrcode-reader";
import { useInterval } from "@vueuse/core";
import { decodeAddress, encodeAddress } from "@polkadot/util-crypto";
import { identities as polkadotPeopleIdentities } from "@/lib/polkadotPeopleIdentities";
import { identities as wellKnownIdentities } from "@/lib/wellKnownIdentites";
import { formatMoment } from "@/helpers/date";
import { useNotes } from "@/store/notes.ts";
import { Note, NoteDirection } from "@/lib/notes";
import { divideBigIntToFloat } from "@/helpers/numbers";
import NoteDetailsOverlay from "~/components/overlays/NoteDetailsOverlay.vue";
import { SessionProxyRole } from "~/lib/sessionProxyStorage";

const identityLut = [...polkadotPeopleIdentities, ...wellKnownIdentities];

// Control overlay visibility
const showStartOverlay = ref(false);

// Close overlay function
const closeStartOverlay = () => {
  showStartOverlay.value = false;
};

const chatWindowHeight = ref("calc(100vh - 12rem)");

const adjustChatWindowHeight = () => {
  const viewportHeight = window.innerHeight;
  chatWindowHeight.value = `${viewportHeight}px`;
};
// Ensure overlay is shown on reload
onMounted(() => {
  showStartOverlay.value = false;
  window.addEventListener("resize", adjustChatWindowHeight);
  adjustChatWindowHeight();
});

onUnmounted(() => {
  window.removeEventListener("resize", adjustChatWindowHeight);
});

// Reaktive Variable für das Overlay
const showNewRecipientOverlay = ref(false);

// Öffnen des Overlays
const openNewRecipientOverlay = () => {
  conversationAddress.value = "";
  showNewRecipientOverlay.value = true;
};

// Schließen des Overlays
const closeNewRecipientOverlay = () => {
  if (conversationAddress.value.length > 0) {
    showChatDetail.value = true;
  }
  showNewRecipientOverlay.value = false;
};

const showChatDetail = ref(false);

const openChat = (counterparty) => {
  conversationAddress.value = counterparty;
  showChatDetail.value = true;
};

const closeChat = () => {
  showChatDetail.value = false;
};

// Reaktive Variable für die Steuerung des Banners
const showMsgBanner = ref(true);

// Funktion zum Schließen des Banners
const dismissMsgBanner = () => {
  showMsgBanner.value = false; // Verstecke das Banner
};

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

const conversationAddress = ref("");
const sendPrivateNote = ref("");
const txStatus = ref("");
const accountStore = useAccount();
const incogniteeStore = useIncognitee();
const systemHealth = useSystemHealth();
const isInitializing = ref(true);

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
  try {
    await props.updateNotes();
    isInitializing.value = false;
    if (
      conversationAddress.value === "" &&
      showNewRecipientOverlay.value === false &&
      noteStore.getConversationCounterparties.length > 0
    ) {
      conversationAddress.value = noteStore.getConversationCounterparties[0];
      showChatDetail.value = true;
    }
  } catch (error) {
    console.warn("error fetching incognitee notes: " + error);
  }
});

watch(isInitializing, () => {
  const counterparties = noteStore.getConversationCounterparties;
  if (counterparties.length > 0) {
    conversationAddress.value = counterparties[0];
    showChatDetail.value = true;
  }
});

const filteredLut = computed(() => {
  if (!conversationAddress.value) return [];
  return identityLut.filter((entry) =>
    entry.username
      .toLowerCase()
      .includes(conversationAddress.value.toLowerCase()),
  );
});

const maybeUsername = (address: string) => {
  const entry = identityLut.find((entry) => entry.address === address);
  return entry?.username;
};

const selectAddress = (address: string) => {
  conversationAddress.value = encodeAddress(
    address,
    accountStore.getSs58Format,
  );
  closeNewRecipientOverlay();
};

const recipientValid = (recipient: string): boolean => {
  try {
    decodeAddress(recipient);
    return true;
  } catch (error) {
    return false;
  }
};
// Watcher to close overlay when a valid address is entered
watch(conversationAddress, (newAddress) => {
  console.log("eventHorizon is " + props.eventHorizon);
  if (showNewRecipientOverlay.value && recipientValid(newAddress)) {
    conversationAddress.value = encodeAddress(
      conversationAddress.value,
      accountStore.getSs58Format,
    );
    closeNewRecipientOverlay();
  }
});

const submitSendForm = () => {
  if (systemHealth.getSidechainSystemHealth.overall() !== Health.Healthy) {
    alert(
      "Sidechain health currently can't be assessed. Please wait for a green health indicator and try again",
    );
    return;
  }
  sendPrivately();

  // Reset the input field
  sendPrivateNote.value = "";
};

const sendPrivately = async () => {
  console.log("sending message on incognitee");
  txStatus.value = "⌛ Sending message privately on incognitee";
  const account = accountStore.account;
  if (
    accountStore.getDecimalBalanceTransferable(incogniteeSidechain.value) <
    3 * INCOGNITEE_TX_FEE
  ) {
    txStatus.value = "";
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
    `sending message from ${account.address} privately to ${conversationAddress.value} with nonce ${nonce} and note: ${note}`,
  );

  await incogniteeStore.api
    .trustedSendNote(
      account,
      incogniteeStore.shard,
      incogniteeStore.fingerprint,
      accountStore.getAddress,
      conversationAddress.value,
      note,
      {
        signer: accountStore.injector?.signer,
        delegate: accountStore.sessionProxyForRole(
          SessionProxyRole.NonTransfer,
        ),
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
      //update history to see successful action immediately
      props.updateNotes();
      return;
    }
    if (result.status.isInvalid) {
      txStatus.value = "😞 Invalid (unspecified reason)";
      return;
    }
  }
  console.error(`unknown result: ${result}`);
  txStatus.value = "😞 Unknown result";
};

const handleTopError = (err) => {
  console.error(`error: ${err}`);
  txStatus.value = `😞 Submission failed: ${err}.`;
};

const scanResult = ref("No QR code data yet");
const onDecode = (decodeResult) => {
  console.log("QR scan decoded: " + decodeResult[0].rawValue);
  scanResult.value = decodeResult[0].rawValue;
  conversationAddress.value = decodeResult[0].rawValue;
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
  show: {
    type: Boolean,
    required: true,
  },
  isMobile: {
    type: Boolean,
    required: true,
  },
  updateNotes: {
    type: Function,
    required: true,
  },
  isUpdatingNotes: {
    type: Boolean,
    required: true,
  },
  fetchOlderBucket: {
    type: Function,
    required: true,
  },
  eventHorizon: {
    type: Number,
    required: true,
  },
  bucketsCount: { type: Number, required: true },
  unfetchedBucketsCount: { type: Number, required: true },
});
// Reactive variable for the input text
const inputText = ref("");
</script>

<style scoped>
textarea {
  resize: none;
  /* Disable resizing for better layout control */
}

.relative {
  position: relative;
  /* Ensure the counter is positioned relative to the input */
}

.bg-opacity-75 {
  background-color: rgba(0, 0, 0, 0.828);
}

.fixed {
  z-index: 50;
  /* Ensure overlay is on top */
}

.pointer-events-none {
  pointer-events: none;
}

/* Für Webkit-basierte Browser (Chrome, Safari, Edge) */
::-webkit-scrollbar {
  width: 5px;
  /* Breite der Scrollbar */
}

::-webkit-scrollbar-track {
  background: #1f293700;
  /* Hintergrund des Tracks */
}

::-webkit-scrollbar-thumb {
  background-color: #4b556300;
  /* Farbe der Scrollbar */
  border-radius: 6px;
  /* Runde Ecken */
  border: 3px solid #1f2937;
  /* Abstand zur Scrollspur */
}

/* Für Firefox */
* {
  scrollbar-width: thin;
  /* Dünne Scrollbar */
  scrollbar-color: #4b5563 #1f293700;
  /* Daumen- und Trackfarben */
}

/* Optional: Hover-Effekt auf der Scrollbar */
::-webkit-scrollbar-thumb:hover {
  background-color: #6b7280;
  /* Hover-Farbe der Scrollbar */
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
    max-width: 10ch;
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
