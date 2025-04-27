// File: src/app/admin/layout.tsx

"use client";

import { useSession } from "next-auth/react";
import { isLoggedIn } from "@/lib/auth/isLoggedIn";
import { AdminLogin } from "@/components/admin/AdminLogin";
import { AdminHeader } from "@/components/admin/common/AdminHeader";
import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
     const { status } = useSession();

     if (!isLoggedIn(status)) {
       return <AdminLogin />;
     }
  return (
    <div>
      {/* You can add Admin-specific Topbar here later if needed */}
      <AdminHeader />
      {children}
    </div>
  );
}
