import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: 'VoyaTrail | Travel Destination Landing Page',
  description:
    'A bright and welcoming travel destination landing page with featured trips, destination cards, planning details, and booking calls to action.',
  keywords: ['travel landing page', 'destination booking', 'next.js', 'travel website', 'vacation inspiration'],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-stone-50 text-slate-900 antialiased">
        <div className="relative flex min-h-screen flex-col overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,146,60,0.18),_transparent_28%),radial-gradient(circle_at_80%_10%,_rgba(56,189,248,0.16),_transparent_20%),linear-gradient(180deg,_rgba(255,255,255,0.96),_rgba(255,247,237,0.85)_48%,_rgba(239,246,255,0.96)_100%)]" />
          <Header />
          <main className="relative z-10 flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
