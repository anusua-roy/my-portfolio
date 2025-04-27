"use client";

import { useSmartSuggestionsStore } from "@/store/smartSuggestionsStore";
import SmartSuggestionCard from "@/components/admin/cards/SmartSuggestionCard";

export default function AdminSmartSuggestions() {
  const { suggestions, removeSuggestion } = useSmartSuggestionsStore();

  if (suggestions.length === 0) {
    return (
      <div className="text-center text-gray-500 italic py-10">
        No smart suggestions at the moment.
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Smart Suggestions</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {suggestions.map((suggestion) => (
          <SmartSuggestionCard
            key={suggestion.id}
            suggestion={suggestion}
            onProceed={() => removeSuggestion(suggestion.id)}
            onCancel={() => removeSuggestion(suggestion.id)}
          />
        ))}
      </div>
    </section>
  );
}
