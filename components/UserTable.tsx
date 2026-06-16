'use client';

import { useState, useMemo } from 'react';
import { mockUsers } from '@/data/mockUsers';
import { SearchInput } from '@/components/SearchInput';
import { SortableTableHeader } from '@/components/SortableTableHeader';
import { BadgeStatus } from '@/components/BadgeStatus';
import type { User, SortConfig, SortDirection } from '@/types';

type SortableKey = keyof Pick<User, 'name' | 'email' | 'role' | 'status' | 'joinDate'>;

export function UserTable() {
  const [search, setSearch] = useState('');
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: 'name', direction: 'asc' });

  const handleSort = (key: string) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return mockUsers.filter(
      (u) =>
        u.name.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q)
    );
  }, [search]);

  const sorted = useMemo(() => {
    const key = sortConfig.key as SortableKey;
    const dir: SortDirection = sortConfig.direction;
    return [...filtered].sort((a, b) => {
      const aVal = a[key] ?? '';
      const bVal = b[key] ?? '';
      const cmp = String(aVal).localeCompare(String(bVal));
      return dir === 'asc' ? cmp : -cmp;
    });
  }, [filtered, sortConfig]);

  const getInitials = (name: string) =>
    name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);

  const avatarColors = [
    'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500',
    'bg-pink-500', 'bg-teal-500', 'bg-red-500', 'bg-indigo-500',
  ];

  return (
    <div className="card overflow-hidden">
      <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between gap-4">
        <SearchInput
          value={search}
          onChange={setSearch}
          placeholder="Search by name or email..."
        />
        <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
          {sorted.length} of {mockUsers.length} users
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-800/50">
              <SortableTableHeader
                label="Name"
                sortKey="name"
                currentSort={sortConfig}
                onSort={handleSort}
              />
              <SortableTableHeader
                label="Email"
                sortKey="email"
                currentSort={sortConfig}
                onSort={handleSort}
              />
              <SortableTableHeader
                label="Role"
                sortKey="role"
                currentSort={sortConfig}
                onSort={handleSort}
              />
              <SortableTableHeader
                label="Status"
                sortKey="status"
                currentSort={sortConfig}
                onSort={handleSort}
              />
              <SortableTableHeader
                label="Join Date"
                sortKey="joinDate"
                currentSort={sortConfig}
                onSort={handleSort}
              />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {sorted.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-12 text-gray-400 dark:text-gray-500 text-sm">
                  No users found matching your search.
                </td>
              </tr>
            ) : (
              sorted.map((user, idx) => (
                <tr
                  key={user.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 ${avatarColors[idx % avatarColors.length]}`}
                      >
                        {getInitials(user.name)}
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{user.email}</td>
                  <td className="px-4 py-3">
                    <BadgeStatus type="role" value={user.role} />
                  </td>
                  <td className="px-4 py-3">
                    <BadgeStatus type="status" value={user.status} />
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                    {new Date(user.joinDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
