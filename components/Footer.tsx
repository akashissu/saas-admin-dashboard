'use client';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
        <span>© {new Date().getFullYear()} AdminHub. All rights reserved.</span>
        <span>SaaS Admin Dashboard v1.0</span>
      </div>
    </footer>
  );
}
