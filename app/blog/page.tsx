import { Suspense } from 'react'
import BlogPosts from '@/components/BlogPosts'
import Pagination from '@/components/Pagination'
import Breadcrumb from '@/components/Breadcrumb'
import LoadingSpinner from '@/components/LoadingSpinner'

// Données d'exemple - à remplacer par vos vraies données
const samplePosts = [
  {
    title: "Introduction à Next.js 14",
    description: "Découvrez les nouvelles fonctionnalités de Next.js 14 et comment elles peuvent améliorer vos applications web modernes.",
    slug: "introduction-nextjs-14",
    date: "2024-01-15",
    readingTime: "5 min",
    tags: ["Next.js", "React", "Web Development"],
    coverImage: "/images/nextjs-14.jpg"
  },
  {
    title: "Guide complet TypeScript",
    description: "Maîtrisez TypeScript pour vos projets React et découvrez les meilleures pratiques pour un code plus robuste.",
    slug: "guide-typescript",
    date: "2024-01-10",
    readingTime: "8 min",
    tags: ["TypeScript", "JavaScript", "Programming"],
    coverImage: "/images/typescript-guide.jpg"
  },
  {
    title: "Optimisation des performances web",
    description: "Techniques avancées pour améliorer les performances de vos applications web et offrir une meilleure expérience utilisateur.",
    slug: "optimisation-performances-web",
    date: "2024-01-05",
    readingTime: "12 min",
    tags: ["Performance", "Web Development", "Optimization"],
    coverImage: "/images/web-performance.jpg"
  },
  {
    title: "Sécurité des applications modernes",
    description: "Les bonnes pratiques de sécurité à appliquer dans vos applications web modernes pour protéger vos utilisateurs.",
    slug: "securite-applications-modernes",
    date: "2024-01-01",
    readingTime: "10 min",
    tags: ["Security", "Web Development", "Best Practices"],
    coverImage: "/images/web-security.jpg"
  },
  {
    title: "Architecture cloud avec AWS",
    description: "Guide pratique pour concevoir et déployer des architectures cloud scalables avec Amazon Web Services.",
    slug: "architecture-cloud-aws",
    date: "2023-12-28",
    readingTime: "15 min",
    tags: ["AWS", "Cloud", "Architecture"],
    coverImage: "/images/aws-architecture.jpg"
  },
  {
    title: "Cybersécurité pour développeurs",
    description: "Les fondamentaux de la cybersécurité que tout développeur devrait connaître pour créer des applications sécurisées.",
    slug: "cybersecurite-developpeurs",
    date: "2023-12-20",
    readingTime: "18 min",
    tags: ["Security", "Development", "Best Practices"],
    coverImage: "/images/cybersecurity.jpg"
  }
]

interface BlogPageProps {
  searchParams: { page?: string }
}

// Composant asynchrone pour charger les données
async function BlogContent({ searchParams }: BlogPageProps) {
  const currentPage = parseInt(searchParams.page || '1')
  const postsPerPage = 6
  const totalPages = Math.ceil(samplePosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const currentPosts = samplePosts.slice(startIndex, endIndex)

  // Simulation d'un délai de chargement (à supprimer en production)
  await new Promise(resolve => setTimeout(resolve, 800))

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <section className="w-full bg-transparent">
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-12 my-0">
          <Breadcrumb items={[{ label: 'Blog' }]} />
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              Blog
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400">
              Découvrez nos articles sur le développement web, la cybersécurité et les technologies modernes.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <Suspense fallback={<LoadingSpinner text="Chargement des articles..." />}>
              <BlogPosts posts={currentPosts} />
            </Suspense>
          </div>
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              basePath="/blog"
            />
          )}
        </div>
      </section>
    </div>
  )
}

// Composant de fallback pour la page entière
function BlogPageFallback() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-zinc-200 dark:bg-zinc-700 rounded w-1/4 mb-4"></div>
          <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-2/3 mb-8"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 overflow-hidden">
                <div className="aspect-video bg-zinc-200 dark:bg-zinc-700"></div>
                <div className="p-6 space-y-4">
                  <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-3/4"></div>
                  <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-full"></div>
                  <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function BlogPage(props: BlogPageProps) {
  return (
    <Suspense fallback={<BlogPageFallback />}>
      <BlogContent {...props} />
    </Suspense>
  )
} 