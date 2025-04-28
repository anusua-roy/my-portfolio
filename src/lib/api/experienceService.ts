// src/lib/api/experienceService.ts

import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { ExperienceItem } from "@/store/experienceStore";

function parseEndDate(duration: string): Date {
  const parts = duration.split("–");
  const endPart = parts[1]?.trim();
  if (!endPart) return new Date(0);

  if (endPart.toLowerCase() === "present") {
    // Treat "Present" as far future date so it comes first
    return new Date(3000, 0, 1); // 1st Jan 3000
  }

  const normalizedEnd = endPart.match(/\d{4}$/) ? `01 ${endPart}` : endPart;
  const parsedDate = new Date(normalizedEnd);

  return isNaN(parsedDate.getTime()) ? new Date(0) : parsedDate;
}

export async function fetchExperience(): Promise<ExperienceItem[]> {
  const ref = collection(db, "experience");
  const snap = await getDocs(ref);

  if (snap.empty) {
    return [];
  }

  const experience: ExperienceItem[] = snap.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      title: data.title || "",
      company: data.company || "",
      location: data.location || "",
      duration: data.duration || "",
      points: data.points || [],
    };
  });

  const sortedExperience = experience.sort((a, b) => {
    const endA = parseEndDate(a.duration);
    const endB = parseEndDate(b.duration);
    return endB.getTime() - endA.getTime(); // latest first
  });

  return sortedExperience;
}
