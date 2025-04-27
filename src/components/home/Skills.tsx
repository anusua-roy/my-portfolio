"use client";

import { useSkillsStore } from "@/store/skillsStore";

export default function Skills() {
  const { skills } = useSkillsStore();

  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-8 text-center">Skills & Tools</h2>

      {skills.length === 0 ? (
        <p className="text-center text-gray-500">Loading skills...</p>
      ) : (
        <div className="space-y-6">
          {skills.map((section) => (
            <div key={section.category}>
              <h3 className="font-semibold text-lg mb-2">{section.category}</h3>
              <ul className="flex flex-wrap gap-2 text-sm">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
