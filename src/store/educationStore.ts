import { create } from "zustand";
import { fetchEducation } from "@/lib/api/educationService";

type Education = {
  degree: string;
  school: string;
  year: string;
};

type EducationState = {
  education: Education[];
  loading: boolean;
  error: string | null;
  fetchEducation: () => Promise<void>;
  setEducation: (newEducation: Education[]) => void;
};

export const useEducationStore = create<EducationState>((set) => ({
  education: [],
  loading: false,
  error: null,

  async fetchEducation() {
    set({ loading: true, error: null });
    try {
      const data = await fetchEducation();
      set({ education: data, loading: false });
    } catch (error) {
      console.error("Failed to fetch education:", error);
      set({ loading: false, error: "Failed to fetch education." });
    }
  },

  setEducation(newEducation) {
    set({ education: newEducation });
  },
}));
