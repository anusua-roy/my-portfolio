// src/lib/api/skillsService.ts

import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { SkillCategory } from "@/store/skillsStore";

export async function fetchSkills(): Promise<SkillCategory[]> {
  const ref = collection(db, "skills");
  const snap = await getDocs(ref);

  if (snap.empty) {
    return [];
  }

  const skills: SkillCategory[] = snap.docs.map((doc) => {
    const data = doc.data();
    return {
      category: data.category || "",
      items: data.items || [],
    };
  });

  return skills;
}
