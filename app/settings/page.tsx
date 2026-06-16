'use client';

import { SettingsForm } from '@/components/SettingsForm';

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Settings</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Manage your profile and notification preferences.</p>
      </div>
      <SettingsForm />
    </div>
  );
}
