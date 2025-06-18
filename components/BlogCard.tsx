import Link from 'next/link'
import { Calendar, Clock, Tag } from 'lucide-react'

interface BlogCardProps {
  title: string
  description: string
  slug: string
  date: string
  readingTime?: string
  tags?: string[]
  coverImage?: string
}

export default function BlogCard({
  title,
  description,
  slug,
  date,
  readingTime,
  tags,
  coverImage,
}: BlogCardProps) {
  return (
    <article className="group h-full flex flex-col bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 overflow-hidden hover:shadow-lg transition-all duration-300">
      {coverImage && (
        <div className="aspect-video overflow-hidden">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <div className="flex flex-wrap items-center text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mb-2 sm:mb-3">
          <Calendar className="w-4 h-4 mr-1" />
          <time dateTime={date}>
            {new Date(date).toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          {readingTime && (
            <>
              <span className="mx-2">•</span>
              <Clock className="w-4 h-4 mr-1" />
              <span>{readingTime}</span>
            </>
          )}
        </div>

        <Link href={`/blog/${slug}`}>
          <h2 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2 sm:mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {title}
          </h2>
        </Link>

        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-3 sm:mb-4 line-clamp-3 flex-grow">
          {description}
        </p>

        {tags && tags.length > 0 && (
          <div className="flex items-center flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
            <Tag className="w-4 h-4 text-zinc-400" />
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400 rounded-full whitespace-nowrap overflow-hidden text-ellipsis max-w-[100px] sm:max-w-none"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium text-sm transition-colors"
        >
          Lire l'article
          <svg
            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </article>
  )
} 