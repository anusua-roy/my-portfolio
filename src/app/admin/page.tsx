"use client";

import { useSession, signIn } from "next-auth/react";
import { useState } from "react";
import AdminStepper from "@/components/admin/AdminStepper";
import AdminContentArea from "@/components/admin/AdminContentArea";
import GoogleSignInButton from "@/components/GoogleSignInButton";

const STEPS = ["Details", "Projects", "Certifications", "Education"];

export default function AdminPage() {
  const { data: session, status } = useSession();
  const isLoggedIn = status === "authenticated";
  const [activeStep, setActiveStep] = useState(0);

  function handlePrev() {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  }

  function handleNext() {
    setActiveStep((prev) => Math.min(prev + 1, STEPS.length - 1));
  }

  if (!isLoggedIn) {
    return (
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Admin Portal</h1>
        <p className="mb-8 text-sm text-gray-500 dark:text-gray-400 max-w-md">
          You need to sign in with your Google account to access this area.
        </p>
        <GoogleSignInButton />
      </section>
    );
  }

  return (
    <section className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Welcome, {session.user?.name?.split(" ")[0]} 👋
      </h1>

      {/* Stepper */}
      <AdminStepper steps={STEPS} activeStep={activeStep} />

      {/* Content Area */}
      <AdminContentArea activeStep={activeStep} />

      {/* Prev/Next Buttons */}
      <div className="flex justify-between mt-10">
        <button
          onClick={handlePrev}
          disabled={activeStep === 0}
          className="px-4 py-2 rounded border border-gray-400 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={activeStep === STEPS.length - 1}
          className="px-4 py-2 rounded border border-blue-600 text-white bg-blue-600 hover:bg-blue-700 text-sm disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  );
}
