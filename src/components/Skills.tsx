// src/components/Skills.tsx

import { SKILLS } from "@/lib/data";

export default function Skills() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-8 text-center">Skills & Tools</h2>
      <div className="space-y-6">
        {SKILLS.map((section) => (
          <div key={section.category}>
            <h3 className="font-semibold text-lg mb-2">{section.category}</h3>
            <ul className="flex flex-wrap gap-2 text-sm">
              {section.items.map((item) => (
                <li
                  key={item}
                  className="px-3 py-1 rounded-full bg-gray-100 text-gray-800"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
