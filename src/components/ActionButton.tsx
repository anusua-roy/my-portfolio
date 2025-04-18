// src/components/ActionButton.tsx
import { ButtonHTMLAttributes } from "react";

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function ActionButton({
  children,
  className = "",
  ...props
}: ActionButtonProps) {
  return (
    <button
      {...props}
      className={`inline-flex items-center gap-2 text-sm font-medium hover:opacity-80
        text-[var(--accent)]
        ${className}`}
    >
      {children}
    </button>
  );
}

