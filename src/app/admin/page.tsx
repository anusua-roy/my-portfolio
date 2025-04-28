"use client";

import { useEffect, useState } from "react";
import { AdminQuickActions } from "@/components/admin/sections/AdminQuickActions";
import AdminSmartSuggestions from "@/components/admin/sections/AdminSmartSuggestions";
import AddProjectForm from "@/components/admin/forms/AddProjectForm";
import JsonEditorModal from "@/components/ui/modal/JsonEditorModal";
import SimpleModal from "@/components/ui/modal/SimpleModal"; // assuming you have this

import { useProjectsStore } from "@/store/projectsStore";
import { useAdminDetailsStore } from "@/store/adminDetailsStore";
import { useSkillsStore } from "@/store/skillsStore";
import { useCertificationsStore } from "@/store/certificationsStore";
import { useEducationStore } from "@/store/educationStore";
import EditAboutForm from "@/components/admin/forms/EditAboutForm";
import { useExperienceStore } from "@/store/experienceStore";

export default function AdminPage() {
  const [openForm, setOpenForm] = useState<string | null>(null);
  const [openJsonEditor, setOpenJsonEditor] = useState(false);

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
  const {experience, setExperience, fetchExperience, loading: experienceLoading} = useExperienceStore()

  const loading =
    detailsLoading ||
    projectsLoading ||
    skillsLoading ||
    certificationsLoading ||
    educationLoading ||
    experienceLoading;

useEffect(() => {
  async function fetchAllData() {
    try {
      await Promise.all([
        fetchDetails(),
        fetchProjects(),
        fetchSkills(),
        fetchCertifications(),
        fetchEducation(),
        fetchExperience(),
      ]);
    } catch (error) {
      console.error("Error loading admin panel data:", error);
    }
  }

  fetchAllData();
}, []);


  function handleActionClick(action: string) {
    if (action === "Manage Full Data (JSON)") {
      setOpenJsonEditor(true);
    } else {
      setOpenForm(action); // Any other form will open SimpleModal
    }
  }

  function closeForm() {
    setOpenForm(null);
    setOpenJsonEditor(false);
  }

  function handleApplyFullJson(updated: any) {
    if (!updated) return;
    if (updated.details) setDetails(updated.details);
    if (updated.projects) setProjects(updated.projects);
    if (updated.skills) setSkills(updated.skills);
    if (updated.certifications) setCertifications(updated.certifications);
    if (updated.education) setEducation(updated.education);
    if( updated.experience) setExperience(updated.experience)
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

      {/* Simple Modal for small forms */}
      {openForm && (
        <SimpleModal open={!!openForm} onClose={closeForm}>
          {openForm === "Create New Project" && (
            <AddProjectForm onClose={closeForm} />
          )}
          {openForm === "Edit About Me" && (
            <EditAboutForm onClose={closeForm} />
          )}
          {/* Other forms */}
          {openForm !== "Create New Project" &&
            openForm !== "Edit About Me" && (
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">
                  Feature Coming Soon
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  The "{openForm}" feature is under development. Please check
                  back later!
                </p>
              </div>
            )}
        </SimpleModal>
      )}

      {/* Full JSON Editor Modal */}
      {openJsonEditor && (
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
            experience,
            education,
            certifications,
          }}
          onApply={handleApplyFullJson}
        />
      )}
    </section>
  );
}
