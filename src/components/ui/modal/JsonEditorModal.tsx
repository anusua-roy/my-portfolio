"use client";

import { useState, useEffect } from "react";
import SimpleModal from "@/components/ui/modal/SimpleModal";
import { toast } from "sonner";

export default function JsonEditorModal({
  open,
  onClose,
  initialJson,
  onApply,
}: {
  open: boolean;
  onClose: () => void;
  initialJson: object;
  onApply: (updatedJson: object) => void;
}) {
  const [jsonText, setJsonText] = useState("");

  useEffect(() => {
    if (open) {
      setJsonText(JSON.stringify(initialJson, null, 2));
    }
  }, [open, initialJson]);

  function handleCopy() {
    navigator.clipboard.writeText(jsonText);
    toast.success("Copied JSON to clipboard!");
  }

  function handleClear() {
    setJsonText("");
  }

  function handleApply() {
    try {
      const parsed = JSON.parse(jsonText);
      onApply(parsed);
      toast.success("Changes applied successfully!");
    } catch (error) {
      toast.error("Invalid JSON. Please correct it before applying.");
    }
  }

  return (
    <SimpleModal open={open} onClose={onClose}>
      <div className="p-4 space-y-6">
        <h2 className="text-2xl font-bold text-center mb-6">Edit JSON</h2>

        <textarea
          value={jsonText}
          onChange={(e) => setJsonText(e.target.value)}
          rows={20}
          className="w-full p-3 border rounded text-sm font-mono resize-none"
          style={{
            backgroundColor: "var(--card-bg)",
            color: "var(--card-text)",
            borderColor: "var(--card-border)",
          }}
        />

        <div className="flex flex-wrap justify-between gap-4">
          <button
            onClick={handleCopy}
            className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm"
          >
            Copy JSON
          </button>
          <button
            onClick={handleClear}
            className="flex-1 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded text-sm"
          >
            Clear Editor
          </button>
        </div>

        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-400 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-sm"
          >
            Cancel
          </button>
          <button
            onClick={handleApply}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded transition text-sm"
          >
            Apply Changes
          </button>
        </div>
      </div>
    </SimpleModal>
  );
}
