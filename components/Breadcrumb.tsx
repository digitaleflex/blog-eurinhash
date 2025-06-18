import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-zinc-600 dark:text-zinc-400 mb-6">
      <Link
        href="/"
        className="flex items-center hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
      >
        <Home className="w-4 h-4" />
        <span className="sr-only">Accueil</span>
      </Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight className="w-4 h-4" />
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-zinc-900 dark:text-zinc-100 font-medium">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  )
} 