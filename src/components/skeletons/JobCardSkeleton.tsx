export default function JobCardSkeleton() {
  return (
    <div className="border p-4 rounded animate-pulse space-y-3">

      <div className="h-4 bg-gray-700 rounded w-3/4"></div>

      <div className="h-3 bg-gray-300 rounded w-1/2"></div>

      <div className="h-3 bg-gray-300 rounded w-1/3"></div>

      <div className="flex gap-2 pt-2">
        <div className="h-8 bg-gray-300 rounded w-16"></div>
        <div className="h-8 bg-gray-300 rounded w-16"></div>
      </div>

    </div>
  );
}

