"use client";

import { useAdminDetailsStore } from "@/store/adminDetailsStore";
import { useEffect } from "react";
import JsonEditorModal from "@/components/admin/common/JsonEditorModal";
import { toast } from "sonner";
import PrimaryButton from "@/components/ui/PrimaryButton";

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
          handleClick={() => toast("(Open JSON Editor coming soon)")}
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Hero Section</h3>
        <input
          type="text"
          value={heroHeading}
          onChange={(e) => handleFieldChange("heroHeading", e.target.value)}
          placeholder="Hero Heading"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          value={heroName}
          onChange={(e) => handleFieldChange("heroName", e.target.value)}
          placeholder="Hero Name"
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Taglines</h3>
        <textarea
          value={taglineLine1}
          onChange={(e) => handleFieldChange("taglineLine1", e.target.value)}
          placeholder="Tagline Line 1"
          rows={2}
          className="w-full p-2 border rounded"
        />
        <textarea
          value={taglineLine2}
          onChange={(e) => handleFieldChange("taglineLine2", e.target.value)}
          placeholder="Tagline Line 2"
          rows={2}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Highlights</h3>
        <input
          type="text"
          value={highlights}
          onChange={(e) => handleFieldChange("highlights", e.target.value)}
          placeholder="Highlights (comma separated)"
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">About Section</h3>
        <textarea
          value={aboutText}
          onChange={(e) => handleFieldChange("aboutText", e.target.value)}
          placeholder="About Me Text"
          rows={5}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Resume</h3>
        <input
          type="url"
          value={resumeUrl}
          onChange={(e) => handleFieldChange("resumeUrl", e.target.value)}
          placeholder="Resume Link (Drive, Hosted etc.)"
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Contact Info</h3>
        <input
          type="email"
          value={email}
          onChange={(e) => handleFieldChange("email", e.target.value)}
          placeholder="Email Address"
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="pt-6">
        <PrimaryButton label="Save Details" handleClick={handleSave} />
      </div>
    </div>
  );
}
