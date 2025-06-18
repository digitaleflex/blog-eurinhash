"use client"

import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import Search from "./Search";
import { navItems } from "./navItems";
import { Menu, X, ChevronDown, Search as SearchIcon } from "lucide-react";
import React from "react";
import { usePathname } from "next/navigation";

// Données d'exemple pour la recherche - à remplacer par vos vraies données
const samplePosts = [
  {
    title: "Introduction à Next.js 14",
    description: "Découvrez les nouvelles fonctionnalités de Next.js 14",
    slug: "introduction-nextjs-14",
    date: "2024-01-15"
  },
  {
    title: "Guide complet TypeScript",
    description: "Maîtrisez TypeScript pour vos projets React",
    slug: "guide-typescript",
    date: "2024-01-10"
  }
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [submenuOpen, setSubmenuOpen] = React.useState<string | null>(null);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const searchInputRef = React.useRef<HTMLInputElement>(null);

  // Gère l'ouverture au focus
  React.useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  return (
    <header className={`w-full bg-white dark:bg-zinc-900 z-50 sticky top-0 left-0 right-0 backdrop-blur supports-[backdrop-filter]:bg-white/90 supports-[backdrop-filter]:dark:bg-zinc-900/90 shadow-sm ${pathname !== '/' ? 'border-b border-zinc-200 dark:border-zinc-800' : ''}`}>
      <div className="w-full max-w-screen-2xl mx-auto flex items-center px-4 sm:px-8 py-4">
        {/* Logo à gauche */}
        <Link href="/" className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 flex-shrink-0">
          Eurin<span className="text-indigo-600 dark:text-indigo-400">Hash</span>.blog
        </Link>

        {/* Menu principal (flex-1, aligné à gauche, gap-6) */}
        <nav className="hidden lg:flex flex-1 items-center gap-6 ml-8 min-w-0 overflow-x-auto">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setSubmenuOpen(item.label)}
                onMouseLeave={() => setSubmenuOpen(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors font-medium text-zinc-700 dark:text-zinc-200 whitespace-nowrap">
                  {item.icon && <item.icon className="w-4 h-4 mr-1" />}
                  {item.label}
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {/* Dropdown fluide */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 min-w-[220px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-lg py-2 z-50 transition-all ${submenuOpen === item.label ? 'block' : 'hidden'}`}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href || '#'}
                      className="flex items-center gap-2 px-4 py-2 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded transition-colors"
                    >
                      {child.icon && <child.icon className="w-4 h-4 mr-1" />}
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href || '#'}
                className="flex items-center gap-2 px-3 py-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors font-medium text-zinc-700 dark:text-zinc-200 whitespace-nowrap"
              >
                {item.icon && <item.icon className="w-4 h-4 mr-1" />}
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Zone droite : recherche discrète + thème + burger */}
        <div className="flex-shrink-0 flex items-center gap-2 ml-4">
          {/* Recherche discrète */}
          <div
            className={`relative hidden md:block transition-all duration-200 ${searchOpen ? 'w-56' : 'w-10'}`}
            onMouseEnter={() => setSearchOpen(true)}
            onMouseLeave={() => setSearchOpen(false)}
          >
            <button
              className={`absolute left-0 top-0 h-10 w-10 flex items-center justify-center rounded bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors z-10 ${searchOpen ? 'pointer-events-none opacity-0' : ''}`}
              onClick={() => setSearchOpen(true)}
              tabIndex={-1}
              aria-label="Ouvrir la recherche"
            >
              <SearchIcon className="w-5 h-5 text-zinc-500" />
            </button>
            <div className={`transition-all duration-200 ${searchOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <Search posts={[]} inputRef={searchInputRef} />
            </div>
          </div>
          <ModeToggle />
          {/* Burger menu mobile */}
          <button
            className="lg:hidden ml-2 p-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800"
            onClick={() => setMobileOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Overlay menu mobile */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 flex flex-col">
          <div className="bg-white dark:bg-zinc-900 w-full max-w-xs h-full p-6 shadow-xl relative">
            <button
              className="absolute top-4 right-4 p-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800"
              onClick={() => setMobileOpen(false)}
              aria-label="Fermer le menu"
            >
              <X className="w-6 h-6" />
            </button>
            <nav className="mt-8 flex flex-col gap-2">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label} className="flex flex-col">
                    <span className="flex items-center font-semibold text-zinc-700 dark:text-zinc-200 mb-1">
                      {item.icon && <item.icon className="w-4 h-4 mr-1" />}
                      {item.label}
                    </span>
                    <div className="pl-3 flex flex-col gap-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href || '#'}
                          className="flex items-center gap-2 py-2 text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.icon && <child.icon className="w-4 h-4 mr-1" />}
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href || '#'}
                    className="flex items-center gap-2 py-2 text-zinc-700 dark:text-zinc-200 font-medium hover:text-indigo-600 dark:hover:text-indigo-400"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.icon && <item.icon className="w-4 h-4 mr-1" />}
                    {item.label}
                  </Link>
                )
              )}
            </nav>
            <div className="mt-8">
              <ModeToggle />
            </div>
          </div>
          <div className="flex-1" onClick={() => setMobileOpen(false)} />
        </div>
      )}
    </header>
  );
}
