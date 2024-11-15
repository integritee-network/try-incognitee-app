import { defineStore } from "pinia";
import { Note } from "@/lib/notes";
export const useNotes = defineStore("notes", {
  state: () => ({
    notes: new Set<Note>(),
  }),
  getters: {
    getSortedNotes() {
      return Array.from(this.notes).sort(
        (a, b) => b.timestamp.getTime() - a.timestamp.getTime(),
      );
    },
    getFinancialNotes() {
      return this.getSortedNotes().filter((note) => note.amount > 0);
    },
    getMessages() {
      return this.getSortedNotes().filter((note) => note.amount === 0);
    },
  },
  actions: {
    /// Add a note to the store, avoiding duplicates
    addNote(note: Note) {
      if (
        ![...this.notes].some(
          (existingNote) =>
            existingNote instanceof Note && existingNote.equals(note),
        )
      ) {
        this.notes.add(note);
      }
    },
    purgeAll() {
      this.notes.clear();
    },
  },
});
