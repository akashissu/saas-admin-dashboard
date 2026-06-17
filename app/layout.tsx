import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'CineReserve | Movie Ticket Booking',
  description: 'Browse films, compare showtimes, pick seats, and confirm movie tickets in a polished React experience.',
  keywords: ['movie tickets', 'booking app', 'next.js', 'react', 'showtimes'],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <div className="relative flex min-h-screen flex-col overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(168,85,247,0.12),_transparent_24%)]" />
          <Header />
          <main className="relative z-10 flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
