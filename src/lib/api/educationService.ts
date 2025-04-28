import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

function parseEndYear(year: string): number {
  const parts = year.split("–");
  const endPart = parts[1]?.trim();
  if (!endPart) return 0; // fallback very old if missing
  const endYear = parseInt(endPart, 10);
  return isNaN(endYear) ? 0 : endYear;
}

export async function fetchEducation(): Promise<
  { id: string; degree: string; school: string; year: string }[]
> {
  const ref = collection(db, "education");
  const snap = await getDocs(ref);

  if (snap.empty) {
    return [];
  }

  const education = snap.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      degree: data.degree || "",
      school: data.school || "",
      year: data.year || "",
    };
  });

  const sortedEducation = education.sort((a, b) => {
    const endA = parseEndYear(a.year);
    const endB = parseEndYear(b.year);
    return endB - endA; // higher year first
  });

  return sortedEducation;
}
