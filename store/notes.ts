import { defineStore } from "pinia";
import { Note } from "@/lib/notes";
export const useNotes = defineStore("notes", {
  state: () => ({
    notes: new Set<Note>(),
  }),
  getters: {
    getSortedNotesNewestFirst() {
      return Array.from(this.notes).sort(
        (a, b) => b.timestamp.getTime() - a.timestamp.getTime(),
      );
    },
    getSortedNotesNewestLast() {
      return Array.from(this.notes).sort(
        (a, b) => a.timestamp.getTime() - b.timestamp.getTime(),
      );
    },
    getFinancialNotes() {
      return this.getSortedNotesNewestFirst.filter(
        (note) => (note.amount > 0) | note.category.includes("Guess"),
      );
    },
    getMessages() {
      return this.getSortedNotesNewestLast.filter(
        (note) => note.note?.length > 0 && !(note.amount > 0),
      );
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
