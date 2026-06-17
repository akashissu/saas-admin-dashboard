import Link from 'next/link';
import { DestinationCard } from '@/components/DestinationCard';
import { ExperienceCard } from '@/components/ExperienceCard';
import { SectionHeading } from '@/components/SectionHeading';
import { destinations, experiences, planningSteps, travelStats } from '@/data/destinations';

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-24 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <section className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-orange-500">Travel destination landing page</p>
          <h1 className="mt-5 max-w-3xl text-balance text-5xl font-semibold leading-tight text-slate-900 sm:text-6xl">
            Find a bright new destination for your next unforgettable getaway.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Explore sun-filled coastlines, serene cultural escapes, and easy-to-book adventures designed to feel fresh,
            welcoming, and effortless from the first click.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#destinations"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-500"
            >
              Explore destinations
            </Link>
            <Link
              href="#booking"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-orange-300 hover:bg-orange-50"
            >
              Start booking
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {travelStats.map((item) => (
              <div key={item.label} className="sun-panel rounded-[1.5rem] p-5">
                <p className="text-sm text-slate-500">{item.label}</p>
                <p className="mt-2 text-xl font-semibold text-slate-900">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="sun-panel overflow-hidden rounded-[2rem] p-6 sm:p-8">
          <div className="rounded-[1.75rem] bg-gradient-to-br from-orange-200 via-amber-100 to-sky-100 p-8 shadow-[0_24px_60px_rgba(249,115,22,0.16)]">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-600">Summer spotlight</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
              <div>
                <h2 className="text-4xl font-semibold text-slate-900">Amalfi Coast</h2>
                <p className="mt-4 text-base leading-7 text-slate-700">
                  Whitewashed terraces, sparkling blue coves, and laid-back evenings made for spontaneous photos and
                  long dinners.
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-white/75 px-5 py-4 text-right shadow-lg shadow-orange-200/60">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Best for</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">Seaside romance</p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { label: 'Average sunshine', value: '300 days' },
                { label: 'Top activity', value: 'Boat hopping' },
                { label: 'Mood', value: 'Bright & breezy' },
              ].map((item) => (
                <div key={item.label} className="rounded-[1.5rem] border border-white/70 bg-white/70 p-4 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">{item.label}</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="destinations" className="space-y-8">
        <SectionHeading
          eyebrow="Featured destinations"
          title="Choose a place that matches the trip you are craving"
          description="Each destination card highlights the vibe, signature experiences, and a direct booking action so travelers can move from inspiration to planning without friction."
        />

        <div className="grid gap-6 lg:grid-cols-2 2xl:grid-cols-4">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </section>

      <section id="experiences" className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          eyebrow="Why travelers choose us"
          title="A welcoming layout backed by travel details people actually need"
          description="This landing page balances visual warmth with concise planning details, giving visitors confidence without overwhelming them."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.title} experience={experience} />
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="sun-panel rounded-[2rem] p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">Easy planning</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">From inspiration to itinerary in three smooth steps</h2>
          <div className="mt-8 space-y-5">
            {planningSteps.map((step, index) => (
              <div key={step.title} className="flex gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-5">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-100 text-base font-semibold text-orange-600">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="booking" className="overflow-hidden rounded-[2rem] bg-slate-900 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.18)] sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-300">Booking call to action</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Ready to reserve your next destination?</h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
            Pick your favorite escape, personalize the details, and secure your travel plan with transparent pricing and
            friendly support.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              'Instant trip inquiry confirmation',
              'Flexible date options available',
              'Support before and after booking',
            ].map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#destinations"
              className="inline-flex items-center justify-center rounded-full bg-orange-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-300"
            >
              Book your escape
            </Link>
            <Link
              href="#experiences"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View travel perks
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
