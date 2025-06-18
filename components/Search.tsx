'use client'

import { useState, useEffect } from 'react'
import Fuse from 'fuse.js'
import { Search as SearchIcon, X } from 'lucide-react'

interface SearchResult {
  title: string
  description: string
  slug: string
  date: string
}

interface SearchProps {
  posts: SearchResult[]
  inputRef?: React.RefObject<HTMLInputElement | null>
}

export default function Search({ posts, inputRef }: SearchProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const fuse = new Fuse(posts, {
    keys: ['title', 'description'],
    threshold: 0.3,
    includeScore: true,
  })

  useEffect(() => {
    if (query.length > 0) {
      const searchResults = fuse.search(query).map(result => result.item)
      setResults(searchResults)
      setIsOpen(true)
    } else {
      setResults([])
      setIsOpen(false)
    }
  }, [query, posts])

  return (
    <div className="relative">
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Rechercher un article..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10 pr-10 py-2 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ref={inputRef}
        />
        {query && (
          <button
            onClick={() => {
              setQuery('')
              setIsOpen(false)
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {results.map((result, index) => (
            <a
              key={index}
              href={`/blog/${result.slug}`}
              className="block p-4 hover:bg-zinc-50 dark:hover:bg-zinc-700 border-b border-zinc-100 dark:border-zinc-600 last:border-b-0"
            >
              <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                {result.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                {result.description}
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-2">
                {new Date(result.date).toLocaleDateString('fr-FR')}
              </p>
            </a>
          ))}
        </div>
      )}
    </div>
  )
} 