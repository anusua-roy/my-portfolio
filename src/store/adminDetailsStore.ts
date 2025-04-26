"use client";

import { create } from "zustand";
import { fetchAdminDetails } from "@/lib/api/adminDetailsService";

interface AdminDetailsState {
  heroHeading: string;
  heroName: string;
  taglineLine1: string;
  taglineLine2: string;
  highlights: string;
  aboutText: string;
  resumeUrl: string;
  email: string;
  loading: boolean;
  error: string | null;
  fetchDetails: () => Promise<void>;
  setDetails: (data: Partial<AdminDetailsState>) => void;
}

export const useAdminDetailsStore = create<AdminDetailsState>((set) => ({
  heroHeading: "",
  heroName: "",
  taglineLine1: "",
  taglineLine2: "",
  highlights: "",
  aboutText: "",
  resumeUrl: "",
  email: "",
  loading: false,
  error: null,

  async fetchDetails() {
    set({ loading: true, error: null });
    try {
      const data = await fetchAdminDetails();
      set({
        heroHeading: data.heroHeading || "",
        heroName: data.heroName || "",
        taglineLine1: data.taglineLine1 || "",
        taglineLine2: data.taglineLine2 || "",
        highlights: data.highlights || "",
        aboutText: data.aboutText || "",
        resumeUrl: data.resumeUrl || "",
        email: data.email || "",
        loading: false,
        error: null,
      });
    } catch (error) {
      console.error("Failed to fetch admin details:", error);
      set({ loading: false, error: "Failed to fetch details." });
    }
  },

  setDetails(data) {
    set(data);
  },
}));
