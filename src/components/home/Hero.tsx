"use client";

import { motion } from "framer-motion";
import PrimaryButton from "../ui/PrimaryButton";
import { HERO_HEADING, HERO_NAME, HERO_CTA, TAGLINE_LINES } from "@/lib/data";

const STAGGER = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 + 0.4, duration: 0.6 },
  }),
};

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32 px-4 max-w-3xl mx-auto bg-inherit">
      <motion.h1
        className="text-4xl sm:text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {HERO_HEADING} <span className="text-blue-600">{HERO_NAME}</span>
      </motion.h1>

      {/* Line-by-line animated tagline */}
      <div className="text-lg space-y-2 mb-8">
        {TAGLINE_LINES.map((line, i) => (
          <motion.p
            key={i}
            className="leading-relaxed"
            initial="hidden"
            animate="visible"
            variants={STAGGER}
            custom={i}
          >
            {line}
          </motion.p>
        ))}
      </div>

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        {HERO_CTA.map(({ label, href, outline }) => (
          <PrimaryButton
            key={label}
            href={href}
            label={label}
            outline={outline}
          />
        ))}
      </motion.div>
    </section>
  );
}
