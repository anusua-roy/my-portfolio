"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";

interface GoogleSignInButtonProps {
  text?: string; // default "Sign in with Google"
}

export default function GoogleSignInButton({
  text = "Sign in with Google",
}: GoogleSignInButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => signIn("google")}
      className="flex items-center gap-3 px-6 py-2 rounded-lg border shadow-sm transition transform hover:scale-105 hover:shadow-md
  bg-white dark:bg-gray-900
  border-gray-300 dark:border-gray-700
  text-gray-800 dark:text-gray-100
  hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      <FcGoogle size={22} />
      <span className="font-medium">{text}</span>
    </motion.button>
  );
}
