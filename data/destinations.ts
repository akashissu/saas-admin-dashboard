export interface Destination {
  id: string;
  name: string;
  location: string;
  duration: string;
  priceFrom: number;
  idealFor: string;
  blurb: string;
  highlights: string[];
  gradient: string;
  accent: string;
}

export interface Experience {
  title: string;
  description: string;
  stat: string;
}

export interface PlanningStep {
  title: string;
  description: string;
}

export const destinations: Destination[] = [
  {
    id: 'amalfi-coast',
    name: 'Amalfi Coast Escape',
    location: 'Italy',
    duration: '6 days',
    priceFrom: 1490,
    idealFor: 'Couples & food lovers',
    blurb: 'Cliffside stays, lemon groves, and sun-soaked afternoons along the Mediterranean.',
    highlights: ['Boutique seaside stays', 'Private boat day', 'Chef-led pasta class'],
    gradient: 'from-amber-200 via-orange-100 to-rose-100',
    accent: 'text-orange-700',
  },
  {
    id: 'kyoto-gardens',
    name: 'Kyoto Garden Retreat',
    location: 'Japan',
    duration: '8 days',
    priceFrom: 1890,
    idealFor: 'Culture seekers',
    blurb: 'Morning temple walks, hidden tea houses, and a calm rhythm designed for slow travel.',
    highlights: ['Ryokan welcome night', 'Guided shrine route', 'Seasonal tasting menu'],
    gradient: 'from-pink-200 via-fuchsia-100 to-violet-100',
    accent: 'text-fuchsia-700',
  },
  {
    id: 'bali-horizon',
    name: 'Bali Horizon',
    location: 'Indonesia',
    duration: '7 days',
    priceFrom: 1290,
    idealFor: 'Wellness & adventure',
    blurb: 'Waterfall swims, rice terrace mornings, and restorative spa sessions in lush surroundings.',
    highlights: ['Sunrise volcano trek', 'Oceanfront villa option', 'Daily wellness rituals'],
    gradient: 'from-emerald-200 via-teal-100 to-cyan-100',
    accent: 'text-emerald-700',
  },
  {
    id: 'cape-town-loop',
    name: 'Cape Town Coastal Loop',
    location: 'South Africa',
    duration: '5 days',
    priceFrom: 1390,
    idealFor: 'Friends & first-timers',
    blurb: 'Iconic coast roads, vineyard tastings, and dramatic views from mountain to sea.',
    highlights: ['Peninsula road trip', 'Local guide experience', 'Beach sunset picnic'],
    gradient: 'from-sky-200 via-cyan-100 to-blue-100',
    accent: 'text-sky-700',
  },
];

export const experiences: Experience[] = [
  {
    title: 'Flexible itineraries',
    description: 'Every destination includes easy upgrades, extension nights, and traveler-friendly scheduling.',
    stat: '48h free changes',
  },
  {
    title: 'Handpicked stays',
    description: 'From design-forward boutique hotels to serene villas, each stay is selected for comfort and charm.',
    stat: '4.8/5 avg stay rating',
  },
  {
    title: 'Local moments included',
    description: 'We build in the small unforgettable things: market strolls, hidden beaches, and neighborhood favorites.',
    stat: '20+ curated activities',
  },
];

export const planningSteps: PlanningStep[] = [
  {
    title: 'Choose your mood',
    description: 'Pick a destination based on how you want to feel: relaxed, adventurous, romantic, or curious.',
  },
  {
    title: 'Shape your stay',
    description: 'Select travel dates, preferred pace, and room upgrades to match your ideal getaway.',
  },
  {
    title: 'Book with confidence',
    description: 'Lock in your trip with transparent pricing, quick confirmation, and support before you fly.',
  },
];

export const travelStats = [
  { label: 'Destinations ready to book', value: '24+' },
  { label: 'Average traveler rating', value: '4.9/5' },
  { label: 'Tailored travel support', value: '7 days a week' },
] as const;
