import { create } from "zustand";
import { fetchProjects } from "@/lib/api/projectsService";

export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  status: string;
  categories?: string[];
  domain?: string;
  visibility?: string;
  liveUrl?: string;
  githubUrl?: string;
  extraRepos?: { label: string; url: string }[];
  isPrivate?: boolean;
  lastWorkedOn?: string;
};

type ProjectsState = {
  projects: Project[];
  loading: boolean;
  error: string | null;
  fetchProjects: () => Promise<void>;
  setProjects: (newProjects: Project[]) => void;
};

export const useProjectsStore = create<ProjectsState>((set) => ({
  projects: [],
  loading: false,
  error: null,

  async fetchProjects() {
    set({ loading: true, error: null });
    try {
      const data = await fetchProjects();
      set({ projects: data, loading: false });
    } catch (error) {
      console.error("Failed to fetch projects:", error);
      set({ loading: false, error: "Failed to fetch projects." });
    }
  },

  setProjects(newProjects) {
    set({ projects: newProjects });
  },
}));
