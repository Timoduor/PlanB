"use client";

import { useAuth } from "@/context/AuthContext";

export default function CorporateDashboard() {
  const { user } = useAuth();

  return (
    <div className="p-6">

      <h1 className="text-2xl font-semibold text-slate-800">
        Corporate Dashboard
      </h1>

      <p className="text-slate-700 mt-2">
        Welcome {user?.first_name || "Corporate"}
      </p>

      <p className="text-slate-600 mt-4">
        Request drivers or hire vehicles.
      </p>

    </div>
  );
}