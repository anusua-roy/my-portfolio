"use client";

import { useEffect } from "react";
import { useAdminDetailsStore } from "@/store/adminDetailsStore";
import { useProjectsStore } from "@/store/projectsStore";
import { useSkillsStore } from "@/store/skillsStore";
import { useCertificationsStore } from "@/store/certificationsStore";
import { useEducationStore } from "@/store/educationStore";
import { useExperienceStore } from "@/store/experienceStore";
import { useAwardsStore } from "@/store/awardsStore";

export default function DataPreloader() {
  const { heroHeading, heroName, fetchDetails } = useAdminDetailsStore();
  const { projects, fetchProjects } = useProjectsStore();
  const { skills, fetchSkills } = useSkillsStore();
  const { certifications, fetchCertifications } = useCertificationsStore();
  const { education, fetchEducation } = useEducationStore();
  const { experience, fetchExperience } = useExperienceStore();
    const { awards, fetchAwards } = useAwardsStore();

  useEffect(() => {
    async function preloadData() {
      const promises: Promise<any>[] = [];

      if (!heroHeading && !heroName) promises.push(fetchDetails());
      if (projects.length === 0) promises.push(fetchProjects());
      if (skills.length === 0) promises.push(fetchSkills());
      if (certifications.length === 0) promises.push(fetchCertifications());
      if (education.length === 0) promises.push(fetchEducation());
      if (experience.length === 0) promises.push(fetchExperience());
      if (awards.length === 0) promises.push(fetchAwards());

      await Promise.all(promises);
    }

    preloadData();
  }, []);

  return null; // no visible UI
}
