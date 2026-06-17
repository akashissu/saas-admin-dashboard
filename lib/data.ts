import { Movie, MovieShowtime, Seat } from '@/types';

export const bookingSteps = [
  {
    title: 'Pick a movie',
    description: 'Browse curated releases with genre, runtime, and critic ratings at a glance.',
  },
  {
    title: 'Choose your showtime',
    description: 'Compare theaters, formats, and seat perks before locking in your plan.',
  },
  {
    title: 'Reserve seats instantly',
    description: 'Select your ideal seats, review your total, and confirm in seconds.',
  },
] as const;

export const movies: Movie[] = [
  {
    id: 'starlight-odyssey',
    title: 'Starlight Odyssey',
    genre: 'Sci‑Fi Adventure',
    rating: 4.8,
    runtime: '2h 14m',
    releaseYear: 2026,
    posterLabel: 'SO',
    posterGradient: 'from-fuchsia-500 via-violet-500 to-sky-500',
    backdropGradient: 'from-slate-950 via-violet-950 to-slate-900',
    synopsis:
      'A rescue pilot and a runaway physicist chase a collapsing star bridge before an entire colony loses its path home.',
    director: 'Amina Vale',
    cast: ['Rhea Calder', 'Jonas Pike', 'Liu Serrano'],
    languages: ['English', 'Spanish subtitles'],
    showtimes: [
      {
        id: 'so-1',
        theater: 'Nova Cinemas Downtown',
        auditorium: 'Auditorium 1',
        dateLabel: 'Tonight',
        time: '6:45 PM',
        format: 'IMAX',
        price: 19.5,
        soldSeats: ['A1', 'A2', 'B4', 'C3', 'D7', 'E2', 'F5'],
        perks: ['Recliner seats', 'Dolby Atmos'],
      },
      {
        id: 'so-2',
        theater: 'Luna Grand Theater',
        auditorium: 'Hall 5',
        dateLabel: 'Tonight',
        time: '9:15 PM',
        format: '4DX',
        price: 21,
        soldSeats: ['A5', 'B2', 'B3', 'C6', 'D1', 'E8', 'F4'],
        perks: ['Motion seats', 'Premium snack counter'],
      },
    ],
  },
  {
    id: 'midnight-mirage',
    title: 'Midnight Mirage',
    genre: 'Thriller',
    rating: 4.5,
    runtime: '1h 56m',
    releaseYear: 2026,
    posterLabel: 'MM',
    posterGradient: 'from-amber-500 via-rose-500 to-slate-900',
    backdropGradient: 'from-slate-950 via-rose-950 to-amber-950',
    synopsis:
      'A hotel illusionist becomes the prime suspect in a vanishing act that exposes a conspiracy above the city skyline.',
    director: 'Dante Rivers',
    cast: ['Nora Wynn', 'Silas Hart', 'Camila Frost'],
    languages: ['English', 'French subtitles'],
    showtimes: [
      {
        id: 'mm-1',
        theater: 'Nova Cinemas Downtown',
        auditorium: 'Auditorium 3',
        dateLabel: 'Tomorrow',
        time: '5:30 PM',
        format: 'Standard',
        price: 14.5,
        soldSeats: ['A3', 'A4', 'B1', 'C5', 'D6', 'E3'],
        perks: ['Reserved seating', 'Quiet screening'],
      },
      {
        id: 'mm-2',
        theater: 'Skyline Screen House',
        auditorium: 'Room 2',
        dateLabel: 'Tomorrow',
        time: '8:40 PM',
        format: 'Dolby Cinema',
        price: 17.5,
        soldSeats: ['A7', 'B6', 'C1', 'C2', 'D8', 'F1'],
        perks: ['Laser projection', 'Extra legroom'],
      },
    ],
  },
  {
    id: 'harbor-of-echoes',
    title: 'Harbor of Echoes',
    genre: 'Drama',
    rating: 4.7,
    runtime: '2h 03m',
    releaseYear: 2026,
    posterLabel: 'HE',
    posterGradient: 'from-cyan-500 via-teal-500 to-emerald-500',
    backdropGradient: 'from-slate-950 via-cyan-950 to-emerald-950',
    synopsis:
      'A sound engineer returns to her storm-battered hometown and uncovers a decades-old message hidden in the harbor fog.',
    director: 'Mara Sol',
    cast: ['Elena Brooks', 'Mateo Quinn', 'Priya Sen'],
    languages: ['English', 'Closed captions'],
    showtimes: [
      {
        id: 'he-1',
        theater: 'Luna Grand Theater',
        auditorium: 'Hall 2',
        dateLabel: 'Friday',
        time: '4:20 PM',
        format: 'Standard',
        price: 13,
        soldSeats: ['A6', 'B5', 'C4', 'D2', 'E7'],
        perks: ['Cozy lounge access', 'Caption devices'],
      },
      {
        id: 'he-2',
        theater: 'Harborlight Cinema',
        auditorium: 'Pier Screen',
        dateLabel: 'Friday',
        time: '7:50 PM',
        format: 'Premium',
        price: 16,
        soldSeats: ['A2', 'B8', 'C7', 'D5', 'E4', 'F6'],
        perks: ['Waterfront lounge', 'Complimentary blanket'],
      },
    ],
  },
  {
    id: 'volt-frontier',
    title: 'Volt Frontier',
    genre: 'Action',
    rating: 4.6,
    runtime: '2h 08m',
    releaseYear: 2026,
    posterLabel: 'VF',
    posterGradient: 'from-lime-400 via-emerald-500 to-cyan-500',
    backdropGradient: 'from-slate-950 via-emerald-950 to-cyan-950',
    synopsis:
      'An ex-courier races across a neon megacity to stop a power-grid takeover before sunrise triggers total blackout.',
    director: 'Kaito Morrow',
    cast: ['Jules Mercer', 'Tariq Lane', 'Hana Kim'],
    languages: ['English', 'Japanese subtitles'],
    showtimes: [
      {
        id: 'vf-1',
        theater: 'Skyline Screen House',
        auditorium: 'Room 1',
        dateLabel: 'Saturday',
        time: '7:10 PM',
        format: 'Dolby Cinema',
        price: 18,
        soldSeats: ['A1', 'B2', 'B7', 'C8', 'D3', 'E5', 'F2'],
        perks: ['Immersive sound', 'Express concessions'],
      },
      {
        id: 'vf-2',
        theater: 'Nova Cinemas Downtown',
        auditorium: 'Auditorium 6',
        dateLabel: 'Saturday',
        time: '10:00 PM',
        format: 'IMAX',
        price: 20,
        soldSeats: ['A4', 'A8', 'B4', 'C6', 'D1', 'E1', 'F8'],
        perks: ['Late-night screening', 'Collector poster'],
      },
    ],
  },
];

export const featuredMovie = movies[0];

export function getMovieById(movieId: string) {
  return movies.find((movie) => movie.id === movieId);
}

export function getShowtimeById(movie: Movie, showtimeId: string) {
  return movie.showtimes.find((showtime) => showtime.id === showtimeId);
}

export function buildSeatMap(showtime: MovieShowtime, rows = ['A', 'B', 'C', 'D', 'E', 'F'], seatsPerRow = 8): Seat[] {
  return rows.flatMap((row) =>
    Array.from({ length: seatsPerRow }, (_, index) => {
      const number = index + 1;
      const id = `${row}${number}`;

      return {
        id,
        row,
        number,
        status: showtime.soldSeats.includes(id) ? 'sold' : 'available',
      } as Seat;
    }),
  );
}

export function calculateBookingSubtotal(showtime: MovieShowtime, selectedSeats: string[]) {
  return showtime.price * selectedSeats.length;
}

export function calculateServiceFee(selectedSeats: string[]) {
  return selectedSeats.length > 0 ? 2.5 : 0;
}

export function calculateBookingTotal(showtime: MovieShowtime, selectedSeats: string[]) {
  return calculateBookingSubtotal(showtime, selectedSeats) + calculateServiceFee(selectedSeats);
}
