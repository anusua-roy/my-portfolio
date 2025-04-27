// File: src/components/admin/AdminLogin.tsx

"use client";

import GoogleSignInButton from "@/components/ui/GoogleSignInButton";

export function AdminLogin() {
  return (
        <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl font-bold mb-4">Admin Portal</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
            Please sign in with your Google account to continue.
          </p>
          <GoogleSignInButton />
        </section>
      );
}
