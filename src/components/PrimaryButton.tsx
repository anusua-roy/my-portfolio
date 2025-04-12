// src/components/PrimaryButton.tsx
"use client";

import Link from "next/link";
import clsx from "clsx";

interface PrimaryButtonProps {
  href?: string;
  label: string;
  outline?: boolean;
  type?: "button" | "submit";
  className?: string;
}

export default function PrimaryButton({
  href,
  label,
  outline = false,
  type = "button",
  className,
}: PrimaryButtonProps) {
  const baseClass = clsx(
    "inline-block px-6 py-2 rounded font-medium transition-colors duration-300",
    outline
      ? "border border-current text-blue-600 hover:bg-blue-100"
      : "bg-blue-600 text-white hover:bg-blue-700",
    className
  );

  if (href) {
    return (
      <Link href={href} className={baseClass}>
        {label}
      </Link>
    );
  }

  return (
    <button type={type} className={baseClass}>
      {label}
    </button>
  );
}
