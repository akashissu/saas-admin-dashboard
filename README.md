# PAP-434 — Travel Destination Landing Page

A bright, welcoming travel destination landing page built with Next.js, React, TypeScript, and Tailwind CSS.

## Overview

This project presents a polished promotional landing page for travel inspiration and booking intent. The experience is designed to feel warm, inviting, and easy to scan, helping visitors move from discovery to action.

Users can:

- browse featured travel destinations
- read short, high-impact destination descriptions
- compare curated highlights and trip details
- review travel value points and planning steps
- use clear booking calls to action throughout the page

## What was built

### Landing page experience
- **Hero banner** with:
  - welcoming travel headline
  - supporting promotional copy
  - primary and secondary call-to-action buttons
  - quick travel stats for instant credibility
- **Featured destination section** with:
  - destination cards
  - location and trip duration labels
  - short travel descriptions
  - curated trip highlights
  - starting price display
  - booking button on each card
- **Travel benefits section** with:
  - concise traveler-focused feature cards
  - flexible planning and booking reassurance
- **Planning section** with:
  - step-by-step booking journey
  - simple guidance from inspiration to reservation
- **Booking call-to-action section** with:
  - prominent booking prompt
  - traveler support highlights
  - direct booking button

### Visual and UX direction
- bright and welcoming layout with warm gradients and soft contrast
- responsive spacing and section flow for desktop and mobile
- concise content structure focused on travel discovery and conversion
- repeated booking actions to reduce friction for users ready to commit

## Technical implementation
- **Framework:** Next.js App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Data source:** local structured destination content
- **UI approach:** responsive, component-based landing page composition

## Project structure

- `/` — travel destination landing page

## Setup

Install dependencies:

```bash
npm install
```

## How to run

Start the development server:

```bash
npm run dev
```

Then open <http://localhost:3000>.

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Project notes

- The page uses local destination content and promotional copy only; no backend integration is required.
- The experience is optimized for marketing-style browsing and booking intent rather than transactional checkout.
- Calls to action guide users from exploration to the booking section within a single-page flow.

## Key files

- `app/page.tsx` — landing page composition
- `data/destinations.ts` — destination, experience, planning, and stats content
- `components/DestinationCard.tsx` — reusable destination card UI
- `components/ExperienceCard.tsx` — traveler benefits card UI
- `components/SectionHeading.tsx` — shared section heading pattern

## Release readiness summary

The repository contains the implementation commit for PAP-434 and documentation has been updated for automated PR handoff. This landing page is ready for deployment/PR review subject to the existing tested state from prior roles.

---

## Previous ticket archive

# PAP-433 — React Movie Ticket Booking App

A responsive movie ticket booking web app built with Next.js, React, TypeScript, and Tailwind CSS.

### Overview

This project delivers a polished movie-booking experience with mock data and a mobile-first interface. Users can:

- browse currently showing movies
- view movie details, synopsis, and metadata
- compare showtimes across theaters and formats
- pick seats from an interactive grid with available, selected, and sold states
- review a live booking summary
- complete the flow on a confirmation screen

### What was built

#### Core user flow
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

### Implemented route structure

- `/` — browse movies and featured content
- `/movies/[movieId]` — movie details and booking flow
- `/confirmation` — booking confirmation screen
