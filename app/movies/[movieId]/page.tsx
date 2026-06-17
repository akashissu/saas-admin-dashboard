import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MovieBookingPanel } from '@/components/MovieBookingPanel';
import { getMovieById } from '@/lib/data';

export default async function MovieDetailsPage({
  params,
}: {
  params: Promise<{ movieId: string }>;
}) {
  const { movieId } = await params;
  const movie = getMovieById(movieId);

  if (!movie) {
    notFound();
  }

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <Link href="/" className="text-sm font-medium text-sky-300 hover:text-sky-200">
        ← Back to movies
      </Link>

      <section className={`glass-panel overflow-hidden rounded-[2rem] bg-gradient-to-br ${movie.backdropGradient}`}>
        <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[260px_1fr] lg:items-center">
          <div className={`flex h-80 items-end rounded-[2rem] bg-gradient-to-br ${movie.posterGradient} p-6 shadow-2xl shadow-slate-950/40`}>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/80">Poster</p>
              <p className="mt-3 text-5xl font-black text-white">{movie.posterLabel}</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-sky-200/90">Movie details</p>
            <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{movie.title}</h1>
            <p className="mt-4 text-base text-sky-100/80">
              {movie.genre} · {movie.runtime} · {movie.releaseYear} · ★ {movie.rating.toFixed(1)}
            </p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-100/85">{movie.synopsis}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/15 bg-slate-950/25 p-4">
                <p className="text-sm text-slate-400">Director</p>
                <p className="mt-2 font-semibold text-white">{movie.director}</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-slate-950/25 p-4">
                <p className="text-sm text-slate-400">Cast</p>
                <p className="mt-2 font-semibold text-white">{movie.cast.join(', ')}</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-slate-950/25 p-4">
                <p className="text-sm text-slate-400">Languages</p>
                <p className="mt-2 font-semibold text-white">{movie.languages.join(' · ')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MovieBookingPanel movie={movie} />
    </div>
  );
}
