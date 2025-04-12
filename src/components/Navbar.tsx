"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";
import clsx from "clsx";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur bg-opacity-70 border-b transition-colors duration-300"
      style={{
        backgroundColor: "var(--background)",
        borderColor: "var(--card-border)",
        color: "var(--foreground)",
      }}
    >
      <nav className="flex items-center justify-between max-w-6xl mx-auto p-4">
        <Link href="/" className="text-xl font-bold">
          Anusua Roy
        </Link>
        <div className="flex items-center gap-4 text-sm font-medium">
          {NAV_LINKS.map(({ label, href, external }) => {
            const isResume = label.toLowerCase() === "resume";

            const commonClass = clsx(
              "hover:text-blue-600 transition text-sm",
              isResume && "pl-2 border-l",
              pathname === href && "text-blue-600 font-semibold"
            );

            const style = isResume
              ? { borderColor: "var(--card-border)" }
              : undefined;

            return external ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={commonClass}
                style={style}
              >
                {label}
              </a>
            ) : (
              <Link
                key={label}
                href={href}
                className={commonClass}
                style={style}
              >
                {label}
              </Link>
            );
          })}

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
