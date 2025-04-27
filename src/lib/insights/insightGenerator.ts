"use client";

import { calculatePriority } from "./priorityCalculator";
import { useInsightsStore } from "@/store/insightsStore";
import { InsightType } from "./insightTypes";
import { Project } from "@/components/common/ProjectCard"; // Assuming your project type is here
import { differenceInMonths, differenceInDays } from "date-fns"; // small date helper

export type SmartSuggestion = {
  id: string;
  type: InsightType;
  title: string;
  description: string;
  priority: number;
};

export function generateInsights({
  projects,
  lastResumeUpdatedAt,
  hiddenSkills,
  visibleSkills,
}: {
  projects: Project[];
  lastResumeUpdatedAt: string;
  hiddenSkills: string[];
  visibleSkills: string[];
}): SmartSuggestion[] {
  const { isDismissed } = useInsightsStore.getState();
  const today = new Date();
  const insights: SmartSuggestion[] = [];

  // 1️⃣ Skill Update Suggestions
  const skillUsageCount: Record<string, number> = {};

  projects.forEach((project) => {
    project.techStack.forEach((skill) => {
      skillUsageCount[skill] = (skillUsageCount[skill] || 0) + 1;
    });
  });

  hiddenSkills.forEach((skill) => {
    const count = skillUsageCount[skill] || 0;
    if (count >= 2) {
      const id = `skill-${skill.toLowerCase()}`;
      if (!isDismissed(id, { projectCount: count })) {
        insights.push({
          id,
          type: "SkillUpdate",
          title: `Show ${skill} in Skills`,
          description: `You have added ${count} projects using ${skill}.`,
          priority: calculatePriority({
            type: "SkillUpdate",
            deltaCount: count,
          }),
        });
      }
    }
  });

  // 2️⃣ Resume Update Suggestions
  const monthsSinceResume = differenceInMonths(
    today,
    new Date(lastResumeUpdatedAt)
  );
  if (monthsSinceResume >= 6) {
    const id = "resume-update";
    if (!isDismissed(id, { monthsSinceResume })) {
      insights.push({
        id,
        type: "ResumeUpdate",
        title: "Update Resume",
        description: `It’s been ${monthsSinceResume} months since your last resume update.`,
        priority: calculatePriority({
          type: "ResumeUpdate",
          monthsElapsed: monthsSinceResume,
        }),
      });
    }
  }

  // 3️⃣ Project Action Suggestions
  projects.forEach((project) => {
    if (project.liveUrl && project.visibility === "Private") {
      const id = `projectaction-${project.title
        .toLowerCase()
        .replace(/\s+/g, "-")}`;
      if (!isDismissed(id, { projectTitle: project.title })) {
        insights.push({
          id,
          type: "ProjectAction",
          title: `Highlight ${project.title}`,
          description: `Your project "${project.title}" has a live demo ready for showcasing.`,
          priority: calculatePriority({ type: "ProjectAction" }),
        });
      }
    }
  });

  // 4️⃣ Visibility Change Suggestions
  projects.forEach((project) => {
    const hasLiveUrl = !!project.liveUrl;
    const isStillPrivate = project.visibility === "Private";
    const projectUsesVisibleSkill = project.techStack.some((skill) =>
      visibleSkills.includes(skill)
    );

    if (hasLiveUrl && isStillPrivate && projectUsesVisibleSkill) {
      const id = `visibility-${project.title
        .toLowerCase()
        .replace(/\s+/g, "-")}`;
      if (!isDismissed(id, { projectTitle: project.title })) {
        insights.push({
          id,
          type: "VisibilityChange",
          title: `Make ${project.title} Public`,
          description: `Your project "${project.title}" uses visible skills and has a live demo. Make it public?`,
          priority: calculatePriority({ type: "VisibilityChange" }),
        });
      }
    }
  });

  // 📈 Sort by priority descending
  insights.sort((a, b) => b.priority - a.priority);

  return insights;
}
