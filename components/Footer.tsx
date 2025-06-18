export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 py-6 mt-10 text-center text-sm text-zinc-500 dark:text-zinc-400 bg-white dark:bg-zinc-900">
      <p>
        © {new Date().getFullYear()} Eurin HASH • Construit avec ❤️ et Next.js
      </p>
    </footer>
  );
}
