"use client";

import { useAuth } from "@/context/AuthContext";
import DashboardSidebar from "./DashboardSidebar";

type Role = "driver" | "client" | "corporate" | "car-hire" | "admin";


export default function DashboardLayout({
  children,
  role,
}: {
  children: React.ReactNode;
  role: Role;
}) {
  const { user } = useAuth();

  const titles = {
    driver: "Driver Dashboard",
    client: "Client Dashboard",
    corporate: "Corporate Dashboard",
    "car-hire": "Car Hire Dashboard",
    admin: "Admin Dashboard",
  };

  return (
    <div className="min-h-screen flex bg-slate-50">

      {/* Sidebar */}
      <DashboardSidebar role={role} />

      {/* Main */}
      <main className="flex-1 flex flex-col">

        {/* Header */}
        <header className="bg-white border-b border-slate-200 p-6 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-slate-800">
            {titles[role]}
          </h1>

          <span className="text-sm text-slate-600">
            Welcome, {user?.first_name || role}
          </span>
        </header>

        {/* Page Content */}
        <div className="p-6">{children}</div>

      </main>
    </div>
  );
}