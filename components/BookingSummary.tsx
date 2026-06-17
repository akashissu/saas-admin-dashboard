import { Movie, MovieShowtime } from '@/types';

interface BookingSummaryProps {
  movie: Movie;
  showtime: MovieShowtime;
  selectedSeats: string[];
  subtotal: number;
  serviceFee: number;
  total: number;
  onConfirm: () => void;
}

export function BookingSummary({
  movie,
  showtime,
  selectedSeats,
  subtotal,
  serviceFee,
  total,
  onConfirm,
}: BookingSummaryProps) {
  const isDisabled = selectedSeats.length === 0;

  return (
    <aside className="glass-panel rounded-3xl p-6">
      <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Booking summary</p>
      <h3 className="mt-3 text-2xl font-semibold text-white">{movie.title}</h3>
      <div className="mt-6 space-y-4 text-sm text-slate-300">
        <div>
          <p className="text-slate-500">Theater</p>
          <p className="mt-1 font-medium text-white">{showtime.theater}</p>
          <p className="text-slate-400">{showtime.auditorium}</p>
        </div>
        <div>
          <p className="text-slate-500">Showtime</p>
          <p className="mt-1 font-medium text-white">
            {showtime.dateLabel} · {showtime.time} · {showtime.format}
          </p>
        </div>
        <div>
          <p className="text-slate-500">Selected seats</p>
          <p className="mt-1 font-medium text-white">{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'Choose seats to continue'}</p>
        </div>
      </div>

      <div className="mt-6 space-y-3 rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-sm text-slate-300">
        <div className="flex items-center justify-between">
          <span>Tickets</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Service fee</span>
          <span>${serviceFee.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between border-t border-white/10 pt-3 text-base font-semibold text-white">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <button
        type="button"
        onClick={onConfirm}
        disabled={isDisabled}
        className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-4 py-3 text-sm font-semibold ${
          isDisabled
            ? 'cursor-not-allowed bg-slate-800 text-slate-500'
            : 'bg-sky-400 text-slate-950 hover:bg-sky-300'
        }`}
      >
        Confirm booking
      </button>
    </aside>
  );
}
