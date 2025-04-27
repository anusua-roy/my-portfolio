"use client";

import { motion } from "framer-motion";
import GoogleSignInButton from "@/components/ui/GoogleSignInButton";

export default function SignInPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-4"
      >
        Sign in to Manage your Portfolio
      </motion.h1>

      {/* Animated Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-sm text-gray-500 dark:text-gray-400 max-w-md"
      >
        Please sign in with your Google account to access the Admin portal.
      </motion.p>

      <GoogleSignInButton />
    </section>
  );
}
