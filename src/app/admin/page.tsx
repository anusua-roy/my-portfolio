"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import GoogleSignInButton from "@/components/GoogleSignInButton";

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
    <section className="max-w-4xl mx-auto py-20 px-4 text-center">
      <h1 className="text-3xl font-bold mb-6">
        Welcome, {session.user?.name?.split(" ")[0]} 👋
      </h1>
      <p className="text-sm text-gray-500 mb-10">
        You are now authenticated to manage portfolio content.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center mb-10">
        {[
          { label: "Update Resume", icon: "📄" },
          { label: "Manage Certifications", icon: "🎓" },
          { label: "Edit Projects", icon: "🧩" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-xl border px-6 py-6 flex flex-col items-center gap-2 transition-colors duration-300"
            style={{
              backgroundColor: "var(--card-bg)",
              borderColor: "var(--card-border)",
              color: "var(--foreground)",
            }}
          >
            <div className="text-2xl">{item.icon}</div>
            <div className="font-medium">{item.label}</div>
            <div className="text-xs text-gray-500 italic">Coming soon</div>
          </div>
        ))}
      </div>

      <button
        onClick={() => signOut()}
        className="px-4 py-2 rounded border border-gray-400 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        Sign out
      </button>
    </section>
  );
}
