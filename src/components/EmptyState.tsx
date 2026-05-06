import { Link } from "react-router-dom";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
  <h2 className="text-xl font-semibold">No jobs yet</h2>
  <p className="text-gray-400">Start tracking your applications.</p>

  <Link to="/addJobs">
    <button className="mt-4 px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">
      + Add Job
    </button>
  </Link>
</div>
  );
}

