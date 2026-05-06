import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getOneJob } from "../lib/jobs";
import ErrorState from "../components/ErrorState";

export default function JobDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    data: job,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["job", id],
    queryFn: () => getOneJob(id!),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="p-4 animate-pulse space-y-4">
        <div className="h-6 bg-gray-300 w-1/2"></div>
        <div className="h-4 bg-gray-300 w-1/3"></div>
        <div className="h-4 bg-gray-300 w-1/4"></div>
        <div className="h-20 bg-gray-300"></div>
      </div>
    );
  }

  if (error) {
    return (
      <ErrorState
        message="Could not load this job"
        onRetry={() => window.location.reload()}
      />
    );
  }

  if (!job) return <p className="text-white p-4">Job not found</p>;

  return (
    <div className="p-6 text-white space-y-3">
      <h1 className="text-2xl font-bold">{job.title}</h1>

      <p className="text-gray-300">{job.company}</p>
      <p className="text-gray-400">{job.location}</p>

      <p>Status: {job.status}</p>
      <p>Salary: ${job.salary}</p>

      {job.notes && <p>Notes: {job.notes}</p>}

      {job.link && (
        <a
          href={job.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline"
        >
          View Job Posting
        </a>
      )}

      <div className="pt-4">
        <button
          onClick={() => navigate(-1)}
          className="px-3 py-1 bg-gray-800 rounded hover:bg-gray-700"
        >
          ← Back
        </button>
      </div>
    </div>
  );
}