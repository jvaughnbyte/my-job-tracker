export default function ErrorState({
  message = "Something went wrong",
  onRetry,
}: {
  message?: string;
  onRetry?: () => void;
}) {
  
  
    return (
    <div className="flex flex-col items-center justify-center p-6 text-center space-y-4">
      
      <p className="text-red-500 font-semibold">{message}</p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-black text-white rounded"
        >
          Try Again
        </button>
      )}
    </div>
  );
}