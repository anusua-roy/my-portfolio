// src/lib/api/adminDetailsService.ts
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export async function fetchAdminDetails() {
  const ref = doc(db, "details", "heroSection");
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    throw new Error("Admin Details not found");
  }

  return snap.data();
}
