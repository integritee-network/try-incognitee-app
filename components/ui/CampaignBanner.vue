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
        >Live</span
      >

      <!-- Mobile Version -->
      <p v-if="isMobile" class="flex-1 text-sm font-medium text-white mx-2">
        {{ textMobile }}
      </p>

      <!-- Desktop Version -->
      <p v-else class="flex-1 text-sm font-medium text-white mx-2">
        {{ textDesktop }}
      </p>

      <!-- Click here button, always aligned to the right -->
      <button
        type="button"
        class="text-white font-bold text-xs lg:text-right flex items-center ml-auto"
        @click="onClick"
      >
        Click here
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4 ml-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5l6 6m0 0l-6 6m6-6H6"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  onClick: {
    type: Function,
    required: true,
  },
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

<style scoped></style>
