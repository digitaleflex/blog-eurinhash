import Link from 'next/link'
import { Home, ArrowLeft, Search, FileText } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        {/* Icône 404 */}
        <div className="mb-8">
          <div className="relative">
            <div className="text-9xl font-bold text-zinc-200 dark:text-zinc-700 select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-2xl font-semibold text-zinc-600 dark:text-zinc-400">
                Oups !
              </div>
            </div>
          </div>
        </div>

        {/* Message d'erreur */}
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
          Page introuvable
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée. 
          Vérifiez l'URL ou utilisez les liens ci-dessous pour naviguer.
        </p>

        {/* Actions */}
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Home className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Link>

          <div className="grid grid-cols-2 gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-4 py-2 border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
            >
              <FileText className="w-4 h-4 mr-2" />
              Voir le blog
            </Link>
            
            <Link
              href="/a-propos"
              className="inline-flex items-center justify-center px-4 py-2 border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
            >
              <Search className="w-4 h-4 mr-2" />
              À propos
            </Link>
          </div>
        </div>

        {/* Message d'aide */}
        <div className="mt-8 p-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Si vous pensez qu'il s'agit d'une erreur, n'hésitez pas à nous contacter.
          </p>
        </div>
      </div>
    </div>
  )
} 