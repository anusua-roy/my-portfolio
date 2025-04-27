import { create } from "zustand";

type Suggestion = {
  id: string; // important: unique id
  action: string;
  reason: string;
};

type SmartSuggestionsState = {
  suggestions: Suggestion[];
  setSuggestions: (newSuggestions: Suggestion[]) => void;
  removeSuggestion: (id: string) => void;
};

export const useSmartSuggestionsStore = create<SmartSuggestionsState>(
  (set) => ({
    suggestions: [],
    setSuggestions: (newSuggestions) => set({ suggestions: newSuggestions }),
    removeSuggestion: (id) =>
      set((state) => ({
        suggestions: state.suggestions.filter((s) => s.id !== id),
      })),
  })
);
