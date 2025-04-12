"use client";

import { motion } from "framer-motion";
import PrimaryButton from "./PrimaryButton";
import { HERO_HEADING, HERO_NAME, HERO_TAGLINE, HERO_CTA } from "@/lib/data";

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

      <motion.p
        className="text-lg mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {HERO_TAGLINE}
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
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
