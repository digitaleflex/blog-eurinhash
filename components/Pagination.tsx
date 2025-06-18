import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  basePath: string
}

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  const pages = []
  const maxVisiblePages = 5

  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1)
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }

  return (
    <nav className="flex items-center justify-center space-x-2 mt-8">
      {/* Bouton précédent */}
      {currentPage > 1 && (
        <Link
          href={currentPage === 2 ? basePath : `${basePath}?page=${currentPage - 1}`}
          className="flex items-center px-3 py-2 text-sm border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Précédent
        </Link>
      )}

      {/* Première page */}
      {startPage > 1 && (
        <>
          <Link
            href={basePath}
            className="px-3 py-2 text-sm border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
          >
            1
          </Link>
          {startPage > 2 && (
            <span className="px-3 py-2 text-sm text-zinc-500">...</span>
          )}
        </>
      )}

      {/* Pages numérotées */}
      {pages.map((page) => (
        <Link
          key={page}
          href={page === 1 ? basePath : `${basePath}?page=${page}`}
          className={`px-3 py-2 text-sm border rounded-lg transition-colors ${
            page === currentPage
              ? 'bg-indigo-600 text-white border-indigo-600'
              : 'border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800'
          }`}
        >
          {page}
        </Link>
      ))}

      {/* Dernière page */}
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && (
            <span className="px-3 py-2 text-sm text-zinc-500">...</span>
          )}
          <Link
            href={`${basePath}?page=${totalPages}`}
            className="px-3 py-2 text-sm border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
          >
            {totalPages}
          </Link>
        </>
      )}

      {/* Bouton suivant */}
      {currentPage < totalPages && (
        <Link
          href={`${basePath}?page=${currentPage + 1}`}
          className="flex items-center px-3 py-2 text-sm border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
        >
          Suivant
          <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      )}
    </nav>
  )
} 