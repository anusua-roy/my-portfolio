"use client";

export default function SimpleModal({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 max-w-2xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
