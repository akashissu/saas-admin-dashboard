'use client';

import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Bell, Search } from 'lucide-react';

const pageTitles: Record<string, string> = {
  '/dashboard': 'Dashboard',
  '/users': 'Users',
  '/settings': 'Settings',
};

export function TopBar() {
  const pathname = usePathname();
  const title = pageTitles[pathname] ?? 'Admin';

  return (
    <header className="h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-6 flex-shrink-0">
      <div className="flex items-center gap-4">
        <h2 className="text-base font-semibold text-gray-700 dark:text-gray-300">{title}</h2>
      </div>
      <div className="flex items-center gap-3">
        <button
          className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Search"
        >
          <Search className="w-4 h-4" />
        </button>
        <button
          className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative"
          aria-label="Notifications"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
        </button>
        <ThemeToggle />
        <div className="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center">
          <span className="text-xs font-bold text-white">AD</span>
        </div>
      </div>
    </header>
  );
}
