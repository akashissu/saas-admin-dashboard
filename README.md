# PAP-435 — Build Failed Remediation

A Next.js travel destination landing page with a verified production build after upgrading the framework to a patched release.

## Overview

This repository contains a marketing-style travel landing page built with Next.js, React, TypeScript, and Tailwind CSS. Ticket PAP-435 addressed the failed deployment follow-up by documenting the framework security/build remediation that moved the app off the vulnerable Next.js release flagged by Vercel.

## What was built for Build Failed

PAP-435 resolves the deployment readiness issue by documenting the already-implemented framework upgrade and confirming the build now succeeds on a patched Next.js version.

### Remediation summary
- upgraded Next.js from the previously flagged `15.1.0` line to a patched `15.5.19` release
- refreshed lockfile dependencies to match the upgraded framework version
- re-ran the production build to confirm the application compiles, prerenders, and emits deployable output successfully
- preserved the existing user-facing travel landing page and movie booking routes while removing the release blocker caused by the vulnerable framework version

### Verified application routes
- `/` — travel destination landing page
- `/confirmation` — booking confirmation page
- `/movies/[movieId]` — movie detail and booking flow

## Existing product experience

The application currently includes:

- a polished travel destination landing page
- featured destination cards with pricing and highlights
- booking-oriented calls to action
- a movie booking flow with detail and confirmation routes
- responsive styling via Tailwind CSS

## Technical implementation

- **Framework:** Next.js App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Package manager:** npm
- **Key remediation:** upgrade to patched Next.js release for secure, deployable builds

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

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Build verification

The current documented release state was verified with:

```bash
npm run build
```

Verification result:
- build completed successfully on **Next.js 15.5.19**
- static routes were generated successfully
- dynamic movie detail route compiled successfully
- shared first-load JavaScript dropped from the older build output after the framework refresh

## Release readiness

PAP-435 is ready for automated PR handling and deployment review because:

- the implementation commit exists: `feat(pap-435): upgrade next to patched release`
- the vulnerable Next.js version reported by Vercel has been replaced with a patched release
- the production build now succeeds locally
- this handoff documents the change, verification steps, and deployment impact for the next phase
