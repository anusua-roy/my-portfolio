"use client";

import { motion } from "framer-motion";
import { useExperienceStore } from "@/store/experienceStore";

export default function Experience() {
  const { experience } = useExperienceStore();

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
        {experience.map(({ company, title, duration, points }, idx) => (
          <div key={`${company}-${idx}`}>
            <h3 className="text-xl font-semibold text-blue-600">
              {title} @ {company}
            </h3>
            <p className="text-sm text-gray-500 mb-2">{duration}</p>
            <ul className="list-disc list-inside space-y-1">
              {points.map((point: string, i: number) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
