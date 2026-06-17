# PAP-435 Architect Plan

## Summary
Vercel did **not** fail on compilation or type generation. The deployment was flagged because the project depends on **`next@15.1.0`**, which Vercel reports as vulnerable. The app is a small **Next.js App Router + TypeScript + Tailwind CSS** site with mostly static rendering and no backend/API routes, so the fix should be a **framework/dependency upgrade** with light compatibility cleanup.

## Current stack
- Framework: Next.js App Router
- Language: TypeScript
- Styling: Tailwind CSS
- Package manager: npm (`package-lock.json` present)
- Current key deps:
  - `next: 15.1.0`
  - `react: 18.3.1`
  - `react-dom: 18.3.1`
  - `eslint: 8.57.1`
  - `eslint-config-next: 15.1.0`

## App surface to preserve
### Pages/routes
- `/` → travel destination landing page (`app/page.tsx`)
- `/confirmation` → travel confirmation page (`app/confirmation/page.tsx`)
- `/movies/[movieId]` → legacy route currently hard-404s via `notFound()`

### Components in active travel flow
- `Header`
- `Footer`
- `DestinationCard`
- `ExperienceCard`
- `SectionHeading`

### Legacy components/data still present but likely unused by the current landing page
- `BookingSummary`
- `ConfirmationCard`
- `MovieBookingPanel`
- `MovieCard`
- `SeatPicker`
- `ShowtimeSelector`
- `lib/data.ts`
- `types/index.ts`

### APIs
- No API routes detected
- No server actions detected
- No external data fetching detected

## Root cause
- Build output succeeds.
- Deployment warns: **"Vulnerable version of Next.js detected, please update immediately."**
- The repo pins `next@15.1.0`, which is below current safe/stable releases.

## Implementation plan for Grunt

### 1) Upgrade framework and aligned tooling
Update the dependency set together to avoid version skew:
- `next` → latest stable safe version
- `eslint-config-next` → same major/minor family as `next`
- `eslint` → compatible version required by the chosen `eslint-config-next` (current latest peer indicates ESLint 9+)

Expected files:
- `package.json`
- `package-lock.json`

### 2) Adjust lint command if Next upgrade removes old CLI behavior
The current script is:
- `lint: next lint`

Likely follow-up after upgrading to modern Next:
- replace with direct ESLint invocation, e.g. `eslint .`
- ensure TypeScript/Next config still lint clean under ESLint 9

Expected files:
- `package.json`
- possibly ESLint config file(s)

### 3) Keep React version stable unless the upgrade requires otherwise
- React 18 is likely sufficient for the upgrade target.
- Do **not** broaden scope to React 19 unless install/build validation proves it is required.

Expected files:
- ideally none beyond dependency metadata unless peer resolution forces it

### 4) Validate App Router compatibility
Because the project is simple, risk is low, but Grunt should verify:
- `app/layout.tsx` metadata still builds cleanly
- `app/page.tsx` static rendering still works
- `app/confirmation/page.tsx` still renders
- `app/movies/[movieId]/page.tsx` still returns 404 correctly

### 5) Run full verification after upgrade
Required checks:
- `npm install` or equivalent lockfile refresh
- `npm run build`
- `npm run typecheck`
- `npm run lint`

Success criteria:
- no vulnerable Next.js warning in build/deploy context
- no dependency peer-resolution errors
- no lint/type/build regressions

## Risk notes
- **Most likely breakage area:** lint tooling, not runtime code.
- The app uses standard App Router patterns and no advanced Next internals, so framework upgrade risk is low.
- Legacy movie-booking files remain in repo but do not appear to drive the active travel landing page. They should not be refactored in this ticket unless required for lint/build compatibility.

## Recommended scope boundary
### In scope
- dependency/security upgrade for Next.js toolchain
- lint script/config compatibility updates
- lockfile refresh
- build/lint/type verification

### Out of scope
- removing legacy movie components/data
- redesigning pages
- adding new features
- creating or pushing PRs

## Handoff notes for Grunt
1. Upgrade `next` and `eslint-config-next` together.
2. Expect ESLint 9 migration pressure.
3. Preserve current route behavior; this is a security/maintenance fix, not a product change.
4. If lint breaks due to CLI changes, switch from `next lint` to direct `eslint` usage rather than downgrading the framework.
