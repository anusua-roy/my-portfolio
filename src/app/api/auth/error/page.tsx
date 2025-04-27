"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PrimaryButton from "@/components/ui/button/PrimaryButton";
import CTAButton from "@/components/ui/button/CTAButton";
import { motion } from "framer-motion";

function ErrorContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  let errorMessage = "Something went wrong. Please try again.";
  if (error === "AccessDenied") {
    errorMessage = "Access Denied. You do not have permission.";
  } else if (error === "Configuration") {
    errorMessage = "Authentication configuration error.";
  } else if (error === "OAuthAccountNotLinked") {
    errorMessage = "Email already linked with a different provider.";
  } else if (error === "Verification") {
    errorMessage = "Verification failed.";
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      {/* Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        {/* Sad Face Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-blue-600 dark:text-blue-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 14c-1.333 0-2 .667-2 2h4c0-1.333-.667-2-2-2zm0-10a9 9 0 100 18 9 9 0 000-18zm-3 7h.01M15 11h.01"
          />
        </svg>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-4"
      >
        Authentication Error
      </motion.h1>

      {/* Error Message */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-lg text-gray-600 dark:text-gray-400"
      >
        {errorMessage}
      </motion.p>

      {/* Action Buttons */}
      <div className="flex gap-4 justify-center">
        <PrimaryButton href="/api/auth/signin" label="Retry Sign In" />
        <CTAButton href="/" label="Go Back Home" />
      </div>
    </section>
  );
}

export default function AuthErrorPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <ErrorContent />
    </Suspense>
  );
}
