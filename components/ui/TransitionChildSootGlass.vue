<template>
  <TransitionChild
    as="template"
    enter="ease-out duration-300"
    enter-from="opacity-0"
    enter-to="opacity-100"
    leave="ease-in duration-200"
    leave-from="opacity-100"
    leave-to="opacity-0"
  >
    <div class="fixed inset-0 bg-black bg-opacity-80 transition-opacity" />
  </TransitionChild>
</template>

<script setup lang="ts">
import { TransitionChild } from "@headlessui/vue";
</script>
