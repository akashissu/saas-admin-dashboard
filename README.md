# SaaS Admin Dashboard

A fully client-side SaaS admin dashboard built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Recharts.

## Features

- **Dashboard** — 4 KPI StatCards + LineChart (revenue) + BarChart (signups)
- **Users** — Searchable, sortable user management table with 25 mock users
- **Settings** — Profile editing + notification toggles, persisted to localStorage
- **Light/Dark Mode** — Toggle in the TopBar, persisted to localStorage
- **Persistent Sidebar** — Active route highlighting across all pages

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — redirects to `/dashboard`.

## Build

```bash
npm run build
npm start
```

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Recharts** (charts)
- **Lucide React** (icons)

## Project Structure

```
app/
  layout.tsx          # Root layout with ThemeProvider
  page.tsx            # Redirects to /dashboard
  dashboard/page.tsx  # KPI cards + charts
  users/page.tsx      # User management table
  settings/page.tsx   # Profile + notification settings
  (dashboard)/layout.tsx  # Sidebar + TopBar layout
components/
  Sidebar.tsx
  TopBar.tsx
  ThemeToggle.tsx
  ThemeProvider.tsx
  StatCard.tsx
  LineChartWidget.tsx
  BarChartWidget.tsx
  UserTable.tsx
  SearchInput.tsx
  SortableTableHeader.tsx
  BadgeStatus.tsx
  SettingsForm.tsx
  NotificationToggle.tsx
  Header.tsx
  Footer.tsx
data/
  mockKpis.ts
  mockUsers.ts
types/
  index.ts
lib/
  utils.ts
```

## No API Keys Required

All data is static mock data. The app works fully without any environment variables.
