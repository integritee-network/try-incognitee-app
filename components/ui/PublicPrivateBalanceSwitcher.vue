<template>
  <div class="w-full bg-incognitee-blue mt-4">
    <div
      class="border bg-incognitee-blue border-incognitee-green rounded-lg p-1"
    >
      <nav class="flex space-x-4" aria-label="Tabs">
        <button
          id="public-balance-tab-selector"
          @click="selectTab('public')"
          :class="[
            currentTab === 'public'
              ? 'bg-gray-800 text-white'
              : 'text-gray-500 hover:text-gray-700',
            'flex-1 py-2 text-sm font-medium   rounded-lg',
          ]"
        >
          Public Balance
        </button>
        <button
          id="private-balance-tab-selector"
          @click="selectTab('private')"
          :class="[
            currentTab === 'private'
              ? 'bg-gray-800 text-white'
              : 'text-gray-500 hover:text-gray-700',
            'flex-1 py-2 text-sm font-medium rounded-lg',
          ]"
        >
          Private Balance
        </button>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  selectTab: {
    type: Function,
    required: true,
  },
  currentTab: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>
