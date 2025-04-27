export type InsightType =
  | "SkillUpdate"
  | "ResumeUpdate"
  | "ProjectAction"
  | "VisibilityChange";

export const BASE_PRIORITIES: Record<InsightType, number> = {
  SkillUpdate: 80,
  ResumeUpdate: 50,
  ProjectAction: 70,
  VisibilityChange: 90,
};
