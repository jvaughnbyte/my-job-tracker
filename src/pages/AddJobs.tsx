import useAddJobForm from "../hooks/useAddJobForm";

export default function AddJobs() {
  const {
    company, setCompany, title, setTitle, location, setLocation,
    salary, setSalary, status, setStatus, notes, setNotes,
    link, setLink, loading, handleSubmit,
  } = useAddJobForm();

  return (
    <div className="px-4 sm:px-0">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-gray-900 p-6 rounded-lg border border-gray-800 space-y-5"
      >

        {/* Company */}
        <div className="space-y-1">
          <label className="text-sm text-gray-400">Company</label>
          <input
            className="input"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        {/* Title */}
        <div className="space-y-1">
          <label className="text-sm text-gray-400">Title</label>
          <input
            className="input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Location */}
        <div className="space-y-1">
          <label className="text-sm text-gray-400">Location</label>
          <input
            className="input"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* Salary */}
        <div className="space-y-1">
          <label className="text-sm text-gray-400">Salary</label>
          <input
            type="number"
            className="input"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>

        {/* Status */}
        <div className="space-y-1">
          <label className="text-sm text-gray-400">Status</label>
          <select
            className="input"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="saved">Select status</option>
            <option value="applied">Applied</option>
            <option value="interview">Interview</option>
            <option value="offer">Offer</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        {/* Notes */}
        <div className="space-y-1">
          <label className="text-sm text-gray-400">Notes</label>
          <textarea
            className="input h-24 resize-none"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        {/* Link */}
        <div className="space-y-1">
          <label className="text-sm text-gray-400">Application Link</label>
          <input
            className="input"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 hover:bg-blue-600 transition text-white py-2 rounded font-medium disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Add Job"}
        </button>

      </form>
    </div>
  );
}