import Image from "next/image";
import BlogCard from '@/components/BlogCard'
import Link from 'next/link'
import { ArrowRight, Sparkles, TrendingUp, Clock, Users } from 'lucide-react'

// Données d'exemple pour les articles récents
const recentPosts = [
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
    title: "Sécurité des applications web modernes",
    description: "Les meilleures pratiques pour sécuriser vos applications web contre les attaques courantes et protéger vos utilisateurs.",
    slug: "securite-applications-web",
    date: "2024-01-03",
    readingTime: "10 min",
    tags: ["Sécurité", "Web Development", "Cybersécurité"],
    coverImage: "/images/web-security.jpg"
  },
  {
    title: "Architecture cloud avec AWS",
    description: "Guide pratique pour concevoir et déployer des architectures cloud scalables et performantes sur AWS.",
    slug: "architecture-cloud-aws",
    date: "2023-12-28",
    readingTime: "15 min",
    tags: ["AWS", "Cloud", "Architecture"],
    coverImage: "/images/aws-architecture.jpg"
  },
  {
    title: "Docker pour les développeurs",
    description: "Maîtrisez Docker pour containeriser vos applications et simplifier vos déploiements en production.",
    slug: "docker-developpeurs",
    date: "2023-12-25",
    readingTime: "7 min",
    tags: ["Docker", "DevOps", "Containers"],
    coverImage: "/images/docker-guide.jpg"
  },
  {
    title: "React Server Components",
    description: "Comprendre et utiliser les Server Components de React pour des applications plus performantes.",
    slug: "react-server-components",
    date: "2023-12-20",
    readingTime: "9 min",
    tags: ["React", "Server Components", "Performance"],
    coverImage: "/images/react-server.jpg"
  },
  {
    title: "API REST vs GraphQL",
    description: "Comparaison détaillée entre REST et GraphQL pour choisir la meilleure approche pour vos APIs.",
    slug: "rest-vs-graphql",
    date: "2023-12-18",
    readingTime: "11 min",
    tags: ["API", "GraphQL", "REST"],
    coverImage: "/images/api-comparison.jpg"
  }
]

// Articles en vedette
const featuredPosts = recentPosts.slice(0, 3)

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      {/* Hero Section amélioré */}
      <section className="relative py-24 px-4 sm:px-6 w-full overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-indigo-900/20"></div>
        
        {/* Pattern décoratif */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        {/* Contenu centré mais sans max-w-7xl */}
        <div className="relative w-full text-center px-4 sm:px-6 flex flex-col items-center justify-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            Blog technique moderne
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 leading-tight">
            Bienvenue sur le blog d'
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Eurin Hash
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 mb-12 max-w-4xl mx-auto leading-relaxed">
            Découvrez des articles approfondis sur l'architecture cloud, la cybersécurité, 
            le développement web et les technologies modernes qui façonnent le futur du web.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
              <TrendingUp className="w-5 h-5 text-indigo-500" />
              <span className="font-medium">+50 articles</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
              <Users className="w-5 h-5 text-indigo-500" />
              <span className="font-medium">+10k lecteurs</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
              <Clock className="w-5 h-5 text-indigo-500" />
              <span className="font-medium">Mise à jour hebdo</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explorer les articles
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/a-propos"
              className="inline-flex items-center px-8 py-4 border-2 border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all duration-200 hover:scale-105"
            >
              À propos
            </Link>
          </div>
        </div>
      </section>

      {/* Articles en vedette */}
      <section className="py-20 px-4 sm:px-6 w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              Articles en vedette
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Nos articles les plus populaires et les plus récents pour vous tenir à jour des dernières tendances.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {featuredPosts.map((post, index) => (
              <div key={post.slug} className={`${index === 0 ? 'lg:col-span-2' : ''}`}>
                <BlogCard {...post} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tous les articles récents */}
      <section className="py-20 px-4 sm:px-6 w-full bg-white dark:bg-zinc-800">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                Tous les articles
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                Découvrez notre collection complète d'articles techniques
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium group"
            >
              Voir tout
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {recentPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA améliorée */}
      <section className="py-20 px-4 sm:px-6 w-full bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="w-full max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Restez à jour avec nos derniers articles
          </h2>
          <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">
            Recevez nos articles directement dans votre boîte mail. Pas de spam, juste du contenu de qualité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-6 py-4 border-0 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="px-8 py-4 bg-white text-indigo-600 rounded-xl hover:bg-indigo-50 transition-colors font-medium">
              S'abonner
            </button>
          </div>
          <p className="text-indigo-200 text-sm mt-4">
            Désabonnement en un clic. Vos données sont protégées.
          </p>
        </div>
      </section>
    </div>
  );
}
