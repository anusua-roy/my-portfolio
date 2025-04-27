import { create } from "zustand";
import { fetchCertifications } from "@/lib/api/certificationsService";

type Certification = {
  name: string;
  year: number;
};

type CertificationsState = {
  certifications: Certification[];
  loading: boolean;
  error: string | null;
  fetchCertifications: () => Promise<void>;
  setCertifications: (newCertifications: Certification[]) => void;
};

export const useCertificationsStore = create<CertificationsState>((set) => ({
  certifications: [],
  loading: false,
  error: null,

  async fetchCertifications() {
    set({ loading: true, error: null });
    try {
      const data = await fetchCertifications();
      set({ certifications: data, loading: false });
    } catch (error) {
      console.error("Failed to fetch certifications:", error);
      set({ loading: false, error: "Failed to fetch certifications." });
    }
  },

  setCertifications(newCertifications) {
    set({ certifications: newCertifications });
  },
}));
