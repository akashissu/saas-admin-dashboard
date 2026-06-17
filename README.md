# PAP-433 — React Movie Ticket Booking App

A responsive movie ticket booking web app built with Next.js, React, TypeScript, and Tailwind CSS.

## Overview

This project delivers a polished movie-booking experience with mock data and a mobile-first interface. Users can:

- browse currently showing movies
- view movie details, synopsis, and metadata
- compare showtimes across theaters and formats
- pick seats from an interactive grid with available, selected, and sold states
- review a live booking summary
- complete the flow on a confirmation screen

## What was built

### Core user flow
- **Home page** for browsing movies with:
  - poster-style visual cards
  - title
  - genre
  - rating
  - runtime
  - starting ticket price
- **Movie detail page** with:
  - synopsis
  - director and cast details
  - theater/showtime selection
  - responsive booking layout
- **Seat picker** with:
  - grid layout
  - available seats
  - selected seats
  - sold seats
  - screen indicator and legend
- **Booking summary** with:
  - selected movie/showtime
  - selected seats
  - subtotal
  - service fee
  - total
- **Confirmation screen** with:
  - booking confirmation state
  - generated confirmation code
  - showtime summary
  - seat summary
  - total paid

### Technical implementation
- **Framework:** Next.js App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Data source:** local mock data in `lib/data.ts`
- **UI approach:** responsive, mobile-first, client-side booking interactions

## Implemented route structure

- `/` — browse movies and featured content
- `/movies/[movieId]` — movie details and booking flow
- `/confirmation` — booking confirmation screen

## Getting started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open <http://localhost:3000>.

### Production build

```bash
npm run build
npm run start
```

## Project notes

- The app uses mock booking data only; no backend or payment provider is required.
- Seat availability is derived from per-showtime mock data.
- Booking confirmation is driven by URL parameters generated during the booking flow.

## Key files

- `app/page.tsx` — landing and browse experience
- `app/movies/[movieId]/page.tsx` — movie detail and booking flow
- `app/confirmation/page.tsx` — confirmation screen
- `lib/data.ts` — movie, showtime, seat, and pricing mock data/helpers
- `components/ShowtimeSelector.tsx` — showtime selection UI
- `components/SeatPicker.tsx` — seat grid interaction
- `components/BookingSummary.tsx` — pricing and checkout summary
- `components/ConfirmationCard.tsx` — booking confirmation UI
- `components/MovieBookingPanel.tsx` — client-side booking state orchestration

## Release readiness summary

The repository contains the implementation commit for PAP-433 and documentation has been updated for automated PR handoff. This app is ready for deployment/PR review subject to the existing tested state from prior roles.
