// src/hooks/useHashScroll.ts
"use client";

import { useEffect } from "react";

export function useHashScroll() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const el = document.querySelector(hash);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, []);
}
