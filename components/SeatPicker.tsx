import { Seat } from '@/types';

interface SeatPickerProps {
  seats: Seat[];
  selectedSeats: string[];
  onToggleSeat: (seatId: string) => void;
}

const legend = [
  { label: 'Available', className: 'bg-white/10 border-white/10' },
  { label: 'Selected', className: 'bg-sky-400 border-sky-300' },
  { label: 'Sold', className: 'bg-slate-800 border-slate-700 opacity-70' },
];

export function SeatPicker({ seats, selectedSeats, onToggleSeat }: SeatPickerProps) {
  const rows = Array.from(new Set(seats.map((seat) => seat.row)));

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-5 sm:p-6">
      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
        {legend.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <span className={`h-4 w-4 rounded border ${item.className}`} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-6 max-w-2xl">
        <div className="rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-center text-sm uppercase tracking-[0.4em] text-sky-100">
          Screen
        </div>

        <div className="mt-6 space-y-3">
          {rows.map((row) => {
            const rowSeats = seats.filter((seat) => seat.row === row);

            return (
              <div key={row} className="grid grid-cols-[24px_1fr] items-center gap-3">
                <span className="text-sm font-semibold text-slate-400">{row}</span>
                <div className="grid grid-cols-4 gap-2 sm:grid-cols-8">
                  {rowSeats.map((seat) => {
                    const isSelected = selectedSeats.includes(seat.id);
                    const isSold = seat.status === 'sold';

                    return (
                      <button
                        key={seat.id}
                        type="button"
                        disabled={isSold}
                        aria-pressed={isSelected}
                        onClick={() => onToggleSeat(seat.id)}
                        className={`rounded-xl border px-0 py-3 text-sm font-semibold ${
                          isSold
                            ? 'cursor-not-allowed border-slate-800 bg-slate-900 text-slate-600'
                            : isSelected
                              ? 'border-sky-300 bg-sky-400 text-slate-950 shadow-lg shadow-sky-500/20'
                              : 'border-white/10 bg-white/5 text-white hover:border-white/30 hover:bg-white/10'
                        }`}
                      >
                        {seat.number}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
