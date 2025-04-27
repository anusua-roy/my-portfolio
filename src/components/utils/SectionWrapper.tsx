// src/components/SectionWrapper.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function SectionWrapper({
  children,
  id,
}: {
  children: ReactNode;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.section>
  );
}
