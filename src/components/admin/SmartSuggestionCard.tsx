"use client";

import { motion } from "framer-motion";

type SmartSuggestion = {
  action: string;
  reason: string;
};

export default function SmartSuggestionCard({
  suggestion,
  onProceed,
  onCancel,
}: {
  suggestion: SmartSuggestion;
  onProceed: () => void;
  onCancel: () => void;
}) {
  return (
    <motion.div
      className="rounded-xl border shadow-md p-5 flex flex-col justify-between transition-colors duration-300 bg-background"
      style={{
        borderColor: "var(--card-border)",
        color: "var(--foreground)",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {/* Title */}
      <h3 className="text-lg font-bold mb-2 text-accent">
        {suggestion.action}
      </h3>

      {/* Reason */}
      <p className="text-sm text-muted mb-6">{suggestion.reason}</p>

      {/* Action Buttons aligned to right */}
      <div className="flex justify-end gap-3">
        <button
          onClick={onProceed}
          className="px-4 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white text-xs font-semibold transition"
        >
          Proceed
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 text-white text-xs font-semibold transition"
        >
          Cancel
        </button>
      </div>
    </motion.div>
  );
}
