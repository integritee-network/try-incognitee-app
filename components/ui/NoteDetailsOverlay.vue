<template>
  <OverlayDialog :show="show" :close="close" title="Call Details">
    <div class="mt-2">
      <p class="text-sm text-gray-400">
        <b>{{ note.category }}</b> @ {{ formatDate(note.timestamp) }}
      </p>
      <div v-if="note.direction === NoteDirection.Incoming">
        <p class="text-sm wrap-text text-gray-400">from {{ note.account }}</p>
      </div>
      <div v-if="note.direction === NoteDirection.Outgoing">
        <p class="text-sm wrap-text text-gray-400">to {{ note.account }}</p>
      </div>
      <div v-if="note.amount" class="text-sm font-medium text-white">
        {{ note.direction === NoteDirection.Incoming ? "+" : "-" }}
        {{ divideBigIntToFloat(note.amount, 10 ** accountStore.getDecimals) }}
        TEER
      </div>
      <div
        v-if="note.note?.length > 0"
        class="text-sm wrap-text font-medium text-gray-400"
      >
        <p>note:</p>
        <p>{{ note.note }}</p>
      </div>
    </div>
  </OverlayDialog>
</template>

<script setup lang="ts">
import OverlayDialog from "@/components/ui/OverlayDialog.vue";
import { defineProps } from "vue";
import { Note, NoteDirection } from "@/lib/notes";
import { formatMoment, formatDate } from "@/helpers/date";
import { divideBigIntToFloat } from "~/helpers/numbers";
import { useAccount } from "@/store/account.ts";

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
    type: Note,
    required: true,
  },
});
</script>

<style scoped>
.wrap-text {
  white-space: normal;
  word-wrap: break-word;
}
</style>
