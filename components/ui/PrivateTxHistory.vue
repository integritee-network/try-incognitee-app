<template>
  <div v-if="show" class="mt-10 flex justify-between items-center">
    <div class="title text-2xl font-bold tracking-tight text-white sm:text-2xl">
      History
    </div>
    <button
      @click="fetchNoteBucketsInfo"
      type="button"
      class="btn btn_gradient inline-flex items-center gap-x-1.5 rounded-md px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      fetch buckets
    </button>
    <button
      @click="fetchIncogniteeNotes"
      type="button"
      class="btn btn_gradient inline-flex items-center gap-x-1.5 rounded-md px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      fetch notes
    </button>
  </div>
  <div class="mb-10">
    <!-- Neuer Abschnitt, der nur angezeigt wird, wenn der "Private Balance" Tab aktiv ist -->
    <div v-if="show" class="flex-1 overflow-y-auto bg-gray-900 mt-5 rounded-md">
      <table class="w-full whitespace-nowrap text-left">
        <tbody class="divide-y divide-white/10">
          <tr
            v-for="(note, index) in allNotes"
            :key="index"
            class="flex justify-between"
          >
            <!-- Linksbündige Zelle mit Icon, Text und "New"-Badge -->
            <td
              class="flex items-center gap-x-4 py-4 pl-4 pr-8 text-left sm:pl-6 lg:pl-8"
            >
              <!-- Pfeil-SVG für Incoming Transfer -->
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
              <div class="flex flex-col">
                <div class="flex items-start gap-x-3">
                  <div class="text-sm font-medium text-white">
                    {{ note.category }}
                  </div>
                  <!-- "New" Badge für Desktop und grüner Punkt für Mobile -->
                  <!--
                <div
                  class="hidden sm:block rounded-md bg-green-700 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-green-600/20"
                >
                  New
                </div>
                <div
                  class="sm:hidden rounded-full bg-green-500 w-2 h-2"
                ></div>
                -->
                  <!-- Grüner Punkt für mobile Ansicht -->
                </div>
                <div
                  class="wallet-address mt-1 text-xs text-gray-500 whitespace-nowrap"
                >
                  {{ note.account }}
                </div>
              </div>
            </td>

            <!-- Rechtsbündige Zelle für TEER Betrag und Datum -->
            <td
              class="flex flex-col items-end py-4 pr-4 text-right text-sm text-white sm:pr-6 lg:pr-8"
            >
              <div v-if="note.amount" class="text-sm font-medium text-white">
                {{ note.direction === NoteDirection.Incoming ? "+" : "-" }}
                {{
                  divideBigIntToFloat(
                    note.amount,
                    10 ** accountStore.getDecimals,
                  )
                }}
                TEER
              </div>
              <time class="mt-1 text-xs text-gray-500">{{
                formatDate(note.timestamp)
              }}</time>
            </td>
            <td
              class="hidden py-4 pl-0 pr-4 text-right text-sm/6 text-white sm:table-cell sm:pr-6 lg:pr-8"
            >
              <div v-if="note.note?.length > 0">
                <button
                  @click="openViewMore(note)"
                  type="button"
                  class="hidden sm:inline btn btn_gradient rounded sm:px-2 sm:py-1 text-xs font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Note
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- this is necessary to avoid the footer overlapping the text -->
    <br /><br /><br /><br /><br /><br /><br />
  </div>
  <NoteDetailsOverlay
    :show="showViewMore"
    :note="showNote"
    :close="closeViewMore"
  />
</template>

<script setup lang="ts">
import { formatMoment, formatDate } from "@/helpers/date";
import { ref, defineProps } from "vue";
import { useIncognitee } from "@/store/incognitee.ts";
import { useAccount } from "@/store/account.ts";
import { Note, NoteDirection } from "@/lib/notes";
import { divideBigIntToFloat, formatDecimalBalance } from "@/helpers/numbers";
import { encodeAddress } from "@polkadot/util-crypto";
import NoteDetailsOverlay from "@/components/ui/NoteDetailsOverlay.vue";

const accountStore = useAccount();
const incogniteeStore = useIncognitee();

const getterMap: { [address: string]: any } = {};
const disableGetter = ref(false);
const noteBucketsInfo = ref(null);
const allNotes = ref<Note[]>([]);

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
});

const fetchNoteBucketsInfo = async () => {
  if (!incogniteeStore.apiReady) return;
  console.log("fetch note buckets info");
  const getter = incogniteeStore.api.noteBucketsInfoGetter(
    incogniteeStore.shard,
  );
  await getter.send().then((info) => {
    console.log(`note buckets info: ${info}`);
    noteBucketsInfo.value = info;
  });
};

const fetchIncogniteeNotes = async () => {
  if (!incogniteeStore.apiReady) return;
  if (!accountStore.account) return;

  if (disableGetter.value == true) {
    console.log(
      "[fetchIncogniteeNotes] getter disabled. reconnect your account to enable again...",
    );
    return;
  }
  const mapKey = "notesFor:" + accountStore.account;
  const injector = accountStore.hasInjector ? accountStore.injector : null;
  const bucket_id = noteBucketsInfo.value?.last.unwrap().index;
  try {
    if (!getterMap[mapKey]) {
      if (injector) {
        console.debug(
          `fetching incognitee notes needs signing in extension: ${injector.name}`,
        );
      }

      getterMap[mapKey] = await incogniteeStore.api.notesForTrustedGetter(
        accountStore.account,
        bucket_id,
        incogniteeStore.shard,
        { signer: injector?.signer },
      );
    } else {
      console.debug(`fetching incognitee notes using cached getter`);
    }
  } catch (e) {
    // this will be the case if we click on cancel in the extension popup.
    console.error(e);
    disableGetter.value = true;
    return;
  }

  await getterMap[mapKey]
    .send()
    .then((notes) => {
      console.log(
        `notes for ${accountStore.getAddress} on shard ${incogniteeStore.shard} in bucket ${bucket_id}:`,
      );
      allNotes.value = [];
      for (const note of notes) {
        if (note.note.isSuccessfulTrustedCall) {
          const call = incogniteeStore.api.createType(
            "IntegriteeTrustedCall",
            note.note.asSuccessfulTrustedCall,
          );
          if (call.isBalanceShield) {
            const typedCall = call.asBalanceShield;
            console.log(
              `[${formatMoment(note.timestamp.toNumber())}] balance shield: ${typedCall}`,
            );
            allNotes.value.push({
              category: "Shield",
              direction: NoteDirection.Incoming,
              account: typedCall[1],
              amount: BigInt(typedCall[2]),
              timestamp: new Date(note.timestamp.toNumber()),
              note: null,
            });
          } else if (call.isBalanceUnshield) {
            const typedCall = call.asBalanceUnshield;
            console.log(
              `[${formatMoment(note.timestamp.toNumber())}] balance unshield: ${typedCall}`,
            );
            const to = encodeAddress(typedCall[1], accountStore.getSs58Format);
            allNotes.value.push({
              category: "Unshield",
              direction: NoteDirection.Outgoing,
              account: to,
              amount: BigInt(typedCall[2]),
              timestamp: new Date(note.timestamp.toNumber()),
              note: null,
            });
          } else if (call.isBalanceTransfer) {
            const typedCall = call.asBalanceTransfer;
            console.log(
              `[${formatMoment(note.timestamp.toNumber())}] balance transfer: ${typedCall}`,
            );
            const from = encodeAddress(
              typedCall[0],
              accountStore.getSs58Format,
            );
            const to = encodeAddress(typedCall[1], accountStore.getSs58Format);
            if (from === accountStore.getAddress) {
              allNotes.value.push({
                category: "Outgoing Transfer",
                direction: NoteDirection.Outgoing,
                account: to,
                amount: BigInt(typedCall[2]),
                timestamp: new Date(note.timestamp.toNumber()),
                note: null,
              });
            } else if (to === accountStore.getAddress) {
              allNotes.value.push({
                category: "Incoming Transfer",
                direction: NoteDirection.Incoming,
                account: from,
                amount: BigInt(typedCall[2]),
                timestamp: new Date(note.timestamp.toNumber()),
                note: null,
              });
            } else {
              console.error(
                `[${formatMoment(note.timestamp.toNumber())}] unknown relation to transfer: ${typedCall}`,
              );
            }
          } else if (call.isBalanceTransferWithNote) {
            const typedCall = call.asBalanceTransferWithNote;
            console.log(
              `[${formatMoment(note.timestamp.toNumber())}] balance transfer with note: ${typedCall}`,
            );
            const from = encodeAddress(
              typedCall[0],
              accountStore.getSs58Format,
            );
            const to = encodeAddress(typedCall[1], accountStore.getSs58Format);
            if (from === accountStore.getAddress) {
              allNotes.value.push({
                category: "Outgoing Transfer*",
                direction: NoteDirection.Outgoing,
                account: to,
                amount: BigInt(typedCall[2]),
                timestamp: new Date(note.timestamp.toNumber()),
                note: typedCall[3].toString(),
              });
            } else if (to === accountStore.getAddress) {
              allNotes.value.push({
                category: "Incoming Transfer",
                direction: NoteDirection.Incoming,
                account: from,
                amount: BigInt(typedCall[2]),
                timestamp: new Date(note.timestamp.toNumber()),
                note: typedCall[3].toString(),
              });
            } else {
              console.error(
                `[${formatMoment(note.timestamp.toNumber())}] unknown relation to transfer: ${typedCall}`,
              );
            }
          } else if (call.isGuessTheNumber) {
            const typedCall = call.asGuessTheNumber.asGuess;
            console.log(
              `[${formatMoment(note.timestamp.toNumber())}] guess the number: ${typedCall}`,
            );
            allNotes.value.push({
              category: `Submit Guess (${typedCall[1]})`,
              direction: NoteDirection.None,
              account: null,
              amount: null,
              timestamp: new Date(note.timestamp.toNumber()),
              note: null,
            });
          } else {
            console.error(
              `[${formatMoment(note.timestamp.toNumber())}] unknown call: ${call}`,
            );
          }
        }
      }
    })
    .catch((err) => {
      console.error(`[fetchIncogniteeNotes] error ${err}`);
    });
  // sort descending by timestamp
  allNotes.value = allNotes.value.sort(
    (a, b) => b.timestamp.getTime() - a.timestamp.getTime(),
  );
  console.log(allNotes.value);
};

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
