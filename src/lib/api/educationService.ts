import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function fetchEducation(): Promise<
  { id: string; degree: string; school: string ;year: string}[]
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

  return education;
}
