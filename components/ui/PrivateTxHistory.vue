<template>
  <div v-if="show">
    <div class="mt-10 flex justify-between items-center">
      <div
        class="title text-2xl font-bold tracking-tight text-white sm:text-2xl"
      >
        History
      </div>
    </div>

    <div class="mb-10">
      <div class="mt-6 overflow-hidden bg-gray-900 rounded-md">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <table class="w-full text-left">
              <tbody>
                <tr
                  v-for="(note, index) in noteStore.getFinancialNotes('all')"
                  :key="index"
                >
                  <td class="relative py-5 pr-6">
                    <div class="flex gap-x-6">
                      <div v-if="note.direction === NoteDirection.Incoming">
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="size-5 text-gray-400"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <div v-else>
                        <svg
                          class="h-6 w-5 flex-none text-gray-400 sm:block"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          data-slot="icon"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-.75-4.75a.75.75 0 0 0 1.5 0V8.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0L6.2 9.74a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <div class="flex-auto">
                        <div class="flex items-start gap-x-3">
                          <div class="text-sm/6 font-medium text-white">
                            {{ note.category }}
                          </div>
                        </div>
                        <div
                          class="mt-1 text-xs/5 text-gray-500 wallet-address whitespace-nowrap"
                        >
                          {{ displayAccount(note.account) }}
                        </div>
                      </div>
                    </div>
                    <div
                      class="absolute right-full bottom-0 h-px w-screen bg-gray-50/20"
                    ></div>
                    <div
                      class="absolute bottom-0 left-0 h-px w-screen bg-gray-50/20"
                    ></div>
                  </td>
                  <td class="py-5 pr-6 sm:table-cell">
                    <div
                      v-if="note.amount"
                      class="text-sm/6 font-medium text-white"
                    >
                      {{
                        note.direction === NoteDirection.Incoming ? "+" : "-"
                      }}
                      {{
                        formatDecimalBalance(
                          divideBigIntToFloat(
                            note.amount,
                            10 ** accountStore.getDecimals(note.asset),
                          ),
                        )
                      }}
                      {{
                        note.asset
                          ? unifyAssetIdDisplay(note.asset)
                          : accountStore.getSymbol(null)
                      }}
                    </div>
                    <time class="mt-1 text-xs/5 text-gray-500">{{
                      formatDate(note.timestamp)
                    }}</time>
                  </td>
                  <td class="py-5 text-right">
                    <div v-if="note.note?.length > 0" class="flex justify-end">
                      <svg
                        @click="openViewMore(note)"
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
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="mt-5 flex text-xs font-bold justify-center text-white">
        <div
          v-if="eventHorizon && unfetchedBucketsCount === 0"
          class="my-5 mx-5 flex text-center text-blue justify-center text-xs text-gray-500"
        >
          events before {{ formatMoment(eventHorizon) }} have been purged from
          Incognitee state.
        </div>
        <div
          v-if="unfetchedBucketsCount > 0"
          class="my-5 mx-5 flex text-center justify-center text-xs text-gray-500"
        >
          <div
            @click="fetchOlderBucket"
            class="flex items-center cursor-pointer text-blue"
          >
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              class="w-3 h-3 text-blue-600 mr-2"
            >
              <path
                fill-rule="evenodd"
                d="M13.836 2.477a.75.75 0 0 1 .75.75v3.182a.75.75 0 0 1-.75.75h-3.182a.75.75 0 0 1 0-1.5h1.37l-.84-.841a4.5 4.5 0 0 0-7.08.932.75.75 0 0 1-1.3-.75 6 6 0 0 1 9.44-1.242l.842.84V3.227a.75.75 0 0 1 .75-.75Zm-.911 7.5A.75.75 0 0 1 13.199 11a6 6 0 0 1-9.44 1.241l-.84-.84v1.371a.75.75 0 0 1-1.5 0V9.591a.75.75 0 0 1 .75-.75H5.35a.75.75 0 0 1 0 1.5H3.98l.841.841a4.5 4.5 0 0 0 7.08-.932.75.75 0 0 1 1.025-.273Z"
                clip-rule="evenodd"
              />
            </svg>
            {{
              accountStore.hasInjector &&
              accountStore.sessionProxyForRole(SessionProxyRole.ReadAny) ===
                null
                ? "load older events (needs signature in extension. Add session key to automate!)"
                : "loading older events"
            }}
            ({{ bucketsCount - unfetchedBucketsCount }} /
            {{ bucketsCount }} buckets)
          </div>
          <div v-if="isUpdatingNotes" class="spinner ml-4"></div>
        </div>
      </div>
    </div>
  </div>
  <NoteDetailsOverlay
    :show="showViewMore"
    :note="showNote"
    :close="closeViewMore"
  />
</template>

<script setup lang="ts">
import { formatDate, formatMoment } from "@/helpers/date";
import { computed, defineProps, ref } from "vue";
import { useAccount } from "@/store/account.ts";
import { useNotes } from "@/store/notes.ts";
import { encodeAddress } from "@polkadot/util-crypto";
import { Note, NoteDirection } from "@/lib/notes";
import { divideBigIntToFloat, formatDecimalBalance } from "@/helpers/numbers";
import NoteDetailsOverlay from "~/components/overlays/NoteDetailsOverlay.vue";
import { identities as wellKnownIdentities } from "@/lib/wellKnownIdentites";
import { SessionProxyRole } from "~/lib/sessionProxyStorage";
import { asset } from "@/lib/environmentConfig";
import { unifyAssetIdDisplay } from "../../configs/assets";
//const identityLut = [...polkadotPeopleIdentities, ...wellKnownIdentities];
const identityLut = wellKnownIdentities;

const accountStore = useAccount();
const noteStore = useNotes();

const displayAccount = computed(() => (account: string | null) => {
  if (account == null || account === accountStore.getAddress) {
    return "You";
  }
  try {
    const pdotAddress = encodeAddress(account, 0);
    const identity = identityLut.find((i) => i.address === pdotAddress);
    return identity ? identity.username + " " + account : account;
  } catch (e) {
    console.warn("could not decode address", account);
    return "unknown";
  }
});

const props = defineProps({
  show: {
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
  isUpdatingNotes: {
    type: Boolean,
    required: true,
  },
});

const showNote = ref<Note>(null);
const showViewMore = ref(false);
const openViewMore = (note: Note) => {
  showNote.value = note;
  showViewMore.value = true;
};
const closeViewMore = () => {
  showViewMore.value = false;
};
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

.text-blue {
  color: #2563eb;
}

textarea {
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  resize: none;
  /* Verhindert manuelles Ändern der Größe */
}

.currency-box {
  position: relative;
  outline: none;
  /* Keine Outline standardmäßig */
}

.currency-box:hover {
  outline: 2px solid var(--incognitee-green);
  /* Verwende outline statt border */
}

.text-overflow {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
