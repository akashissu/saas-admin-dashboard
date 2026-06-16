export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Settings</h1>
        <p className="text-slate-600 mt-1">Manage your account and application preferences</p>
      </div>

      <div className="space-y-6">
        {/* Profile Section */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-6">Profile Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
              <input
                type="text"
                defaultValue="Alex"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
              <input
                type="text"
                defaultValue="Johnson"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
              <input
                type="email"
                defaultValue="alex.johnson@company.com"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Role</label>
              <input
                type="text"
                defaultValue="Admin"
                disabled
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50 text-slate-500"
              />
            </div>
          </div>
          <div className="mt-4">
            <button className="px-4 py-2 bg-brand-600 text-white text-sm font-semibold rounded-lg hover:bg-brand-700 transition-colors">
              Save Changes
            </button>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-6">Notification Preferences</h2>
          <div className="space-y-4">
            {[
              { label: 'New customer signups', description: 'Get notified when a new customer signs up', enabled: true },
              { label: 'Payment failures', description: 'Alert when a payment fails or is declined', enabled: true },
              { label: 'Churn alerts', description: 'Notify when a customer cancels their subscription', enabled: true },
              { label: 'Weekly digest', description: 'Receive a weekly summary of key metrics', enabled: false },
              { label: 'Product updates', description: 'News about new features and improvements', enabled: false },
            ].map((item) => (
              <div key={item.label} className="flex items-start justify-between py-3 border-b border-slate-100 last:border-0">
                <div>
                  <p className="text-sm font-medium text-slate-800">{item.label}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{item.description}</p>
                </div>
                <div className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  item.enabled ? 'bg-brand-600' : 'bg-slate-200'
                }`}>
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    item.enabled ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Billing Section */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-6">Billing & Plan</h2>
          <div className="flex items-center justify-between p-4 bg-brand-50 rounded-lg border border-brand-200 mb-4">
            <div>
              <p className="font-semibold text-brand-800">Enterprise Plan</p>
              <p className="text-sm text-brand-600">$499/month · Renews Jan 1, 2025</p>
            </div>
            <button className="px-3 py-1.5 text-sm font-medium text-brand-700 border border-brand-300 rounded-lg hover:bg-brand-100 transition-colors">
              Manage Plan
            </button>
          </div>
          <div className="text-sm text-slate-600">
            <p>Payment method: Visa ending in 4242</p>
            <button className="text-brand-600 hover:underline mt-1">Update payment method</button>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-white rounded-xl shadow-sm border border-red-200 p-6">
          <h2 className="text-lg font-semibold text-red-700 mb-4">Danger Zone</h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-800">Delete Account</p>
              <p className="text-xs text-slate-500 mt-0.5">Permanently delete your account and all associated data</p>
            </div>
            <button className="px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-lg hover:bg-red-700 transition-colors">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
