"use client";

import { useAuth } from "@/context/AuthContext";

export default function CarHireDashboard() {
  const { user } = useAuth();

  return (
    <div className="p-6">

      <h1 className="text-2xl font-semibold text-slate-800">
        Car Hire Dashboard
      </h1>

      <p className="text-slate-700 mt-2">
        Welcome {user?.first_name || "Partner"}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <h2 className="font-semibold">My Fleet</h2>
          <p className="text-sm text-slate-500 mt-2">
            Manage all your vehicles
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <h2 className="font-semibold">Find Drivers</h2>
          <p className="text-sm text-slate-500 mt-2">
            Connect with drivers
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <h2 className="font-semibold">Register Car</h2>
          <p className="text-sm text-slate-500 mt-2">
            Add new cars
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <h2 className="font-semibold">Jobs</h2>
          <p className="text-sm text-slate-500 mt-2">
            Manage jobs
          </p>
        </div>

      </div>

    </div>
  );
}