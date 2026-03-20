"use client";

import { usePathname } from "next/navigation";
import DashboardLayout from "@/components/layout/DashboardLayout";

export default function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const role = pathname.split("/")[2] as "driver" | "client" | "corporate" | "car-hire" | "admin";

  return <DashboardLayout role={role}>{children}</DashboardLayout>;
}