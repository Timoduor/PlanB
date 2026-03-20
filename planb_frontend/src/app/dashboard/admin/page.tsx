"use client";

export default function AdminDashboard() {
  return (
    <div className="p-6">
      {/* Admin Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-l-4 border-l-blue-500">
          <h3 className="text-slate-700 text-xs font-semibold uppercase tracking-wider">Total Drivers</h3>
          <p className="text-3xl font-black text-slate-800 mt-2">1,248</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-l-4 border-l-indigo-500">
          <h3 className="text-slate-700 text-xs font-semibold uppercase tracking-wider">Registered Cars</h3>
          <p className="text-3xl font-black text-slate-800 mt-2">432</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-l-4 border-l-green-500">
          <h3 className="text-slate-700 text-xs font-semibold uppercase tracking-wider">Active Jobs</h3>
          <p className="text-3xl font-black text-slate-800 mt-2">56</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-l-4 border-l-yellow-500">
          <h3 className="text-slate-700 text-xs font-semibold uppercase tracking-wider">Pending Verifications</h3>
          <p className="text-3xl font-black text-slate-800 mt-2">24</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h2 className="text-lg font-bold text-slate-800">Recent Registrations</h2>
        </div>
        <div className="p-0 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                <th className="p-4 font-medium">User</th>
                <th className="p-4 font-medium">Role</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-4">John Doe <br/><span className="text-xs text-slate-400">john@example.com</span></td>
                <td className="p-4"><span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs font-medium">DRIVER</span></td>
                <td className="p-4"><span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-medium">Unverified</span></td>
                <td className="p-4 text-right">
                  <button className="text-indigo-600 hover:text-indigo-900 text-sm font-medium">Review Docs</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
