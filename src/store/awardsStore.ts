// src/store/awardsStore.ts

"use client";

import { create } from "zustand";
import { fetchAwards } from "@/lib/api/awardsService";

export interface AwardItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
}

interface AwardsState {
  awards: AwardItem[];
  loading: boolean;
  error: string | null;
  fetchAwards: () => Promise<void>;
  setAwards: (data: AwardItem[]) => void;
}

export const useAwardsStore = create<AwardsState>((set) => ({
  awards: [],
  loading: false,
  error: null,

  async fetchAwards() {
    set({ loading: true, error: null });
    try {
      const data = await fetchAwards();
      set({ awards: data, loading: false, error: null });
    } catch (error) {
      console.error("Failed to fetch awards:", error);
      set({ loading: false, error: "Failed to fetch awards" });
    }
  },

  setAwards(data) {
    set({ awards: data });
  },
}));
