"use client";

import { SOCIAL_LINKS, FOOTER_CTA, FOOTER_NOTE } from "@/lib/data";
import { ICONS } from "@/components/utils/SocialIcons";
import CTAButton from "@/components/ui/button/CTAButton";
import { FaCode } from "react-icons/fa"; // ✅ Add this
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="border-t py-6 text-center text-sm space-y-3"
      style={{
        borderColor: "var(--card-border)",
        color: "var(--muted)",
      }}
    >
      <div className="flex flex-wrap justify-center items-center gap-4">
        {SOCIAL_LINKS.map(({ href, icon }) => {
          const IconComponent = ICONS[icon as keyof typeof ICONS];
          return (
            <a
              key={icon}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-blue-600 transition"
              aria-label={icon}
              style={{
                color: "var(--foreground)",
              }}
            >
              <IconComponent />
            </a>
          );
        })}

        {/* ✅ Coding icon for Admin */}
        <Link
          href="/admin"
          className="text-xl hover:text-blue-600 transition"
          title="Developer Access"
          aria-label="Developer Access"
          style={{
            color: "var(--foreground)",
          }}
        >
          <FaCode />
        </Link>

        {/* CTA Button */}
        <CTAButton href={FOOTER_CTA.href} label={FOOTER_CTA.label} />
      </div>

      <p>{FOOTER_NOTE}</p>
    </footer>
  );
}
