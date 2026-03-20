"use client";

import { useAuth } from "@/context/AuthContext";

export default function ClientDashboard() {
  const { user } = useAuth();

  return (
    <div className="p-6">

      <h1 className="text-2xl font-semibold text-slate-800">
        Client Dashboard
      </h1>

      <p className="text-slate-700 mt-2">
        Welcome {user?.first_name || "Client"}
      </p>

      <p className="text-slate-600 mt-4">
        Manage your cars, find jobs, or request drivers.
      </p>

    </div>
  );
}