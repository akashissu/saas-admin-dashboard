import Link from 'next/link';

export default function ConfirmationPage() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-14 text-center sm:px-6 lg:px-8">
      <div className="sun-panel rounded-[2rem] p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-500">Inquiry received</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">Your travel request is ready for the next step.</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Thanks for exploring VoyaTrail. A traveler-friendly confirmation moment lives here so the booking journey feels
          complete even in this landing-page-focused experience.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-500"
        >
          Return to destinations
        </Link>
      </div>
    </div>
  );
}
