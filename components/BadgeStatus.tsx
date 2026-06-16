'use client';

import type { BadgeStatusProps } from '@/types';

const roleStyles: Record<string, string> = {
  admin: 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300',
  editor: 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300',
  viewer: 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400',
  moderator: 'bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300',
};

const statusStyles: Record<string, string> = {
  active: 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300',
  inactive: 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400',
  suspended: 'bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300',
  pending: 'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300',
};

export function BadgeStatus({ type, value }: BadgeStatusProps) {
  const styles = type === 'role' ? roleStyles : statusStyles;
  const style = styles[value.toLowerCase()] ?? 'bg-gray-100 text-gray-600';

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium capitalize ${style}`}>
      {type === 'status' && (
        <span
          className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
            value === 'active' ? 'bg-green-500' :
            value === 'suspended' ? 'bg-red-500' :
            value === 'pending' ? 'bg-yellow-500' :
            'bg-gray-400'
          }`}
        />
      )}
      {value}
    </span>
  );
}
