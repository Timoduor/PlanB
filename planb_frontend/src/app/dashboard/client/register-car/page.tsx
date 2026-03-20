export default function RegisterCarPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-slate-800">Register a Vehicle</h1>

      <form className="mt-6 max-w-xl space-y-4">

        <input
          type="text"
          placeholder="Car Model"
          className="w-full border border-slate-200 rounded-lg p-3"
        />

        <input
          type="text"
          placeholder="License Plate"
          className="w-full border border-slate-200 rounded-lg p-3"
        />

        <select className="w-full border border-slate-200 rounded-lg p-3">
          <option>Transmission Type</option>
          <option>Manual</option>
          <option>Automatic</option>
        </select>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
        >
          Register Car
        </button>

      </form>
    </div>
  );
}