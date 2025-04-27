"use client";

import { useAdminDetailsStore } from "@/store/adminDetailsStore";
import { useEffect, useState } from "react";
import JsonEditorModal from "@/components/ui/modal/JsonEditorModal";
import { toast } from "sonner";
import PrimaryButton from "@/components/ui/button/PrimaryButton";

export default function DetailsForm() {
  const {
    heroHeading,
    heroName,
    taglineLine1,
    taglineLine2,
    highlights,
    aboutText,
    resumeUrl,
    email,
    loading,
    error,
    fetchDetails,
    setDetails,
  } = useAdminDetailsStore();

  const [jsonEditorOpen, setJsonEditorOpen] = useState(false);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  function handleFieldChange(field: string, value: string) {
    setDetails({ [field]: value });
  }

  function handleApplyJson(updated: any) {
    setDetails(updated);
  }

  async function handleSave() {
    toast.success("(Save functionality coming soon after CMS setup)");
  }

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Edit Portfolio Details</h2>
        <PrimaryButton
          label="Import/Export JSON"
          handleClick={() => setJsonEditorOpen(true)}
        />
      </div>

      {/* Sectional Fields (kept for manual quick edits) */}

      <div className="pt-6">
        <PrimaryButton label="Save Details" handleClick={handleSave} />
      </div>

      {/* JSON Editor Modal */}
      <JsonEditorModal
        open={jsonEditorOpen}
        onClose={() => setJsonEditorOpen(false)}
        initialJson={{
          heroHeading,
          heroName,
          taglineLine1,
          taglineLine2,
          highlights,
          aboutText,
          resumeUrl,
          email,
        }}
        onApply={handleApplyJson}
      />
    </div>
  );
}
