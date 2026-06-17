import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-200 bg-white/90">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-sm font-semibold text-slate-900">VoyaTrail</p>
          <p className="mt-2 max-w-md text-sm text-slate-500">
            Curated destination escapes with warm design, flexible planning, and booking support that keeps travel simple.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
          <Link href="#destinations" className="hover:text-slate-900">
            Explore destinations
          </Link>
          <Link href="#booking" className="hover:text-slate-900">
            Start booking
          </Link>
          <span>© 2026 VoyaTrail</span>
        </div>
      </div>
    </footer>
  );
}
