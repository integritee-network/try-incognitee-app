<template>
  <OverlayDialog :show="show" :close="close" title="Call Details">
    <div class="mx-auto mt-5">
      <div class="grid grid-cols-1 md:grid-cols-1 gap-6 items-start">
        <div>
          <div
            class="rounded-lg bg-gray-800 shadow-sm ring-1 ring-gray-700 pb-3"
          >
            <dl class="flex flex-wrap">
              <!-- Kategorie und Zeit -->
              <div class="w-full flex justify-between px-6 pt-3">
                <div class="flex-auto text-left mb-4 md:mb-0">
                  <dt class="text-sm font-semibold leading-6 text-gray-300">
                    Category
                  </dt>
                  <dd class="mt-1 text-base font-semibold leading-6 text-white">
                    {{ note.category }}
                  </dd>
                </div>

                <div class="flex-auto text-right">
                  <dt class="text-sm font-semibold leading-6 text-gray-300">
                    Timestamp
                  </dt>
                  <dd class="mt-1 text-base font-semibold leading-6 text-white">
                    {{ formatDate(note.timestamp) }}
                  </dd>
                </div>
              </div>

              <!-- Richtung und Konto -->
              <div
                class="mt-3 flex w-full flex-none gap-x-4 border-t border-gray-700 px-6 pt-3"
              >
                <div class="flex-auto text-left">
                  <dt class="text-sm font-semibold leading-6 text-gray-300">
                    {{
                      note.direction === NoteDirection.Incoming ? "From" : "To"
                    }}
                  </dt>
                  <dd
                    class="mt-1 text-base font-semibold leading-6 text-white wallet-address"
                  >
                    {{ note.account }}
                  </dd>
                </div>
              </div>

              <!-- Betrag -->
              <div
                class="mt-3 flex w-full flex-none gap-x-4 border-t border-gray-700 px-6 pt-3"
              >
                <div class="flex-auto text-left">
                  <dt class="text-sm font-semibold leading-6 text-gray-300">
                    Amount
                  </dt>
                  <dd
                    class="mt-1 text-base font-semibold leading-6 text-white"
                    :class="{
                      'text-green-400':
                        note.direction === NoteDirection.Incoming,
                      'text-red-400': note.direction === NoteDirection.Outgoing,
                    }"
                  >
                    {{ note.direction === NoteDirection.Incoming ? "+" : "-" }}
                    {{
                      divideBigIntToFloat(
                        note.amount,
                        10 ** accountStore.getDecimals(note.asset),
                      )
                    }}
                    TEER
                  </dd>
                </div>
              </div>

              <!-- Notiz -->
              <div
                v-if="note.note?.length > 0"
                class="mt-3 flex w-full flex-none gap-x-4 border-t border-gray-700 px-6 pt-3"
              >
                <div class="flex-auto text-left">
                  <dt class="text-sm font-semibold leading-6 text-gray-300">
                    Note
                  </dt>
                  <dd class="mt-1 text-base font-semibold leading-6 text-white">
                    {{ note.note }}
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </OverlayDialog>
</template>

<script setup lang="ts">
import OverlayDialog from "~/components/overlays/OverlayDialog.vue";
import { defineProps } from "vue";
import { Note, NoteDirection } from "~/lib/notes";
import { formatDate } from "~/helpers/date";
import { divideBigIntToFloat } from "~/helpers/numbers";
import { useAccount } from "~/store/account.ts";

const accountStore = useAccount();

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  close: {
    type: Function,
    required: true,
  },
  note: {
    type: Object,
    required: false,
    default: null,
    validator: (value) => value === null || value instanceof Note,
  },
});
</script>

<style scoped>
.wrap-text {
  white-space: normal;
  word-wrap: break-word;
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
</style>
