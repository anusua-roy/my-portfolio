"use client";

import { useState } from "react";
// import { useProjectsStore } from "@/store/projectsStore";
import { formatISO } from "date-fns";

// ✅ Define Props Interface cleanly
interface AddProjectFormProps {
  onClose: () => void;
}

export default function AddProjectForm({ onClose }: AddProjectFormProps) {
  // const { addProject } = useProjectsStore();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [techStack, setTechStack] = useState("");
  const [visibility, setVisibility] = useState<"Public" | "Private">("Private");
  const [liveUrl, setLiveUrl] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [status, setStatus] = useState<"In Progress" | "On Hold" | "Completed">(
    "In Progress"
  );
  const [lastWorkedOn, setLastWorkedOn] = useState("");

  const handleSave = () => {
    if (!title.trim() || !description.trim()) return;

    // addProject({
    //   id: Date.now().toString(),
    //   title,
    //   description,
    //   techStack: techStack.split(",").map((tech) => tech.trim()),
    //   visibility,
    //   liveUrl: liveUrl.trim() || undefined,
    //   githubUrl: githubUrl.trim() || undefined,
    //   status,
    //   lastWorkedOn: lastWorkedOn
    //     ? formatISO(new Date(lastWorkedOn))
    //     : undefined,
    // });

    onClose();
    resetForm();
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setTechStack("");
    setVisibility("Private");
    setLiveUrl("");
    setGithubUrl("");
    setStatus("In Progress");
    setLastWorkedOn("");
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold mb-4">Add New Project</h2>

      <input
        type="text"
        placeholder="Project Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded text-sm"
      />
      <textarea
        placeholder="Project Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={3}
        className="border p-2 rounded text-sm"
      />
      <input
        type="text"
        placeholder="Tech Stack (comma separated)"
        value={techStack}
        onChange={(e) => setTechStack(e.target.value)}
        className="border p-2 rounded text-sm"
      />
      <select
        value={visibility}
        onChange={(e) => setVisibility(e.target.value as "Public" | "Private")}
        className="border p-2 rounded text-sm"
      >
        <option value="Public">Public</option>
        <option value="Private">Private</option>
      </select>
      <input
        type="url"
        placeholder="Live URL (optional)"
        value={liveUrl}
        onChange={(e) => setLiveUrl(e.target.value)}
        className="border p-2 rounded text-sm"
      />
      <input
        type="url"
        placeholder="GitHub URL (optional)"
        value={githubUrl}
        onChange={(e) => setGithubUrl(e.target.value)}
        className="border p-2 rounded text-sm"
      />
      <select
        value={status}
        onChange={(e) =>
          setStatus(e.target.value as "In Progress" | "On Hold" | "Completed")
        }
        className="border p-2 rounded text-sm"
      >
        <option value="In Progress">In Progress</option>
        <option value="On Hold">On Hold</option>
        <option value="Completed">Completed</option>
      </select>
      <input
        type="date"
        value={lastWorkedOn}
        onChange={(e) => setLastWorkedOn(e.target.value)}
        className="border p-2 rounded text-sm"
      />

      <div className="flex justify-end gap-3 mt-6">
        <button
          onClick={onClose}
          className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 text-sm"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white text-sm"
        >
          Save
        </button>
      </div>
    </div>
  );
}
