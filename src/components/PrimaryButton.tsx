// src/components/PrimaryButton.tsx
import Link from "next/link";

interface PrimaryButtonProps {
  href: string;
  label: string;
  outline?: boolean;
}

export default function PrimaryButton({
  href,
  label,
  outline = false,
}: PrimaryButtonProps) {
  return (
    <Link
      href={href}
      className={`px-6 py-2 rounded-full font-medium transition 
        ${
          outline
            ? "border border-blue-600 text-blue-600 hover:bg-blue-50"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
    >
      {label}
    </Link>
  );
}
