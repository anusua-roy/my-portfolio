// src/store/skillsStore.ts

"use client";

import { create } from "zustand";
import { fetchSkills } from "@/lib/api/skillsService";

export interface SkillCategory {
  category: string;
  items: string[];
}

type SkillsState = {
  skills: SkillCategory[];
  loading: boolean;
  error: string | null;
  fetchSkills: () => Promise<void>;
  setSkills: (newSkills: SkillCategory[]) => void;
};

export const useSkillsStore = create<SkillsState>((set) => ({
  skills: [],
  loading: false,
  error: null,

  async fetchSkills() {
    set({ loading: true, error: null });
    try {
      const data = await fetchSkills();
      set({ skills: data, loading: false });
    } catch (error) {
      console.error("Failed to fetch skills:", error);
      set({ loading: false, error: "Failed to fetch skills." });
    }
  },

  setSkills(newSkills) {
    set({ skills: newSkills });
  },
}));
