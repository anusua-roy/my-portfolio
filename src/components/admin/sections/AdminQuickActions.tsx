"use client";

import {
  FaProjectDiagram,
  FaDatabase,
  FaTools,
  FaUserEdit,
  FaInfoCircle,
  FaBriefcase,
  FaCertificate,
} from "react-icons/fa";

export function AdminQuickActions({
  onActionClick,
}: {
  onActionClick: (action: string) => void;
}) {
  const actions = [
    { title: "Create New Project", icon: FaProjectDiagram },
    { title: "Update Taglines", icon: FaUserEdit },
    { title: "Edit About Me", icon: FaInfoCircle },
    { title: "Add New Certification", icon: FaCertificate },
    { title: "Upload Resume", icon: FaTools },
    { title: "Edit Portfolio Section by Section", icon: FaBriefcase },
    { title: "Manage Full Data (JSON)", icon: FaDatabase },
  ];

  return (
    <div>
      {/* Updated Section Title */}
      <h2 className="text-xl font-semibold mb-4">Manage Your Portfolio</h2>

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
