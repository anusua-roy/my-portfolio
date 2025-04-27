import { InsightType, BASE_PRIORITIES } from "./insightTypes";

export function calculatePriority({
  type,
  deltaCount = 0,
  monthsElapsed = 0,
}: {
  type: InsightType;
  deltaCount?: number;
  monthsElapsed?: number;
}): number {
  const base = BASE_PRIORITIES[type];
  let bonus = 0;

  if (type === "SkillUpdate") bonus += deltaCount * 5; // 5 points per project
  if (type === "ResumeUpdate" && monthsElapsed > 6)
    bonus += (monthsElapsed - 6) * 10; // 10 points after 6 months
  if (type === "ProjectAction") bonus += 5;
  if (type === "VisibilityChange") bonus += 10;

  return base + bonus;
}
