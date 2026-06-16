'use client';

export function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <span className="text-lg font-bold text-gray-900 dark:text-gray-100">AdminHub</span>
        <nav className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <a href="/dashboard" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Dashboard</a>
          <a href="/users" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Users</a>
          <a href="/settings" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">Settings</a>
        </nav>
      </div>
    </header>
  );
}
