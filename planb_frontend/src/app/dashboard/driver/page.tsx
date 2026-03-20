"use client";

import { useAuth } from "@/context/AuthContext";

export default function DriverDashboard() {
  const { user } = useAuth();

  return (
    <div className="p-6">

      <h1 className="text-2xl font-semibold text-slate-800">
        Driver Dashboard
      </h1>

<p className="text-slate-700 mt-2">
        Welcome {user?.first_name || "Driver"}
      </p>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <h3 className="text-sm text-slate-700">Completed Rides</h3>
          <p className="text-2xl font-bold mt-2">12</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <h3 className="text-sm text-slate-700">Pending Applications</h3>
          <p className="text-2xl font-bold mt-2">3</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <h3 className="text-sm text-slate-700">Earnings</h3>
          <p className="text-2xl font-bold mt-2">KES 15,000</p>
        </div>
      </div>

    </div>
  );
}