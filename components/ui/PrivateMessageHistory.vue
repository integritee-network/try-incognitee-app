<template>
  <div v-if="show" class="flex justify-between items-center"></div>
  <div class="mb-10">
    <!-- Neuer Abschnitt, der nur angezeigt wird, wenn der "Private Balance" Tab aktiv ist -->
    <div ref="chatWindow" class="flex-1 overflow-y-auto bg-gray-900 rounded-md">
      <div
        v-for="(note, index) in noteStore.getMessagesWith(counterparty)"
        :key="index"
        class="py-2 px-4"
      >
        <!-- Ausgehende Nachrichten -->
        <div
          v-if="note.direction === NoteDirection.Outgoing"
          class="chat chat-end"
        >
          <div class="chat-header text-xs text-gray-500">You</div>
          <div
            class="chat-bubble message-box max-w-xs shadow-md bg-blue-500 text-white"
          >
            {{ note.note }}
          </div>
          <div class="chat-footer text-xs text-gray-500">
            {{ formatDate(note.timestamp) }}
          </div>
        </div>

        <!-- Eingehende Nachrichten -->
        <div
          v-if="note.direction === NoteDirection.Incoming"
          class="chat chat-start"
        >
          <div class="chat-header wallet-address text-xs text-gray-500">
            {{ note.account }}
          </div>
          <div
            class="chat-bubble message-box max-w-xs shadow-md bg-white text-black"
          >
            {{ note.note }}
          </div>
          <div class="chat-footer text-xs text-gray-500">
            {{ formatDate(note.timestamp) }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <NoteDetailsOverlay
    :show="showViewMore"
    :note="showNote"
    :close="closeViewMore"
  />
</template>

<script setup lang="ts">
import { formatDate } from "@/helpers/date";
import { ref, defineProps, onMounted, watch, nextTick } from "vue";
import { useAccount } from "@/store/account.ts";
import { useNotes } from "@/store/notes.ts";
import { Note, NoteDirection } from "@/lib/notes";
import NoteDetailsOverlay from "~/components/overlays/NoteDetailsOverlay.vue";

const accountStore = useAccount();
const noteStore = useNotes();

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  counterparty: {
    type: String,
    required: true,
  },
});
const chatWindow = ref(null);

watch(
  () => noteStore.getMessagesWith(props.counterparty),
  async () => {
    await nextTick();
    if (chatWindow.value) {
      console.log("scrolling to bottom");
      chatWindow.value.scrollTop = chatWindow.value.scrollHeight;
    }
  },
);

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
.message-box {
  word-wrap: break-word; /* Zeilenumbrüche an Wörtern erzwingen */
  overflow-wrap: break-word; /* Alternative für neuere Browser */
  white-space: normal; /* Automatische Zeilenumbrüche erlauben */
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
