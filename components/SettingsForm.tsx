'use client';

import { useState, useEffect } from 'react';
import { NotificationToggle } from '@/components/NotificationToggle';
import { Save, CheckCircle } from 'lucide-react';
import type { AdminSettings } from '@/types';

const DEFAULT_SETTINGS: AdminSettings = {
  profile: {
    displayName: 'Admin User',
    email: 'admin@company.com',
    avatarUrl: '',
  },
  notifications: {
    emailAlerts: true,
    productUpdates: true,
    securityNotifications: true,
  },
};

const STORAGE_KEY = 'admin_settings';

export function SettingsForm() {
  const [settings, setSettings] = useState<AdminSettings>(DEFAULT_SETTINGS);
  const [saved, setSaved] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as AdminSettings;
        setSettings(parsed);
      }
    } catch {
      // use defaults
    }
    setMounted(true);
  }, []);

  const handleProfileChange = (field: keyof AdminSettings['profile'], value: string) => {
    setSettings((prev) => ({
      ...prev,
      profile: { ...prev.profile, [field]: value },
    }));
  };

  const handleNotificationChange = (field: keyof AdminSettings['notifications'], value: boolean) => {
    setSettings((prev) => ({
      ...prev,
      notifications: { ...prev.notifications, [field]: value },
    }));
  };

  const handleSave = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch {
      // handle storage error
    }
  };

  if (!mounted) return null;

  return (
    <div className="space-y-6 max-w-2xl">
      {/* Profile Section */}
      <div className="card p-6">
        <div className="mb-5">
          <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100">Profile</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Update your personal information.</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              Display Name
            </label>
            <input
              type="text"
              value={settings.profile.displayName}
              onChange={(e) => handleProfileChange('displayName', e.target.value)}
              className="input-field"
              placeholder="Your display name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              value={settings.profile.email}
              onChange={(e) => handleProfileChange('email', e.target.value)}
              className="input-field"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              Avatar URL
            </label>
            <input
              type="url"
              value={settings.profile.avatarUrl}
              onChange={(e) => handleProfileChange('avatarUrl', e.target.value)}
              className="input-field"
              placeholder="https://example.com/avatar.jpg"
            />
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button onClick={handleSave} className="btn-primary flex items-center gap-2">
              <Save className="w-4 h-4" />
              Save Changes
            </button>
            {saved && (
              <div className="flex items-center gap-1.5 text-green-600 dark:text-green-400">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm font-medium">Settings saved!</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Notification Preferences */}
      <div className="card p-6">
        <div className="mb-5">
          <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100">Notification Preferences</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Choose what notifications you want to receive.</p>
        </div>

        <div className="space-y-4">
          <NotificationToggle
            label="Email Alerts"
            description="Receive important alerts and warnings via email."
            checked={settings.notifications.emailAlerts}
            onChange={(v) => handleNotificationChange('emailAlerts', v)}
          />
          <div className="border-t border-gray-100 dark:border-gray-800" />
          <NotificationToggle
            label="Product Updates"
            description="Get notified about new features and product improvements."
            checked={settings.notifications.productUpdates}
            onChange={(v) => handleNotificationChange('productUpdates', v)}
          />
          <div className="border-t border-gray-100 dark:border-gray-800" />
          <NotificationToggle
            label="Security Notifications"
            description="Receive alerts about suspicious activity and security events."
            checked={settings.notifications.securityNotifications}
            onChange={(v) => handleNotificationChange('securityNotifications', v)}
          />
        </div>

        <div className="flex items-center gap-3 mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
          <button onClick={handleSave} className="btn-primary flex items-center gap-2">
            <Save className="w-4 h-4" />
            Save Preferences
          </button>
          {saved && (
            <div className="flex items-center gap-1.5 text-green-600 dark:text-green-400">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Preferences saved!</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
