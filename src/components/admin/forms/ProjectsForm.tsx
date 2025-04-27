"use client";

import { useState } from "react";
import JsonEditorModal from "@/components/ui/modal/JsonEditorModal";

interface Project {
  title: string;
  description: string;
  techStack: string;
  githubUrl: string;
  liveUrl: string;
  category: string;
  isFeatured: boolean;
  isPrivate: boolean;
}

export default function ProjectsForm() {
  const [projects, setProjects] = useState<Project[]>([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [techStack, setTechStack] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [liveUrl, setLiveUrl] = useState("");
  const [category, setCategory] = useState("Featured");
  const [isFeatured, setIsFeatured] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);

  const [jsonModalOpen, setJsonModalOpen] = useState(false);

  const formData = {
    title,
    description,
    techStack,
    githubUrl,
    liveUrl,
    category,
    isFeatured,
    isPrivate,
  };

  function handleApplyJson(updated: any) {
    if (updated.title !== undefined) setTitle(updated.title);
    if (updated.description !== undefined) setDescription(updated.description);
    if (updated.techStack !== undefined) setTechStack(updated.techStack);
    if (updated.githubUrl !== undefined) setGithubUrl(updated.githubUrl);
    if (updated.liveUrl !== undefined) setLiveUrl(updated.liveUrl);
    if (updated.category !== undefined) setCategory(updated.category);
    if (updated.isFeatured !== undefined) setIsFeatured(updated.isFeatured);
    if (updated.isPrivate !== undefined) setIsPrivate(updated.isPrivate);
  }

  function handleAddProject() {
    if (!title.trim() || !description.trim()) {
      alert("Project must have a title and description.");
      return;
    }

    const newProject: Project = {
      title,
      description,
      techStack,
      githubUrl,
      liveUrl,
      category,
      isFeatured,
      isPrivate,
    };

    setProjects((prev) => [...prev, newProject]);

    // Clear form after adding
    setTitle("");
    setDescription("");
    setTechStack("");
    setGithubUrl("");
    setLiveUrl("");
    setCategory("Featured");
    setIsFeatured(false);
    setIsPrivate(false);
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Edit Projects</h2>
        <button
          onClick={() => setJsonModalOpen(true)}
          className="px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded"
        >
          Import/Export JSON
        </button>
      </div>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Project Title"
        className="w-full p-2 border rounded"
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Project Description"
        rows={3}
        className="w-full p-2 border rounded"
      />

      <input
        type="text"
        value={techStack}
        onChange={(e) => setTechStack(e.target.value)}
        placeholder="Tech Stack (comma separated)"
        className="w-full p-2 border rounded"
      />

      <input
        type="url"
        value={githubUrl}
        onChange={(e) => setGithubUrl(e.target.value)}
        placeholder="GitHub URL"
        className="w-full p-2 border rounded"
      />

      <input
        type="url"
        value={liveUrl}
        onChange={(e) => setLiveUrl(e.target.value)}
        placeholder="Live Demo URL (optional)"
        className="w-full p-2 border rounded"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-2 border rounded"
      >
        <option value="Featured">Featured</option>
        <option value="Minor">Minor</option>
        <option value="AI">AI Project</option>
        <option value="Learning">Learning</option>
      </select>

      <div className="flex items-center gap-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={isFeatured}
            onChange={(e) => setIsFeatured(e.target.checked)}
          />
          Featured
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={isPrivate}
            onChange={(e) => setIsPrivate(e.target.checked)}
          />
          Private
        </label>
      </div>

      <button
        onClick={handleAddProject}
        className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded"
      >
        Add Project
      </button>

      {/* Project List */}
      <div className="space-y-4 mt-10">
        <h3 className="text-xl font-semibold">Added Projects</h3>
        {projects.length === 0 ? (
          <p className="text-gray-500">No projects added yet.</p>
        ) : (
          projects.map((project, idx) => (
            <div key={idx} className="p-4 border rounded">
              <div className="font-bold">{project.title}</div>
              <div className="text-sm text-gray-500">{project.category}</div>
            </div>
          ))
        )}
      </div>

      {/* JSON Editor Modal */}
      <JsonEditorModal
        open={jsonModalOpen}
        onClose={() => setJsonModalOpen(false)}
        initialJson={formData}
        onApply={handleApplyJson}
      />
    </div>
  );
}
