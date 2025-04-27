// src/lib/api/experienceService.ts

import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { ExperienceItem } from "@/store/experienceStore"; // ✅ import type properly

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

  return experience;
}
