import { useQuery } from "@tanstack/react-query";
import { getJobs } from "../lib/jobs";
import { getJobsByStatus } from "../utils/analytics";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

export default function Analytics() {

  const { data: jobs, isLoading, error } = useQuery({
  queryKey: ["jobs"],
  queryFn: getJobs,
});

const stats = getJobsByStatus(jobs || []);

if (isLoading) return <p>Loading...</p>;
if (error) return <p>Error</p>;

const data = [
  { name: "Saved", value: stats.saved },
  { name: "Applied", value: stats.applied },
  { name: "Interview", value: stats.interview },
  { name: "Offer", value: stats.offer },
  { name: "Rejected", value: stats.rejected },
];

return (
<div>
        <BarChart width={400} height={300} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" />
        </BarChart>
</div>

)}