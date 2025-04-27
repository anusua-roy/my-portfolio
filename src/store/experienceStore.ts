// src/store/experienceStore.ts

"use client";

import { create } from "zustand";
import { fetchExperience } from "@/lib/api/experienceService";

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location?: string;
  duration: string;
  points: string[];
}

interface ExperienceState {
  experience: ExperienceItem[];
  loading: boolean;
  error: string | null;
  fetchExperience: () => Promise<void>;
  setExperience: (data: ExperienceItem[]) => void;
}

export const useExperienceStore = create<ExperienceState>((set) => ({
  experience: [],
  loading: false,
  error: null,

  async fetchExperience() {
    set({ loading: true, error: null });
    try {
      const data = await fetchExperience();
      set({ experience: data, loading: false, error: null });
    } catch (error) {
      console.error("Failed to fetch experience:", error);
      set({ loading: false, error: "Failed to fetch experience" });
    }
  },

  setExperience(data) {
    set({ experience: data });
  },
}));
