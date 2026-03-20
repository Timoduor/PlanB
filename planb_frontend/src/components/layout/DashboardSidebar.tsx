"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

type Role = "driver" | "client" | "corporate" | "car-hire" | "admin";

export default function DashboardSidebar({ role }: { role: Role }) {
  const { logout } = useAuth();

  const links = {
    driver: [
      { href: "/dashboard/driver/jobs", label: "Find Jobs" },
      { href: "/dashboard/driver/fleet", label: "Available Fleet" },
      { href: "/dashboard/driver/history", label: "Ride History" },
      { href: "/dashboard/driver/documents", label: "My Documents" },
    ],
    client: [
      { href: "/dashboard/client/fleet", label: "My Cars" },
      { href: "/dashboard/client/register-car", label: "Register Car" },
      { href: "/dashboard/client/jobs", label: "Find Jobs" },
      { href: "/dashboard/client/request-driver", label: "Request Driver" },
    ],
    corporate: [
      { href: "/dashboard/corporate/post-job", label: "Post Job" },
      { href: "/dashboard/corporate/find-cars", label: "Find Cars" },
      { href: "/dashboard/corporate/drivers", label: "Drivers" },
      { href: "/dashboard/corporate/jobs", label: "My Requests" },
    ],
    "car-hire": [
      { href: "/dashboard/car-hire/fleet", label: "My Fleet" },
      { href: "/dashboard/car-hire/register-car", label: "Register Car" },
      { href: "/dashboard/car-hire/find-drivers", label: "Find Drivers" },
      { href: "/dashboard/car-hire/jobs", label: "Jobs" },
    ],
    admin: [
      { href: "/dashboard/admin/users", label: "Users" },
      { href: "/dashboard/admin/fleet", label: "Fleet" },
      { href: "/dashboard/admin/jobs", label: "Jobs" },
      { href: "/dashboard/admin/payments", label: "Payments" },
    ],
  };

  const titles = {
    driver: "Driver Panel",
    client: "Client Panel",
    corporate: "Corporate Panel",
    "car-hire": "Car Hire Panel",
    admin: "Admin Panel",
  };

  const isDriver = role === "driver";
  const isAdmin = role === "admin";

  return (
    <aside className={`w-64 text-white flex flex-col ${isDriver ? "bg-slate-900" : isAdmin ? "bg-red-900" : "bg-indigo-900"}`}>
      
      <div className={`p-6 border-b ${isDriver ? "border-slate-800" : isAdmin ? "border-red-800" : "border-indigo-800"}`}>
        <h2 className="text-xl font-bold">{titles[role]}</h2>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {links[role].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block p-3 rounded-lg text-white hover:bg-opacity-20 transition ${
              isDriver ? "hover:bg-slate-700" : isAdmin ? "hover:bg-red-800" : "hover:bg-indigo-800"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className={`p-4 border-t ${isDriver ? "border-slate-800" : isAdmin ? "border-red-800" : "border-indigo-800"}`}>
        <button
          onClick={logout}
          className={`w-full text-left p-2 rounded text-white hover:bg-opacity-20 transition ${
            isDriver ? "hover:bg-slate-700" : isAdmin ? "hover:bg-red-800" : "hover:bg-indigo-800"
          }`}
        >
          Logout
        </button>
      </div>
    </aside>
  );
}