"use client";

import { useEducationStore } from "@/store/educationStore";

export default function Education() {
  const { education } = useEducationStore();

  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">Education</h2>

      <div className="space-y-6">
        {education.map(({ degree, school, year }, idx) => (
          <div
            key={`${degree}-${idx}`}
            className="border-l-4 pl-4 border-blue-600"
          >
            <h3 className="text-lg font-semibold">{degree}</h3>
            <p className="text-sm opacity-80">
              {school} &middot; {year}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
