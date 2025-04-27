"use client";

import { useEffect, useState } from "react";
import { AdminQuickActions } from "@/components/admin/sections/AdminQuickActions";
import AdminSmartSuggestions from "@/components/admin/sections/AdminSmartSuggestions";
import AddProjectForm from "@/components/admin/forms/AddProjectForm";
import JsonEditorModal from "@/components/ui/modal/JsonEditorModal";

import { useProjectsStore } from "@/store/projectsStore";
import { useAdminDetailsStore } from "@/store/adminDetailsStore";
import { useSkillsStore } from "@/store/skillsStore";
import { useCertificationsStore } from "@/store/certificationsStore";
import { useEducationStore } from "@/store/educationStore";

export default function AdminPage() {
  const [openForm, setOpenForm] = useState<string | null>(null);

  const {
    projects,
    setProjects,
    fetchProjects,
    loading: projectsLoading,
  } = useProjectsStore();
  const {
    heroHeading,
    heroName,
    taglineLine1,
    taglineLine2,
    highlights,
    aboutText,
    email,
    setDetails,
    fetchDetails,
    loading: detailsLoading,
  } = useAdminDetailsStore();
  const {
    skills,
    setSkills,
    fetchSkills,
    loading: skillsLoading,
  } = useSkillsStore();
  const {
    certifications,
    setCertifications,
    fetchCertifications,
    loading: certificationsLoading,
  } = useCertificationsStore();
  const {
    education,
    setEducation,
    fetchEducation,
    loading: educationLoading,
  } = useEducationStore();

  const loading =
    detailsLoading ||
    projectsLoading ||
    skillsLoading ||
    certificationsLoading ||
    educationLoading;

  useEffect(() => {
    fetchDetails();
    fetchProjects();
    fetchSkills();
    fetchCertifications();
    fetchEducation();
  }, []);

  function handleActionClick(action: string) {
    if (action === "Add Project") {
      setOpenForm("Add Project");
    } else if (action === "Manage Full Portfolio JSON") {
      setOpenForm("Full JSON");
    }
  }

  function closeForm() {
    setOpenForm(null);
  }

  function handleApplyFullJson(updated: any) {
    if (!updated) return;
    if (updated.details) setDetails(updated.details);
    if (updated.projects) setProjects(updated.projects);
    if (updated.skills) setSkills(updated.skills);
    if (updated.certifications) setCertifications(updated.certifications);
    if (updated.education) setEducation(updated.education);
    closeForm();
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-center">Loading Admin Panel...</p>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto p-4 flex flex-col gap-10">
      <AdminQuickActions onActionClick={handleActionClick} />
      <AdminSmartSuggestions />

      {openForm === "Add Project" && <AddProjectForm onClose={closeForm} />}

      {openForm === "Full JSON" && (
        <JsonEditorModal
          open
          onClose={closeForm}
          initialJson={{
            details: {
              heroHeading,
              heroName,
              taglineLine1,
              taglineLine2,
              highlights,
              aboutText,
              email,
            },
            projects,
            skills,
            certifications,
            education,
          }}
          onApply={handleApplyFullJson}
        />
      )}
    </section>
  );
}
