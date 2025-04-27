"use client";

import { motion } from "framer-motion";
import { useAdminDetailsStore } from "@/store/adminDetailsStore";

const STAGGER = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 + 0.3, duration: 0.5 },
  }),
};

export default function About({ id }: { id?: string }) {
  const { aboutText } = useAdminDetailsStore();
  const lines = aboutText.trim().split("\n").filter(Boolean);

  return (
    <motion.section
      id={id}
      className="px-4 py-20 max-w-4xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <div className="space-y-4 max-w-4xl mx-auto">
        {lines.map((line, i) => (
          <motion.p
            key={i}
            custom={i}
            variants={STAGGER}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg leading-relaxed"
          >
            {line.trim()}
          </motion.p>
        ))}
      </div>
    </motion.section>
  );
}
