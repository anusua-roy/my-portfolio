"use client";

import { useSession } from "next-auth/react";
import GoogleSignInButton from "@/components/ui/GoogleSignInButton"; // correct path

export default function AdminPage() {
  const { data: session, status } = useSession();
  const isLoggedIn = status === "authenticated";

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
    <section className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Admin Dashboard</h1>

      {/* Admin dashboard cards will go here */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card: Manage Details */}
        {/* Card: Manage Projects */}
        {/* Card: Manage Certifications */}
        {/* Card: Manage Education */}
      </div>
    </section>
  );
}
