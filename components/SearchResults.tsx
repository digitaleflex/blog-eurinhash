import { Suspense } from 'react'
import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'
import LoadingSpinner from './LoadingSpinner'

interface SearchResult {
  title: string
  description: string
  slug: string
  date: string
  readingTime?: string
}

interface SearchResultsProps {
  results: SearchResult[]
  query: string
  loading?: boolean
}

// Composant asynchrone pour les résultats de recherche
async function SearchResultsContent({ results, query }: { results: SearchResult[], query: string }) {
  // Simulation d'un délai de traitement (à supprimer en production)
  await new Promise(resolve => setTimeout(resolve, 500))
  
  if (results.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-zinc-600 dark:text-zinc-400">
          Aucun résultat trouvé pour "{query}"
        </p>
        <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-2">
          Essayez avec d'autres mots-clés
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {results.map((result, index) => (
        <Link
          key={result.slug}
          href={`/blog/${result.slug}`}
          className="block p-4 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:shadow-lg transition-all duration-200 hover:border-indigo-300 dark:hover:border-indigo-600"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="font-medium text-zinc-900 dark:text-zinc-100 mb-2">
                {result.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 line-clamp-2">
                {result.description}
              </p>
              <div className="flex items-center text-xs text-zinc-500 dark:text-zinc-500">
                <Calendar className="w-3 h-3 mr-1" />
                <time dateTime={result.date}>
                  {new Date(result.date).toLocaleDateString('fr-FR')}
                </time>
                {result.readingTime && (
                  <>
                    <span className="mx-2">•</span>
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{result.readingTime}</span>
                  </>
                )}
              </div>
            </div>
            <div className="ml-4 text-xs text-zinc-400">
              #{index + 1}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

// Composant de fallback pour les résultats de recherche
function SearchResultsFallback() {
  return (
    <div className="space-y-4">
      {[...Array(3)].map((_, index) => (
        <div key={index} className="p-4 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg animate-pulse">
          <div className="space-y-3">
            <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-3/4"></div>
            <div className="h-3 bg-zinc-200 dark:bg-zinc-700 rounded w-full"></div>
            <div className="h-3 bg-zinc-200 dark:bg-zinc-700 rounded w-2/3"></div>
            <div className="h-3 bg-zinc-200 dark:bg-zinc-700 rounded w-1/4"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function SearchResults({ results, query, loading = false }: SearchResultsProps) {
  if (loading) {
    return <LoadingSpinner text="Recherche en cours..." />
  }

  return (
    <Suspense fallback={<SearchResultsFallback />}>
      <SearchResultsContent results={results} query={query} />
    </Suspense>
  )
} 