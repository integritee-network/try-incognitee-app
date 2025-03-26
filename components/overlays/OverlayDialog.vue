<template>
  <TransitionRoot as="template" :show="show">
    <Dialog class="relative z-20" @close="close">
      <TransitionChildSootGlass />
      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex items-center justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="w-full relative transform overflow-hidden rounded-lg bg-gray-800 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6"
            >
              <div class="absolute right-0 top-0 pr-4 pt-4">
                <button
                  type="button"
                  id="overlay-close"
                  class="text-gray-400 hover:text-gray-500"
                  @click="close"
                >
                  <span class="sr-only">Close</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div class="mt-3 text-center sm:mt-5 flex-grow">
                <DialogTitle
                  as="h3"
                  class="text-base font-semibold leading-6 text-white"
                  >{{ title }}
                </DialogTitle>
                <slot />
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
        <div class="mt-20 h-32 mb-20">
          <!-- this is a spacer that is necessary to scroll
          up the dialog on mobile if the soft-keyboard
          obscures the content -->
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { defineProps } from "vue";
import TransitionChildSootGlass from "~/components/ui/TransitionChildSootGlass.vue";

const props = defineProps({
  close: {
    type: Function,
    required: true,
  },
  show: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>
