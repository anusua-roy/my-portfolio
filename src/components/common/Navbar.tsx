"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/data";
import ThemeToggle from "@/components/common/ThemeToggle";
import clsx from "clsx";
import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi"; // reuse existing icon lib

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur bg-opacity-70 border-b transition-colors duration-300"
      style={{
        backgroundColor: "var(--background)",
        borderColor: "var(--card-border)",
        color: "var(--foreground)",
      }}
    >
      <nav className="max-w-6xl mx-auto p-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Anusua Roy
        </Link>

        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <HiChevronUp size={20} /> : <HiChevronDown size={20} />}
          </button>
        </div>

        <div
          className={clsx(
            "md:flex gap-4 items-center text-sm font-medium",
            isOpen ? "flex flex-col mt-4" : "hidden",
            "md:flex"
          )}
        >
          {NAV_LINKS.map(({ label, href, external }) => {
            const isResume = label.toLowerCase() === "resume";

            const commonClass = clsx(
              "hover:text-blue-600 transition text-sm",
              isResume && "md:pl-2 md:border-l",
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
