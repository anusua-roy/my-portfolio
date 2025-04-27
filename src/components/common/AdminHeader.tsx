"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import ThemeToggle from "@/components/common/ThemeToggle";

export function AdminHeader() {
  const { data: session } = useSession();
  const router = useRouter();

  const userName = session?.user?.name?.split(" ")[0] || "Admin";

  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const todayFormatted = today.toLocaleDateString("en-US", options);

  return (
    <header
      className="py-3 sticky top-0 z-50 backdrop-blur bg-opacity-70 border-b transition-colors duration-300"
      style={{
        backgroundColor: "var(--background)",
        borderColor: "var(--card-border)",
        color: "var(--foreground)",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        {/* Left Section: Home Button */}
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-blue-600 hover:underline text-sm"
        >
          <FaArrowLeft className="w-4 h-4" />
          Go Back Home
        </button>

        {/* Center Section: Welcome */}
        <div className="text-center">
          <h1 className="text-lg font-semibold">Welcome, {userName}</h1>
          <p className="text-sm text-muted">{todayFormatted}</p>
        </div>

        {/* Right Section: Theme Toggle + Logout */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => signOut()}
            className="px-3 py-1 rounded-md bg-red-600 hover:bg-red-700 text-white text-xs"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
