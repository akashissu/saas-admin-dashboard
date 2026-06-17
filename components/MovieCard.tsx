import Link from 'next/link';
import { Movie } from '@/types';

export function MovieCard({ movie }: { movie: Movie }) {
  return (
    <article className="glass-panel group overflow-hidden rounded-3xl">
      <div className={`relative flex h-72 items-end bg-gradient-to-br ${movie.posterGradient} p-6`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.2),_transparent_40%)]" />
        <div className="relative flex w-full items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/80">Featured poster</p>
            <div className="mt-3 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/25 bg-slate-950/20 text-2xl font-black text-white shadow-xl">
              {movie.posterLabel}
            </div>
          </div>
          <span className="rounded-full border border-white/20 bg-slate-950/30 px-3 py-1 text-sm font-medium text-white/90">
            ★ {movie.rating.toFixed(1)}
          </span>
        </div>
      </div>

      <div className="space-y-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold text-white">{movie.title}</h3>
            <p className="mt-1 text-sm text-slate-400">
              {movie.genre} · {movie.runtime} · {movie.releaseYear}
            </p>
          </div>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-sky-200">
            {movie.showtimes.length} shows
          </span>
        </div>

        <p className="text-sm leading-6 text-slate-300">{movie.synopsis}</p>

        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Starting at</p>
            <p className="mt-1 text-lg font-semibold text-white">
              ${Math.min(...movie.showtimes.map((showtime) => showtime.price)).toFixed(2)}
            </p>
          </div>

          <Link
            href={`/movies/${movie.id}`}
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-sky-200"
          >
            View details
          </Link>
        </div>
      </div>
    </article>
  );
}
