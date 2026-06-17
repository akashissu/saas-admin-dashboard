import { MovieShowtime } from '@/types';

interface ShowtimeSelectorProps {
  showtimes: MovieShowtime[];
  selectedShowtimeId: string;
  onSelectShowtime: (showtimeId: string) => void;
}

export function ShowtimeSelector({
  showtimes,
  selectedShowtimeId,
  onSelectShowtime,
}: ShowtimeSelectorProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {showtimes.map((showtime) => {
        const isSelected = showtime.id === selectedShowtimeId;

        return (
          <button
            key={showtime.id}
            type="button"
            onClick={() => onSelectShowtime(showtime.id)}
            className={`rounded-2xl border p-4 text-left ${
              isSelected
                ? 'border-sky-400 bg-sky-400/10 shadow-lg shadow-sky-500/10'
                : 'border-white/10 bg-white/5 hover:border-white/25 hover:bg-white/10'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{showtime.dateLabel}</p>
                <p className="mt-2 text-lg font-semibold text-white">{showtime.time}</p>
                <p className="mt-1 text-sm text-slate-300">{showtime.theater}</p>
                <p className="text-sm text-slate-500">{showtime.auditorium}</p>
              </div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-sky-100">
                {showtime.format}
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {showtime.perks.map((perk) => (
                <span key={perk} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                  {perk}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm font-semibold text-white">${showtime.price.toFixed(2)} / ticket</p>
          </button>
        );
      })}
    </div>
  );
}
