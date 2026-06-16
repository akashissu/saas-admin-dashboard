import type { SortDirection } from '@/types';

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatCurrency(value: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat('en-US').format(value);
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export function sortData<T extends Record<string, unknown>>(
  data: T[],
  key: keyof T,
  direction: SortDirection
): T[] {
  return [...data].sort((a, b) => {
    const aVal = a[key] ?? '';
    const bVal = b[key] ?? '';
    const cmp = String(aVal).localeCompare(String(bVal));
    return direction === 'asc' ? cmp : -cmp;
  });
}

export function filterUsers<T extends { name: string; email: string }>(
  users: T[],
  query: string
): T[] {
  const q = query.toLowerCase();
  return users.filter(
    (u) => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q)
  );
}

export function getStoredSettings<T>(key: string, defaults: T): T {
  if (typeof window === 'undefined') return defaults;
  try {
    const stored = localStorage.getItem(key);
    if (stored) return JSON.parse(stored) as T;
  } catch {
    // ignore
  }
  return defaults;
}

export function setStoredSettings<T>(key: string, value: T): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // ignore
  }
}
