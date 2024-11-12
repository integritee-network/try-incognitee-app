<template>
  <div class="mt-10 flex justify-between items-center">
    ￼
    <div
      v-if="show"
      class="title text-2xl font-bold tracking-tight text-white sm:text-2xl"
      >
      ￼ History
      ￼
    </div>
    ￼
    <button
      v-if="show"
      @click="fetchNoteBucketsInfo"
      type="button"
      class="btn btn_gradient inline-flex items-center gap-x-1.5 rounded-md px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      >
      ￼ fetch buckets
    </button>
    <button
      v-if="show"
      @click="fetchIncogniteeNotes"
      type="button"
      class="btn btn_gradient inline-flex items-center gap-x-1.5 rounded-md px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      ￼ fetch notes
    </button>
  </div>
  <!--
  ￼￼                <button
  ￼                  @click="openMessages"
  ￼                  type="button"
  ￼                  class="hidden sm:inline btn btn_gradient rounded sm:px-2 sm:py-1 text-xs font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
  ￼                >
  ￼                  Note
  ￼                </button>
  ￼   <div class="mb-10">
  ￼      &lt;!&ndash; Neuer Abschnitt, der nur angezeigt wird, wenn der "Private Balance" Tab aktiv ist &ndash;&gt;
  ￼      <div
  ￼        v-if="currentTab === 'private'"
  ￼        class="flex-1 overflow-y-auto bg-gray-900 mt-5 rounded-md"
  ￼      >
  ￼        <table class="w-full whitespace-nowrap text-left">
  ￼          <tbody class="divide-y divide-white/10">
  ￼            <tr class="flex justify-between">
  ￼              &lt;!&ndash; Linksbündige Zelle mit Icon, Text und "New"-Badge &ndash;&gt;
  ￼              <td
  ￼                class="flex items-center gap-x-4 py-4 pl-4 pr-8 text-left sm:pl-6 lg:pl-8"
  ￼              >
  ￼                &lt;!&ndash; Pfeil-SVG für Incoming Transfer &ndash;&gt;
  ￼
  ￼                <svg
  ￼                  viewBox="0 0 24 24"
  ￼                  fill="currentColor"
  ￼                  class="size-5 text-gray-400"
  ￼                >
  ￼                  <path
  ￼                    fill-rule="evenodd"
  ￼                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z"
  ￼                    clip-rule="evenodd"
  ￼                  />
  ￼                </svg>
  ￼
  ￼                <div class="flex flex-col">
  ￼                  <div class="flex items-start gap-x-3">
  ￼                    <div class="text-sm font-medium text-white">
  ￼                      Incoming Transfer
  ￼                    </div>
  ￼                    &lt;!&ndash; "New" Badge für Desktop und grüner Punkt für Mobile &ndash;&gt;
  ￼                    <div
  ￼                      class="hidden sm:block rounded-md bg-green-700 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-green-600/20"
  ￼                    >
  ￼                      New
  ￼                    </div>
  ￼                    <div
  ￼                      class="sm:hidden rounded-full bg-green-500 w-2 h-2"
  ￼                    ></div>
  ￼                    &lt;!&ndash; Grüner Punkt für mobile Ansicht &ndash;&gt;
  ￼                  </div>
  ￼                  <div
  ￼                    class="wallet-address mt-1 text-xs text-gray-500 whitespace-nowrap"
  ￼                  >
  ￼                    2Pm7Rdfjansfjkabgh435346bdfasdf
  ￼                  </div>
  ￼                </div>
  ￼              </td>
  ￼
  ￼              &lt;!&ndash; Rechtsbündige Zelle für TEER Betrag und Datum &ndash;&gt;
  ￼              <td
  ￼                class="flex flex-col items-end py-4 pr-4 text-right text-sm text-white sm:pr-6 lg:pr-8"
  ￼              >
  ￼                <div class="text-sm font-medium text-white">+ 100 TEER</div>
  ￼                <time class="mt-1 text-xs text-gray-500">24.08.2024 15:00</time>
  ￼              </td>
  ￼              <td
  ￼                class="hidden py-4 pl-0 pr-4 text-right text-sm/6 text-white sm:table-cell sm:pr-6 lg:pr-8"
  ￼              >
  ￼                &lt;!&ndash; Desktop Ansicht &ndash;&gt;
  ￼                <button
  ￼                  @click="openMessages"
  ￼                  type="button"
  ￼                  class="hidden sm:inline btn btn_gradient rounded sm:px-2 sm:py-1 text-xs font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
  ￼                >
  ￼                  Note
  ￼                </button>
  ￼              </td>
  ￼            </tr>
  ￼
  ￼            &lt;!&ndash; Weitere Zeile als Beispiel &ndash;&gt;
  ￼            <tr class="flex justify-between">
  ￼              &lt;!&ndash; Linksbündige Zelle mit Icon, Text und "New"-Badge &ndash;&gt;
  ￼              <td
  ￼                class="flex items-center gap-x-4 py-4 pl-4 pr-8 text-left sm:pl-6 lg:pl-8"
  ￼              >
  ￼                &lt;!&ndash; Pfeil-SVG für Submit Guess &ndash;&gt;
  ￼                <svg
  ￼                  viewBox="0 0 20 20"
  ￼                  fill="currentColor"
  ￼                  class="h-6 w-5 text-gray-400"
  ￼                >
  ￼                  <path
  ￼                    fill-rule="evenodd"
  ￼                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-.75-4.75a.75.75 0 0 0 1.5 0V8.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0L6.2 9.74a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z"
  ￼                    clip-rule="evenodd"
  ￼                  />
  ￼                </svg>
  ￼
  ￼                <div class="flex flex-col">
  ￼                  <div class="flex items-start gap-x-3">
  ￼                    <div class="text-sm font-medium text-white">
  ￼                      Submit Guess
  ￼                    </div>
  ￼                    &lt;!&ndash; "New" Badge für Desktop und grüner Punkt für Mobile &ndash;&gt;
  ￼                    <div
  ￼                      class="hidden sm:block rounded-md bg-green-700 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-green-600/20"
  ￼                    >
  ￼                      New
  ￼                    </div>
  ￼                    <div
  ￼                      class="sm:hidden rounded-full bg-green-500 w-2 h-2"
  ￼                    ></div>
  ￼                    &lt;!&ndash; Grüner Punkt für mobile Ansicht &ndash;&gt;
  ￼                  </div>
  ￼                  <div
  ￼                    class="wallet-address mt-1 text-xs text-gray-500 whitespace-nowrap"
  ￼                  >
  ￼                    2Pm7Rdfjansfjkabgh435346bdfasdf
  ￼                  </div>
  ￼                </div>
  ￼              </td>
  ￼
  ￼              &lt;!&ndash; Rechtsbündige Zelle für TEER Betrag und Datum &ndash;&gt;
  ￼              <td
  ￼                class="flex flex-col items-end py-4 pr-4 text-right text-sm text-white sm:pr-6 lg:pr-8"
  ￼              >
  ￼                <div class="text-sm font-medium text-white">- 0.1 TEER</div>
  ￼                <time class="mt-1 text-xs text-gray-500">24.08.2024 15:00</time>
  ￼              </td>
  ￼              <td
  ￼                class="hidden py-4 pl-0 pr-4 text-right text-sm/6 text-white sm:table-cell sm:pr-6 lg:pr-8"
  ￼              >
  ￼                &lt;!&ndash; Desktop Ansicht &ndash;&gt;
  ￼                <button
  ￼                  @click="openMessages"
  ￼                  type="button"
  ￼                  class="hidden sm:inline btn btn_gradient rounded sm:px-2 sm:py-1 text-xs font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
  ￼                >
  ￼                  Note
  ￼                </button>
  ￼              </td>
  ￼            </tr>
  ￼
  ￼            <tr class="flex justify-between">
  ￼              <td class="flex justify-between py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
  ￼                <div class="flex items-center gap-x-4">
  ￼                  <svg
  ￼                    class="h-6 w-5 flex-none text-gray-400 sm:block"
  ￼                    viewBox="0 0 20 20"
  ￼                    fill="currentColor"
  ￼                    aria-hidden="true"
  ￼                    data-slot="icon"
  ￼                  >
  ￼                    <path
  ￼                      fill-rule="evenodd"
  ￼                      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-.75-4.75a.75.75 0 0 0 1.5 0V8.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0L6.2 9.74a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z"
  ￼                      clip-rule="evenodd"
  ￼                    />
  ￼                  </svg>
  ￼                  <div class="flex-auto">
  ￼                    <div class="flex items-start gap-x-3">
  ￼                      <div
  ￼                        id="addressnumber"
  ￼                        class="text-sm/6 font-medium text-white"
  ￼                      >
  ￼                        Unshield​​
  ￼                      </div>
  ￼                    </div>
  ￼                    <div
  ￼                      class="wallet-address mt-1 text-xs/5 text-gray-500 whitespace-nowrap"
  ￼                    >
  ￼                      2Pm7Rdfjansfjkabgh435346bdfasdf​
  ￼                    </div>
  ￼                  </div>
  ￼                </div>
  ￼              </td>
  ￼              <td
  ￼                class="flex flex-col items-end py-4 pr-4 text-right text-sm text-white sm:pr-6 lg:pr-8"
  ￼              >
  ￼                <div class="text-sm font-medium text-white">- 5.1 TEER</div>
  ￼                <time class="mt-1 text-xs text-gray-500">24.08.2024 15:00</time>
  ￼              </td>
  ￼
  ￼              <td
  ￼                class="hidden py-4 pl-0 pr-4 text-right text-sm/6 text-white sm:table-cell sm:pr-6 lg:pr-8"
  ￼              >
  ￼                &lt;!&ndash; Desktop Ansicht &ndash;&gt;
  ￼                <button
  ￼                  @click="openMessages"
  ￼                  type="button"
  ￼                  class="hidden sm:inline btn btn_gradient rounded sm:px-2 sm:py-1 text-xs font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
  ￼                >
  ￼                  Note
  ￼                </button>
  ￼              </td>
  ￼            </tr>
  ￼          </tbody>
  ￼        </table>
  ￼      </div>
  ￼    </div>
  -->
  ￼
</template>

<script setup lang="ts">
import {formatMoment} from "@/helpers/date";
import {ref, defineProps} from "vue";
import {useIncognitee} from "@/store/incognitee.ts";
import {useAccount} from "@/store/account.ts";

const accountStore = useAccount();
const incogniteeStore = useIncognitee();

const getterMap: { [address: string]: any } = {};
const disableGetter = ref(false);
const noteBucketsInfo = ref(null);

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
  const bucket_id = noteBucketsInfo.value?.last.unwrap().index
  try {
    if (!getterMap[mapKey]) {
      if (injector) {
        console.debug(
          `fetching incognitee notes needs signing in extension: ${injector.name}`,
        );
      }

      getterMap[mapKey] =
        await incogniteeStore.api.notesForTrustedGetter(
          accountStore.account,
          bucket_id,
          incogniteeStore.shard,
          {signer: injector?.signer},
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
      for (const note of notes) {
        if (note.note.isSuccessfulTrustedCall) {
          const call = incogniteeStore.api.createType("IntegriteeTrustedCall", note.note.asSuccessfulTrustedCall);
          if (call.isBalanceShield) {
            console.log(`[${formatMoment(note.timestamp.toNumber())}] balance shield: ${call.asBalanceShield}`);
          } else if (call.isBalanceUnshield) {
            console.log(`[${formatMoment(note.timestamp.toNumber())}] balance unshield: ${call.asBalanceUnshield}`);
          } else if (call.isBalanceTransfer) {
            console.log(`[${formatMoment(note.timestamp.toNumber())}] balance transfer: ${call.asBalanceTransfer}`);
          } else if (call.isBalanceTransferWithNote) {
            console.log(`[${formatMoment(note.timestamp.toNumber())}] balance transfer with note: ${call.asBalanceTransferWithNote}`);
          } else if (call.isGuessTheNumber) {
            console.log(`[${formatMoment(note.timestamp.toNumber())}] guess the number: ${call.asGuessTheNumber}`);
          } else {
            console.log(`[${formatMoment(note.timestamp.toNumber())}] unknown call: ${call}`);
          }
        }
      }
    })
    .catch((err) => {
      console.error(`[fetchIncogniteeNotes] error ${err}`);
    });
};


</script>

<style scoped>

</style>
