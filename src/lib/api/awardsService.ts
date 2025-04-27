// src/lib/api/awardsService.ts

import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { AwardItem } from "@/store/awardsStore";

export async function fetchAwards(): Promise<AwardItem[]> {
  const ref = collection(db, "awards");
  const snap = await getDocs(ref);

  if (snap.empty) {
    return [];
  }

  const awards: AwardItem[] = snap.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      title: data.title || "",
      issuer: data.issuer || "",
      date: data.date || "",
      description: data.description || "",
    };
  });

  return awards;
}
