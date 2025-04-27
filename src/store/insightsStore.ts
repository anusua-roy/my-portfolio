import { create } from "zustand";

type DismissedInsight = {
  id: string;
  dismissedAt: Date;
  triggerSnapshot: any; // For example project count when dismissed
};

interface InsightsStore {
  dismissedInsights: DismissedInsight[];
  dismissInsight: (id: string, snapshot: any) => void;
  isDismissed: (id: string, snapshot: any) => boolean;
}

export const useInsightsStore = create<InsightsStore>((set, get) => ({
  dismissedInsights: [],
  dismissInsight: (id, snapshot) =>
    set((state) => ({
      dismissedInsights: [
        ...state.dismissedInsights,
        { id, dismissedAt: new Date(), triggerSnapshot: snapshot },
      ],
    })),
  isDismissed: (id, snapshot) => {
    const match = get().dismissedInsights.find((insight) => insight.id === id);
    if (!match) return false;
    // Check if trigger snapshot is still same (ex: same project count)
    return JSON.stringify(match.triggerSnapshot) === JSON.stringify(snapshot);
  },
}));
