// src/components/Experience.tsx
"use client";

import { EXPERIENCE } from "@/lib/data";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="max-w-4xl mx-auto px-4 py-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
      <div className="space-y-8">
        {EXPERIENCE.map(({ company, title, duration, points }) => (
          <div key={company}>
            <h3 className="text-xl font-semibold text-blue-600">
              {title} @ {company}
            </h3>
            <p className="text-sm text-gray-500 mb-2">{duration}</p>
            <ul className="list-disc list-inside space-y-1">
              {points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
