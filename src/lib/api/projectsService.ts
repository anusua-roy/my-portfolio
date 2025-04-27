import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Project } from "@/store/projectsStore"; // ✅ Import correct Project type

export async function fetchProjects(): Promise<Project[]> {
  const ref = collection(db, "projects");
  const snap = await getDocs(ref);

  if (snap.empty) {
    return [];
  }

  const projects: Project[] = snap.docs.map((doc) => {
    const data = doc.data();

    return {
      id: doc.id,
      title: data.title || "",
      description: data.description || "",
      techStack: data.techStack || [],
      status: data.status || "Draft",
      categories: data.categories || [],
      domain: data.domain || "",
      visibility: data.visibility || "Private",
      liveUrl: data.liveUrl || "",
      githubUrl: data.githubUrl || "",
      extraRepos: data.extraRepos || [],
      isPrivate: data.isPrivate || false,
      lastWorkedOn: data.lastWorkedOn || "",
    };
  });

  return projects;
}
