# SaaS Admin Dashboard

A production-ready SaaS admin dashboard built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Recharts v3.

## Features

- **Dashboard Overview** — MRR, customer count, churn rate, and ARPU at a glance
- **Revenue Analytics** — Interactive area charts for MRR, user growth, and churn trends
- **Customer Management** — Searchable, filterable customer table with plan and status info
- **Recent Activity Feed** — Live-style feed of signups, payments, upgrades, and churns
- **Settings Page** — Profile, notification preferences, billing, and danger zone
- **Responsive Design** — Fully mobile-friendly with Tailwind CSS

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 15.1.0 | App Router framework |
| React | 18.3.x | UI library |
| TypeScript | 5.6.x | Type safety |
| Tailwind CSS | 3.4.x | Styling |
| Recharts | 3.x | Data visualization |
| clsx + tailwind-merge | latest | Class name utilities |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Header + Footer
│   ├── page.tsx            # Homepage / landing
│   ├── dashboard/page.tsx  # Main dashboard with charts
│   ├── customers/page.tsx  # Customer management table
│   ├── analytics/page.tsx  # Deep analytics view
│   └── settings/page.tsx   # Account settings
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Site footer
│   ├── StatsCard.tsx       # Metric stat card
│   ├── RevenueChart.tsx    # Recharts area chart wrapper
│   ├── CustomerTable.tsx   # Customer data table
│   └── RecentActivity.tsx  # Activity feed
├── lib/
│   ├── utils.ts            # cn(), formatCurrency(), etc.
│   └── data.ts             # Mock data for all pages
└── types/
    └── index.ts            # Shared TypeScript types
```

## Build Error Fix

The original build error was:

```
Type error: Type 'TimeSeriesPoint[]' is not assignable to type 'Record<string, string | number>[]'.
  Index signature for type 'string' is missing in type 'TimeSeriesPoint'.
```

**Root cause:** The `TimeSeriesPoint` interface used named properties (`month`, `revenue`) without an index signature, making it incompatible with Recharts' expected `Record<string, string | number>[]` type.

**Fix applied:** Replaced the `TimeSeriesPoint` interface with a `ChartDataPoint` type alias defined as `Record<string, string | number>`. This is fully compatible with Recharts v3 and TypeScript strict mode.

```typescript
// Before (broken)
interface TimeSeriesPoint {
  month: string;
  revenue: number;
}

// After (fixed)
export type ChartDataPoint = Record<string, string | number>;
```

Also upgraded from `next@14.2.5` (security vulnerability) to `next@15.1.0` and from `recharts@2.x` (deprecated) to `recharts@3.x`.
