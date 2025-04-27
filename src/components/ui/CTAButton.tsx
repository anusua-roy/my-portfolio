// src/components/CTAButton.tsx
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

interface CTAButtonProps {
  href: string;
  label: string;
  className?: string;
}

export default function CTAButton({
  href,
  label,
  className = "",
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium transition transform hover:translate-x-0.5 ${className}`}
    >
      {label}
      <FiArrowRight className="text-base" />
    </Link>
  );
}
