import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header className="w-full border-b border-zinc-200 dark:border-zinc-800 py-4 px-4 sm:px-6 bg-white dark:bg-zinc-900">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Eurin<span className="text-indigo-600 dark:text-indigo-400">Hash</span>.blog
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/blog" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:underline">
            Blog
          </Link>
          <Link href="/a-propos" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:underline">
            À propos
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
