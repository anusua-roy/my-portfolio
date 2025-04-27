import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function fetchCertifications(): Promise<
  { id: string; name: string; year: number }[]
> {
  const ref = collection(db, "certifications");
  const snap = await getDocs(ref);

  if (snap.empty) {
    return [];
  }

  const certifications = snap.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      name: data.name || "", // ✅ fill defaults
      year: data.year || 2024, // ✅ fallback year
    };
  });

  return certifications;
}
