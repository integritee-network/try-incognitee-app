<template>
  <div
    class="flex flex-col lg:flex-row p-2 incognitee-bg items-center text-indigo-100 leading-none lg:rounded-full"
  >
    <div
      class="flex w-full justify-between items-center"
      :class="{ 'py-2': isMobile }"
    >
      <!-- Live Badge -->
      <span
        class="rounded-full incognitee-blue uppercase px-2 py-1 text-xs font-bold mr-3"
        >Info</span
      >

      <!-- Mobile Version -->
      <p
        v-if="isMobile"
        class="flex-1 text-sm font-medium text-white mx-2"
        v-html="textMobile"
      />

      <!-- Desktop Version -->
      <p
        v-else
        class="flex-1 text-sm font-medium text-white mx-2"
        v-html="textDesktop"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  isMobile: {
    type: Boolean,
    required: true,
  },
  textMobile: {
    type: String,
    required: false,
  },
  textDesktop: {
    type: String,
    required: false,
  },
});
</script>

<style scoped>
/* to apply styles to content rendered by v-html */
::v-deep a {
  text-decoration: underline;
}
</style>
