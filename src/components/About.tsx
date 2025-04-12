// src/components/About.tsx
"use client";

import { ABOUT_TEXT } from "@/lib/data";
import { motion } from "framer-motion";

export default function About({ id }: { id?: string }) {
  return (
    <motion.section
      id={id}
      className="max-w-4xl mx-auto px-4 py-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
      <p className="text-lg leading-relaxed">
        {ABOUT_TEXT}
      </p>
    </motion.section>
  );
}
