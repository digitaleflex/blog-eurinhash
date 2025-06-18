import { Suspense } from 'react'
import BlogCard from './BlogCard'
import LoadingSpinner from './LoadingSpinner'

interface BlogPost {
  title: string
  description: string
  slug: string
  date: string
  readingTime?: string
  tags?: string[]
  coverImage?: string
}

interface BlogPostsProps {
  posts: BlogPost[]
  loading?: boolean
}

// Composant pour simuler un délai de chargement (pour la démo)
async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// Composant asynchrone pour charger les articles
async function BlogPostsContent({ posts }: { posts: BlogPost[] }) {
  // Simulation d'un délai de chargement (à supprimer en production)
  await delay(1000)
  
  return (
    <div className="flex flex-col gap-8">
      {posts.map((post) => (
        <BlogCard key={post.slug} {...post} />
      ))}
    </div>
  )
}

// Composant de fallback pour Suspense
function BlogPostsFallback() {
  return (
    <div className="flex flex-col gap-8">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 overflow-hidden animate-pulse w-full">
          <div className="aspect-video bg-zinc-200 dark:bg-zinc-700"></div>
          <div className="p-6 space-y-4">
            <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-3/4"></div>
            <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-full"></div>
            <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-2/3"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function BlogPosts({ posts, loading = false }: BlogPostsProps) {
  if (loading) {
    return <LoadingSpinner text="Chargement des articles..." />
  }

  return (
    <Suspense fallback={<BlogPostsFallback />}>
      <BlogPostsContent posts={posts} />
    </Suspense>
  )
} 