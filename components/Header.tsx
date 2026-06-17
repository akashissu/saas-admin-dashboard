import Link from 'next/link';

const navItems = [
  { href: '#destinations', label: 'Destinations' },
  { href: '#experiences', label: 'Experiences' },
  { href: '#booking', label: 'Booking' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 via-pink-400 to-sky-400 text-lg font-black text-white shadow-lg shadow-orange-200">
            VT
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-orange-500">VoyaTrail</p>
            <p className="text-sm font-semibold text-slate-900">Bright escapes, beautifully planned.</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-orange-50 hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#booking"
          className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-500"
        >
          Book now
        </Link>
      </div>
    </header>
  );
}
