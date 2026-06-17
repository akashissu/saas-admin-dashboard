export interface MovieShowtime {
  id: string;
  theater: string;
  auditorium: string;
  dateLabel: string;
  time: string;
  format: string;
  price: number;
  soldSeats: string[];
  perks: string[];
}

export interface Movie {
  id: string;
  title: string;
  genre: string;
  rating: number;
  runtime: string;
  releaseYear: number;
  posterLabel: string;
  posterGradient: string;
  backdropGradient: string;
  synopsis: string;
  director: string;
  cast: string[];
  languages: string[];
  showtimes: MovieShowtime[];
}

export interface Seat {
  id: string;
  row: string;
  number: number;
  status: 'available' | 'sold';
}
