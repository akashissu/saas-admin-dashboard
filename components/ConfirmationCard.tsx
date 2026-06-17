import Link from 'next/link';
import { Movie, MovieShowtime } from '@/types';

interface ConfirmationCardProps {
  movie: Movie;
  showtime: MovieShowtime;
  seats: string[];
  total: number;
}

export function ConfirmationCard({ movie, showtime, seats, total }: ConfirmationCardProps) {
  const confirmationCode = `${movie.id.slice(0, 3).toUpperCase()}-${showtime.id.toUpperCase()}-${seats.length}${seats[0] ?? '0'}`;

  return (
    <section className="glass-panel rounded-[2rem] p-8 sm:p-10">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-400/15 text-3xl text-emerald-300">
        ✓
      </div>
      <p className="mt-6 text-xs uppercase tracking-[0.35em] text-emerald-300">Booking confirmed</p>
      <h1 className="mt-3 text-4xl font-semibold text-white">Your seats are locked in.</h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
        We saved your reservation for <span className="font-semibold text-white">{movie.title}</span> at{' '}
        <span className="font-semibold text-white">{showtime.theater}</span>. Arrive 20 minutes early to collect snacks and settle in.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
          <p className="text-sm text-slate-500">Confirmation code</p>
          <p className="mt-2 text-lg font-semibold text-white">{confirmationCode}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
          <p className="text-sm text-slate-500">Showtime</p>
          <p className="mt-2 text-lg font-semibold text-white">{showtime.dateLabel}</p>
          <p className="text-sm text-slate-300">{showtime.time}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
          <p className="text-sm text-slate-500">Seats</p>
          <p className="mt-2 text-lg font-semibold text-white">{seats.join(', ')}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
          <p className="text-sm text-slate-500">Paid total</p>
          <p className="mt-2 text-lg font-semibold text-white">${total.toFixed(2)}</p>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-sky-200"
        >
          Book another movie
        </Link>
        <Link
          href={`/movies/${movie.id}`}
          className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
        >
          Back to movie details
        </Link>
      </div>
    </section>
  );
}
