import { create } from "zustand";

interface FormState {
  isAddProjectOpen: boolean;
  openAddProject: () => void;
  closeAddProject: () => void;
}

export const useFormStore = create<FormState>((set) => ({
  isAddProjectOpen: false,
  openAddProject: () => set({ isAddProjectOpen: true }),
  closeAddProject: () => set({ isAddProjectOpen: false }),
}));
