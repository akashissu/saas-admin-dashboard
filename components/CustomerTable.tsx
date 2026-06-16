import { Customer } from '@/types';
import { cn } from '@/lib/utils';

interface CustomerTableProps {
  customers: Customer[];
}

const statusStyles: Record<Customer['status'], string> = {
  active: 'bg-green-100 text-green-700',
  inactive: 'bg-slate-100 text-slate-600',
  trial: 'bg-blue-100 text-blue-700',
  churned: 'bg-red-100 text-red-700',
};

export function CustomerTable({ customers }: CustomerTableProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center gap-4">
        <h3 className="text-lg font-semibold text-slate-800 flex-1">Customer List</h3>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search customers..."
            className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 w-48"
          />
          <select className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500">
            <option>All Plans</option>
            <option>Enterprise</option>
            <option>Professional</option>
            <option>Starter</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left py-3 px-6 font-semibold text-slate-600">Customer</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-600">Plan</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-600">Status</th>
              <th className="text-right py-3 px-4 font-semibold text-slate-600">MRR</th>
              <th className="text-right py-3 px-4 font-semibold text-slate-600">Joined</th>
              <th className="text-right py-3 px-6 font-semibold text-slate-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {customers.map((customer) => (
              <tr key={customer.id} className="hover:bg-slate-50 transition-colors">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-semibold text-xs">
                      {customer.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">{customer.name}</p>
                      <p className="text-xs text-slate-500">{customer.email}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className="text-slate-700">{customer.plan}</span>
                </td>
                <td className="py-4 px-4">
                  <span className={cn('px-2 py-1 rounded-full text-xs font-medium', statusStyles[customer.status])}>
                    {customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
                  </span>
                </td>
                <td className="py-4 px-4 text-right font-medium text-slate-800">${customer.mrr}</td>
                <td className="py-4 px-4 text-right text-slate-500">{customer.joinedDate}</td>
                <td className="py-4 px-6 text-right">
                  <button className="text-brand-600 hover:text-brand-800 text-xs font-medium hover:underline">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 border-t border-slate-200 flex items-center justify-between text-sm text-slate-500">
        <span>Showing {customers.length} of 320 customers</span>
        <div className="flex gap-1">
          <button className="px-3 py-1.5 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">Previous</button>
          <button className="px-3 py-1.5 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors">Next</button>
        </div>
      </div>
    </div>
  );
}
