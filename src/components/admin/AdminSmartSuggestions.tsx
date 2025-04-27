"use client";

import SmartSuggestionCard from "@/components/admin/SmartSuggestionCard";

export default function AdminSmartSuggestions() {
  const smartSuggestions = [
    {
      action: "Show Java in Skills",
      reason: "You added 2 new Java projects recently.",
    },
    {
      action: "Show ReactJS in Skills",
      reason: "You added 3 ReactJS-based projects recently.",
    },
    {
      action: "Highlight Python expertise",
      reason: "4 Python projects were completed recently.",
    },
    {
      action: "Show Spring Boot in Skills",
      reason: "Detected backend projects using Java Spring Boot framework.",
    },
  ];

  const handleProceed = (action: string) => {
    console.log(`Proceeding with: ${action}`);
  };

  const handleCancel = (action: string) => {
    console.log(`Cancelled: ${action}`);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Smart Suggestions</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {smartSuggestions.map((suggestion) => (
          <SmartSuggestionCard
            key={suggestion.action}
            suggestion={suggestion}
            onProceed={() => handleProceed(suggestion.action)}
            onCancel={() => handleCancel(suggestion.action)}
          />
        ))}
      </div>
    </section>
  );
}
