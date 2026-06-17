'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  buildSeatMap,
  calculateBookingSubtotal,
  calculateBookingTotal,
  calculateServiceFee,
} from '@/lib/data';
import { Movie } from '@/types';
import { BookingSummary } from '@/components/BookingSummary';
import { SeatPicker } from '@/components/SeatPicker';
import { ShowtimeSelector } from '@/components/ShowtimeSelector';

export function MovieBookingPanel({ movie }: { movie: Movie }) {
  const router = useRouter();
  const [selectedShowtimeId, setSelectedShowtimeId] = useState(movie.showtimes[0]?.id ?? '');
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const selectedShowtime = useMemo(
    () => movie.showtimes.find((showtime) => showtime.id === selectedShowtimeId) ?? movie.showtimes[0],
    [movie.showtimes, selectedShowtimeId],
  );

  const seats = useMemo(() => buildSeatMap(selectedShowtime), [selectedShowtime]);
  const subtotal = calculateBookingSubtotal(selectedShowtime, selectedSeats);
  const serviceFee = calculateServiceFee(selectedSeats);
  const total = calculateBookingTotal(selectedShowtime, selectedSeats);

  function handleShowtimeChange(showtimeId: string) {
    setSelectedShowtimeId(showtimeId);
    setSelectedSeats([]);
  }

  function handleSeatToggle(seatId: string) {
    const isSeatSold = seats.find((seat) => seat.id === seatId)?.status === 'sold';
    if (isSeatSold) {
      return;
    }

    setSelectedSeats((currentSeats) => {
      if (currentSeats.includes(seatId)) {
        return currentSeats.filter((currentSeat) => currentSeat !== seatId);
      }

      return [...currentSeats, seatId].sort((left, right) => left.localeCompare(right, undefined, { numeric: true }));
    });
  }

  function handleConfirmBooking() {
    if (selectedSeats.length === 0) {
      return;
    }

    const params = new URLSearchParams({
      movieId: movie.id,
      showtimeId: selectedShowtime.id,
      seats: selectedSeats.join(','),
    });

    router.push(`/confirmation?${params.toString()}`);
  }

  return (
    <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_360px]">
      <div className="space-y-8">
        <section className="glass-panel rounded-3xl p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Select a showtime</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Find your best screening</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
            Compare formats, theaters, and amenities, then lock in the seats that fit your night out.
          </p>
          <div className="mt-6">
            <ShowtimeSelector
              showtimes={movie.showtimes}
              selectedShowtimeId={selectedShowtime.id}
              onSelectShowtime={handleShowtimeChange}
            />
          </div>
        </section>

        <section className="glass-panel rounded-3xl p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Seat picker</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Choose where you want to sit</h2>
            </div>
            <p className="text-sm text-slate-400">Tap available seats to add or remove them from your booking.</p>
          </div>
          <div className="mt-6">
            <SeatPicker seats={seats} selectedSeats={selectedSeats} onToggleSeat={handleSeatToggle} />
          </div>
        </section>
      </div>

      <BookingSummary
        movie={movie}
        showtime={selectedShowtime}
        selectedSeats={selectedSeats}
        subtotal={subtotal}
        serviceFee={serviceFee}
        total={total}
        onConfirm={handleConfirmBooking}
      />
    </div>
  );
}
