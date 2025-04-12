"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export type Project = {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      className="rounded-xl border shadow-md p-6 flex flex-col justify-between transition-colors duration-300"
      style={{
        backgroundColor: "var(--card-bg)",
        borderColor: "var(--card-border)",
        color: "var(--card-text)",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <h3
        className="text-xl font-semibold mb-2"
        style={{ color: "var(--accent)" }}
      >
        {project.title}
      </h3>

      <p className="mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 text-sm mb-4">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 rounded"
            style={{
              backgroundColor: "var(--tag-bg)",
              color: "var(--tag-text)",
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-auto text-sm">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center gap-1"
            style={{ color: "var(--accent)" }}
          >
            Live <FaExternalLinkAlt size={14} />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 flex items-center gap-1"
            style={{ color: "var(--card-text)" }}
          >
            GitHub <FaGithub size={16} />
          </a>
        )}
      </div>
    </motion.div>
  );
}
