import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-brand-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-bold text-slate-900">SaaS Dashboard</span>
            </div>
            <p className="text-sm text-slate-500 max-w-xs">
              The all-in-one analytics and management platform for growing SaaS businesses.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-800 mb-3">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/dashboard" className="text-sm text-slate-500 hover:text-slate-700">Dashboard</Link></li>
              <li><Link href="/analytics" className="text-sm text-slate-500 hover:text-slate-700">Analytics</Link></li>
              <li><Link href="/customers" className="text-sm text-slate-500 hover:text-slate-700">Customers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-800 mb-3">Account</h4>
            <ul className="space-y-2">
              <li><Link href="/settings" className="text-sm text-slate-500 hover:text-slate-700">Settings</Link></li>
              <li><Link href="#" className="text-sm text-slate-500 hover:text-slate-700">Support</Link></li>
              <li><Link href="#" className="text-sm text-slate-500 hover:text-slate-700">Documentation</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-slate-400">© 2024 SaaS Dashboard. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-xs text-slate-400 hover:text-slate-600">Privacy Policy</Link>
            <Link href="#" className="text-xs text-slate-400 hover:text-slate-600">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
