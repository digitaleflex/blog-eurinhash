'use client'

import { useEffect, useState } from 'react'
import { ChevronRight } from 'lucide-react'

interface TOCItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  headings: TOCItem[]
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0% -35% 0%' }
    )

    headings.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <nav className="space-y-2">
      <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
        Table des matières
      </h4>
      <ul className="space-y-1">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={`flex items-center text-sm transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${
                activeId === heading.id
                  ? 'text-indigo-600 dark:text-indigo-400 font-medium'
                  : 'text-zinc-600 dark:text-zinc-400'
              }`}
              style={{ paddingLeft: `${(heading.level - 1) * 16}px` }}
            >
              {heading.level > 2 && (
                <ChevronRight className="w-3 h-3 mr-1 flex-shrink-0" />
              )}
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
} 