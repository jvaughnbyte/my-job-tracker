type JobFiltersProps = {
  search: string;
  statusFilter: string;
  setSearch: (value: string) => void;
  setStatusFilter: (value: string) => void;
};

export default function JobFilters({
  search,
  statusFilter,
  setSearch,
  setStatusFilter,
}: JobFiltersProps) {
    
  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-4">
      <input
        className="bg-gray-900 border border-gray-800 px-3 py-2 rounded w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Search jobs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="bg-gray-900 border border-gray-800 px-3 py-2 rounded"
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="saved">Saved</option>
        <option value="applied">Applied</option>
        <option value="interview">Interview</option>
        <option value="offer">Offer</option>
        <option value="rejected">Rejected</option>
      </select>
    </div>
  );
}