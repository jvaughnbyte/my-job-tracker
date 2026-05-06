import { useQuery } from "@tanstack/react-query";
import { getJobs } from "../lib/jobs";
import { DndContext } from "@dnd-kit/core";
import Column from "../components/Column";
import useDnd from "../hooks/useDnd";
import useAddJobFilters from "../hooks/useAddJobFilters";
import JobFilters from "../components/JobFilters";
import JobCardSkeleton from "../components/skeletons/JobCardSkeleton";
import ErrorState from "../components/ErrorState";
import EmptyState from "../components/EmptyState";



export default function Dashboard() {

    const { data: jobs, isLoading, error } = useQuery({
    queryKey: ["jobs"],
    queryFn: getJobs,
  });

   const { search, statusFilter, setSearch, setStatusFilter, filteredJobs } =
 useAddJobFilters( jobs || [] )
 


const { handleDragEnd } = useDnd()  

  if (isLoading) {
  return (
    <div className="grid grid-cols-5 gap-4">
      {Array.from({ length: 10 }).map((_, i) => (
        <JobCardSkeleton key={i} />
      ))}
    </div>
  );
}
  
if (error) {
  return (
    <ErrorState
      message="Failed to load jobs"
      onRetry={() => window.location.reload()}
    />
  );
}

if ( !jobs || jobs.length === 0 ) {
return <EmptyState />;
  }

  if (filteredJobs.length === 0) {  
    return (
    <div className="pt-4">
        <p>No matching jobs found.</p>
        <JobFilters
              search={search}
              statusFilter={statusFilter}
              setSearch={setSearch}
              setStatusFilter={setStatusFilter}
        />

      </div>
)}
  
const columns = ["saved", "applied", "interview", "offer", "rejected"];


return (
  <div>
  <JobFilters
        search={search}
        statusFilter={statusFilter}
        setSearch={setSearch}
        setStatusFilter={setStatusFilter}
  />
  <DndContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
              {columns.map((status) => (
                <Column
                  key={status}
                  status={status}
                  jobs={filteredJobs.filter((job) => job.status === status)}
                />
              ))}

        </div>
  </DndContext>
  </div>
)}