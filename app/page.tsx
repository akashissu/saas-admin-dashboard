import Link from 'next/link';
import { MovieCard } from '@/components/MovieCard';
import { bookingSteps, featuredMovie, movies } from '@/lib/data';

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.45em] text-sky-300">React movie booking app</p>
          <h1 className="mt-5 max-w-3xl text-balance text-5xl font-semibold leading-tight text-white sm:text-6xl">
            Book the best seats for tonight&apos;s must-watch movies.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Browse fresh releases, compare showtimes across premium theaters, and reserve your favorite seats from a
            sleek mobile-first experience.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href={`/#now-showing`}
              className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-sky-300"
            >
              Browse movies
            </Link>
            <Link
              href={`/movies/${featuredMovie.id}`}
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Open featured movie
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { label: 'Now showing', value: `${movies.length} movies` },
              { label: 'Partner theaters', value: '4 venues' },
              { label: 'Formats', value: 'IMAX · Dolby · 4DX' },
            ].map((item) => (
              <div key={item.label} className="glass-panel rounded-2xl p-4">
                <p className="text-sm text-slate-400">{item.label}</p>
                <p className="mt-2 text-xl font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`glass-panel overflow-hidden rounded-[2rem] border-white/10 bg-gradient-to-br ${featuredMovie.backdropGradient}`}>
          <div className="p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.4em] text-sky-100/80">Featured tonight</p>
            <div className="mt-6 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-3xl font-semibold text-white">{featuredMovie.title}</h2>
                <p className="mt-2 text-sm text-sky-100/80">
                  {featuredMovie.genre} · {featuredMovie.runtime} · ★ {featuredMovie.rating.toFixed(1)}
                </p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-slate-950/20 px-4 py-3 text-center text-white">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-200">Poster</p>
                <p className="mt-2 text-2xl font-black">{featuredMovie.posterLabel}</p>
              </div>
            </div>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-100/85">{featuredMovie.synopsis}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {featuredMovie.showtimes.map((showtime) => (
                <span key={showtime.id} className="rounded-full border border-white/15 bg-slate-950/25 px-4 py-2 text-sm text-white">
                  {showtime.dateLabel} · {showtime.time} · {showtime.format}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="now-showing" className="space-y-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Now showing</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Find a movie worth leaving the couch for</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-400">
            Every title includes quick details, starting ticket prices, and a direct path into seat selection.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 2xl:grid-cols-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      <section id="how-it-works" className="space-y-8">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400">How it works</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">A clear path from discovery to confirmation</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {bookingSteps.map((step, index) => (
            <div key={step.title} className="glass-panel rounded-3xl p-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-400 text-lg font-semibold text-slate-950">
                {index + 1}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
