export default function RequestDriverPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-slate-800">Request a Driver</h1>

      <form className="mt-6 max-w-xl space-y-4">

        <input
          type="text"
          placeholder="Pickup Location"
          className="w-full border border-slate-200 rounded-lg p-3"
        />

        <input
          type="text"
          placeholder="Destination"
          className="w-full border border-slate-200 rounded-lg p-3"
        />

        <input
          type="datetime-local"
          className="w-full border border-slate-200 rounded-lg p-3"
        />

        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
        >
          Submit Request
        </button>

      </form>
    </div>
  );
}