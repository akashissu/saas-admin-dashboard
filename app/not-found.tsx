import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-4 py-20 text-center sm:px-6 lg:px-8">
      <div className="sun-panel rounded-[2rem] p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-500">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">That destination has drifted off the map.</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          The page you requested could not be found. Head back to the landing page to explore available destinations and
          booking options.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-500"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}
