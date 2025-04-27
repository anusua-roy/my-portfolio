"use client";

import {
  FaUserEdit,
  FaUpload,
  FaProjectDiagram,
  FaAward,
  FaGraduationCap,
} from "react-icons/fa";

export function AdminQuickActions({
  onActionClick,
}: {
  onActionClick: (action: string) => void;
}) {
  const actions = [
    { title: "Edit About", icon: FaUserEdit },
    { title: "Upload Resume", icon: FaUpload },
    { title: "Add Project", icon: FaProjectDiagram },
    { title: "Add Certification", icon: FaAward },
    { title: "Add Education", icon: FaGraduationCap },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
      <div className="flex flex-wrap gap-3">
        {actions.map((action) => (
          <button
            key={action.title}
            onClick={() => onActionClick(action.title)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 hover:bg-blue-500/20 text-sm text-blue-700 dark:text-blue-300 transition"
          >
            <action.icon className="w-4 h-4" />
            {action.title}
          </button>
        ))}
      </div>
    </div>
  );
}
