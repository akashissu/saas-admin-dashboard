'use client';

import { UserTable } from '@/components/UserTable';

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">User Management</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Search, sort, and manage all registered users.</p>
      </div>
      <UserTable />
    </div>
  );
}
