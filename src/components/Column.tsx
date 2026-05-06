// Column.tsx
import { useDroppable } from "@dnd-kit/core";
import JobCard from "./JobCard";
import type { Job } from "../types/job";

export default function Column({ status, jobs }: { status: string; jobs: Job[] }) {
  const { setNodeRef } = useDroppable({
    id: status,
  });



  return (
    <div ref={setNodeRef} className="p-2 border min-h-[200px]">
      <h2>{status}</h2>

      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}