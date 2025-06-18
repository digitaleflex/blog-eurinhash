import LoadingSpinner from '@/components/LoadingSpinner'

export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {/* Breadcrumb skeleton */}
        <div className="mb-6">
          <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-1/3 animate-pulse"></div>
        </div>

        {/* Header skeleton */}
        <div className="mb-8">
          <div className="h-8 bg-zinc-200 dark:bg-zinc-700 rounded w-1/4 mb-4 animate-pulse"></div>
          <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-2/3 animate-pulse"></div>
        </div>

        {/* Articles skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 overflow-hidden animate-pulse">
              <div className="aspect-video bg-zinc-200 dark:bg-zinc-700"></div>
              <div className="p-6 space-y-4">
                <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-3/4"></div>
                <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-full"></div>
                <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-2/3"></div>
                <div className="h-3 bg-zinc-200 dark:bg-zinc-700 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination skeleton */}
        <div className="flex justify-center">
          <div className="flex space-x-2">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="w-10 h-10 bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 