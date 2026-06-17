import Link from 'next/link';
import { ConfirmationCard } from '@/components/ConfirmationCard';
import { calculateBookingTotal, getMovieById, getShowtimeById } from '@/lib/data';

export default async function ConfirmationPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const movieId = typeof params.movieId === 'string' ? params.movieId : '';
  const showtimeId = typeof params.showtimeId === 'string' ? params.showtimeId : '';
  const seatsParam = typeof params.seats === 'string' ? params.seats : '';
  const seats = seatsParam.split(',').filter(Boolean);

  const movie = movieId ? getMovieById(movieId) : undefined;
  const showtime = movie && showtimeId ? getShowtimeById(movie, showtimeId) : undefined;

  if (!movie || !showtime || seats.length === 0) {
    return (
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-14 text-center sm:px-6 lg:px-8">
        <div className="glass-panel rounded-[2rem] p-10">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400">No booking selected</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Choose a movie to generate a confirmation.</h1>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Start from the browse page, pick a showtime, and confirm your seats to view a reservation summary here.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-sky-300"
          >
            Browse movies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-14 sm:px-6 lg:px-8">
      <Link href={`/movies/${movie.id}`} className="text-sm font-medium text-sky-300 hover:text-sky-200">
        ← Back to booking details
      </Link>
      <ConfirmationCard movie={movie} showtime={showtime} seats={seats} total={calculateBookingTotal(showtime, seats)} />
    </div>
  );
}
