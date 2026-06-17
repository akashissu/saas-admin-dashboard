import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-4 py-20 text-center sm:px-6 lg:px-8">
      <div className="glass-panel rounded-[2rem] p-10">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">That screening is no longer playing.</h1>
        <p className="mt-4 text-base leading-7 text-slate-300">
          The movie or showtime you requested could not be found. Head back to the browse page and pick another title.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-sky-300"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}
