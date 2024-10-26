<template>
  <OverlayDialog :show="show" :close="close" title="System Health">
    <div class="mt-2">
      <p class="text-sm text-gray-400">blabla</p>
    </div>
  </OverlayDialog>
</template>

<script setup lang="ts">
import OverlayDialog from "@/components/ui/OverlayDialog.vue";
import { defineProps } from "vue";

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  close: {
    type: Function,
    required: true,
  },
});
</script>

<style scoped></style>
