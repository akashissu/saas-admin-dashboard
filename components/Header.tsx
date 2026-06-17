import Link from 'next/link';

const navItems = [
  { href: '/#now-showing', label: 'Now Showing' },
  { href: '/#how-it-works', label: 'How It Works' },
  { href: '/confirmation', label: 'Confirmation' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 via-fuchsia-500 to-indigo-500 text-lg font-black text-white shadow-lg shadow-fuchsia-500/20">
            CR
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-sky-200/80">CineReserve</p>
            <p className="text-sm font-semibold text-white">Movie tickets, minus the queue.</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#now-showing"
          className="inline-flex items-center justify-center rounded-full bg-sky-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-sky-300"
        >
          Book now
        </Link>
      </div>
    </header>
  );
}
