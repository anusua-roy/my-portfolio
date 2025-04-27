"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaLock } from "react-icons/fa";

export type Project = {
  title: string;
  description: string;
  techStack: string[];
  categories?: string[];
  domain?: string;
  visibility?: string; // ✅ New key
  liveUrl?: string;
  githubUrl?: string;
  extraRepos?: { label: string; url: string }[];
  isPrivate?: boolean;
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
      {/* Title with optional lock icon */}
      <div className="flex items-center gap-2 mb-2">
        <h3
          className="text-xl font-semibold"
          style={{ color: "var(--accent)" }}
        >
          {project.title}
        </h3>
        {project.isPrivate && (
          <FaLock size={14} title="Private Repo" className="text-gray-500" />
        )}
      </div>

      {/* Description */}
      <p className="mb-2">{project.description}</p>

      {/* Domain + Visibility Badges */}
      <div className="flex flex-wrap gap-2 text-xs mb-3">
        {project.domain && (
          <span
            className="px-2 py-1 rounded-full border"
            style={{
              borderColor: "var(--tag-bg)",
              color: "var(--tag-text)",
            }}
          >
            🏷️ {project.domain}
          </span>
        )}
        {project.visibility && (
          <span
            className={`px-2 py-1 rounded-full ${
              project.visibility === "Private"
                ? "bg-gray-700 text-gray-300"
                : "bg-green-100 text-green-800"
            }`}
          >
            {project.visibility}
          </span>
        )}
      </div>

      {/* Categories */}
      {(project.categories ?? []).length > 0 && (
        <div className="flex flex-wrap gap-2 text-xs mb-4">
          {project.categories?.map((cat) => (
            <span
              key={cat}
              className="px-2 py-1 border rounded-full"
              style={{
                borderColor: "var(--tag-bg)",
                color: "var(--accent)",
              }}
            >
              {cat}
            </span>
          ))}
        </div>
      )}

      {/* Tech Stack */}
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

      {/* Links Section */}
      <div className="flex flex-col gap-2 mt-auto text-sm">
        <div className="flex gap-4">
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
          {project.githubUrl && !project.isPrivate && (
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
          {project.isPrivate && (
            <span className="flex items-center gap-1 text-gray-400 italic">
              Private Repo <FaLock size={14} />
            </span>
          )}
        </div>

        {/* Extra Repos */}
        {(project.extraRepos ?? []).length > 0 && (
          <div className="flex flex-col gap-1 mt-1">
            {(project.extraRepos??[]).map((repo) => (
              <a
                key={repo.url}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs flex items-center gap-1 hover:underline"
                style={{ color: "var(--card-text)" }}
              >
                {repo.label} <FaGithub size={14} />
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
