# Changelog

## PAP-433 — Create a React movie ticket booking app

### Added
- responsive movie browsing landing page
- featured movie hero section and movie cards
- movie detail route with synopsis and metadata
- theater/showtime selection interface
- interactive seat picker with available, selected, and sold states
- live booking summary with subtotal, service fee, and total
- confirmation screen with booking details and confirmation code
- local mock movie/showtime/seat/pricing data in `lib/data.ts`

### Technical notes
- built with Next.js App Router, React, TypeScript, and Tailwind CSS
- booking flow uses client-side state for showtime and seat selection
- confirmation flow is driven by generated URL search params

### Handoff
- implementation commit detected: `feat(pap-433): implement Create a React movie ticket booking app`
- documentation updated for automated PR creation and deployment review
