import Link from 'next/link';
import { Destination } from '@/data/destinations';
import { formatCurrency } from '@/lib/utils';

export function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <article className="destination-card overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.10)]">
      <div className={`relative h-64 bg-gradient-to-br ${destination.gradient} p-6`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_transparent_38%)]" />
        <div className="relative flex h-full flex-col justify-between">
          <div className="flex items-start justify-between gap-4">
            <span className="rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-700 shadow-sm">
              {destination.location}
            </span>
            <span className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-lg">
              {destination.duration}
            </span>
          </div>

          <div>
            <p className={`text-sm font-semibold uppercase tracking-[0.35em] ${destination.accent}`}>Signature journey</p>
            <h3 className="mt-3 max-w-xs text-3xl font-semibold text-slate-900">{destination.name}</h3>
          </div>
        </div>
      </div>

      <div className="space-y-5 p-6">
        <p className="text-sm leading-6 text-slate-600">{destination.blurb}</p>

        <ul className="grid gap-3 text-sm text-slate-700">
          {destination.highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-400" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-end justify-between gap-4 border-t border-slate-200 pt-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">From</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">{formatCurrency(destination.priceFrom)}</p>
            <p className="mt-1 text-sm text-slate-500">{destination.idealFor}</p>
          </div>

          <Link
            href="#booking"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-500"
          >
            Book this trip
          </Link>
        </div>
      </div>
    </article>
  );
}
