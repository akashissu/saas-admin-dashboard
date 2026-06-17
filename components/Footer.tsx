import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-sm font-semibold text-white">CineReserve</p>
          <p className="mt-2 max-w-md text-sm text-slate-400">
            Discover films, compare premium theaters, and secure the best seats with a fast mobile-first booking flow.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
          <Link href="/" className="hover:text-white">
            Browse movies
          </Link>
          <Link href="/confirmation" className="hover:text-white">
            Confirmation view
          </Link>
          <span>© 2026 CineReserve</span>
        </div>
      </div>
    </footer>
  );
}
