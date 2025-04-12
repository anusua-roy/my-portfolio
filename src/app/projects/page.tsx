// src/app/projects/page.tsx
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
