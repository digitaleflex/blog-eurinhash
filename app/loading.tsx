export default function Loading() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center">
      <div className="text-center">
        {/* Logo animé */}
        <div className="mb-8">
          <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Eurin<span className="text-indigo-600 dark:text-indigo-400">Hash</span>.blog
          </div>
        </div>

        {/* Spinner */}
        <div className="relative">
          <div className="w-12 h-12 border-4 border-zinc-200 dark:border-zinc-700 border-t-indigo-600 rounded-full animate-spin mx-auto mb-4"></div>
          
          {/* Points de chargement */}
          <div className="flex justify-center space-x-1">
            <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>

        {/* Message de chargement */}
        <p className="text-zinc-600 dark:text-zinc-400 mt-4">
          Chargement en cours...
        </p>
      </div>
    </div>
  )
} 