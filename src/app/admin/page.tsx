"use client";

import { useState } from "react";
import { AdminQuickActions } from "@/components/admin/AdminQuickActions";
import AdminSmartSuggestions  from "@/components/admin/AdminSmartSuggestions";
import SimpleModal from "@/components/admin/common/SimpleModal"; // ✅ Your SimpleModal

export default function AdminPage() {
  const [openForm, setOpenForm] = useState<string | null>(null);

  return (
    <section className="max-w-7xl mx-auto p-4 flex flex-col gap-8">
      <AdminQuickActions onActionClick={setOpenForm} />
      <AdminSmartSuggestions />

      <SimpleModal open={!!openForm} onClose={() => setOpenForm(null)}>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">{openForm}</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            (Dummy form for {openForm} — real form will come soon.)
          </p>
          {/* Later we will put real form based on openForm */}
        </div>
      </SimpleModal>
    </section>
  );
}
