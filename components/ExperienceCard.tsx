import { Experience } from '@/data/destinations';

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="rounded-[1.75rem] border border-orange-100 bg-orange-50/70 p-6 shadow-[0_16px_48px_rgba(251,146,60,0.10)]">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-500">{experience.stat}</p>
      <h3 className="mt-4 text-2xl font-semibold text-slate-900">{experience.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{experience.description}</p>
    </article>
  );
}
