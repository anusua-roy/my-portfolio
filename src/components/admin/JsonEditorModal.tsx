import { useState, useEffect } from "react";
import SimpleModal from "@/components/admin/SimpleModal";

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
    alert("Copied JSON to clipboard!");
  }

  function handleClear() {
    setJsonText("");
  }

  function handleApply() {
    try {
      const parsed = JSON.parse(jsonText);
      onApply(parsed);
      onClose();
    } catch (error) {
      alert("Invalid JSON. Please correct it before applying.");
    }
  }

  return (
    <SimpleModal open={open} onClose={onClose}>
      <div className="p-4 space-y-4">
        <h2 className="text-xl font-bold mb-2">Edit JSON</h2>
        <textarea
          value={jsonText}
          onChange={(e) => setJsonText(e.target.value)}
          rows={20}
          className="w-full p-2 border rounded text-sm font-mono"
          placeholder="Paste your JSON here..."
        />
        <div className="flex gap-4 mt-4">
          <button
            onClick={handleCopy}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Copy JSON
          </button>
          <button
            onClick={handleClear}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Clear Editor
          </button>
        </div>
        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-400 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Cancel
          </button>
          <button
            onClick={handleApply}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Apply Changes
          </button>
        </div>
      </div>
    </SimpleModal>
  );
}
