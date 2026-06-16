import { CustomerTable } from '@/components/CustomerTable';
import { customers } from '@/lib/data';

export default function CustomersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Customers</h1>
          <p className="text-slate-600 mt-1">Manage and monitor your customer accounts</p>
        </div>
        <button className="inline-flex items-center justify-center px-4 py-2 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors text-sm">
          + Add Customer
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
          <p className="text-sm text-slate-500 mb-1">Total Customers</p>
          <p className="text-3xl font-bold text-slate-900">320</p>
          <p className="text-sm text-green-600 mt-1">+24 this month</p>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
          <p className="text-sm text-slate-500 mb-1">Active Subscriptions</p>
          <p className="text-3xl font-bold text-slate-900">298</p>
          <p className="text-sm text-green-600 mt-1">93.1% retention</p>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
          <p className="text-sm text-slate-500 mb-1">Avg. Lifetime Value</p>
          <p className="text-3xl font-bold text-slate-900">$2,840</p>
          <p className="text-sm text-green-600 mt-1">+$180 vs last month</p>
        </div>
      </div>

      <CustomerTable customers={customers} />
    </div>
  );
}
