export function getJobsByStatus(jobs: any[]) {
  const counts: Record<string, number> = {
    saved: 0,
    applied: 0,
    interview: 0,
    offer: 0,
    rejected: 0,
  };

  jobs.forEach((job) => {
    if (job.status && counts[job.status] !== undefined) {
      counts[job.status]++;
    }
  });

  return counts;
}