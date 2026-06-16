import { RevenueChart } from '@/components/RevenueChart';
import { revenueTimeSeries, userGrowthSeries, churnSeries } from '@/lib/data';

export default function AnalyticsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Analytics</h1>
        <p className="text-slate-600 mt-1">Deep dive into your business performance metrics</p>
      </div>

      {/* Date Range Selector */}
      <div className="flex gap-2 mb-8">
        {['7D', '30D', '90D', '12M', 'All'].map((range) => (
          <button
            key={range}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              range === '12M'
                ? 'bg-brand-600 text-white'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {range}
          </button>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <RevenueChart
          title="Monthly Recurring Revenue"
          description="MRR trend over the past 12 months"
          data={revenueTimeSeries}
          dataKey="revenue"
          xKey="month"
          color="#3b82f6"
        />
        <RevenueChart
          title="User Growth"
          description="New user signups per month"
          data={userGrowthSeries}
          dataKey="users"
          xKey="month"
          color="#10b981"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <RevenueChart
          title="Churn Rate"
          description="Monthly customer churn percentage"
          data={churnSeries}
          dataKey="churn"
          xKey="month"
          color="#ef4444"
        />
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-1">Revenue by Channel</h3>
          <p className="text-sm text-slate-500 mb-6">Breakdown of revenue sources</p>
          <div className="space-y-5">
            {[
              { channel: 'Direct Sales', revenue: '$48,200', pct: 42, color: 'bg-blue-500' },
              { channel: 'Self-Service', revenue: '$31,500', pct: 27, color: 'bg-green-500' },
              { channel: 'Partner Referrals', revenue: '$22,800', pct: 20, color: 'bg-purple-500' },
              { channel: 'Marketplace', revenue: '$12,700', pct: 11, color: 'bg-orange-500' },
            ].map((item) => (
              <div key={item.channel}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="font-medium text-slate-700">{item.channel}</span>
                  <span className="text-slate-500">{item.revenue} ({item.pct}%)</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5">
                  <div className={`${item.color} h-2.5 rounded-full`} style={{ width: `${item.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Metrics Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-semibold text-slate-800 mb-6">Monthly Performance Summary</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 font-semibold text-slate-600">Month</th>
                <th className="text-right py-3 px-4 font-semibold text-slate-600">MRR</th>
                <th className="text-right py-3 px-4 font-semibold text-slate-600">New Customers</th>
                <th className="text-right py-3 px-4 font-semibold text-slate-600">Churn</th>
                <th className="text-right py-3 px-4 font-semibold text-slate-600">Net Growth</th>
              </tr>
            </thead>
            <tbody>
              {[
                { month: 'Jan 2024', mrr: '$82,400', new: 28, churn: 6, net: '+22' },
                { month: 'Feb 2024', mrr: '$86,100', new: 31, churn: 5, net: '+26' },
                { month: 'Mar 2024', mrr: '$91,200', new: 35, churn: 7, net: '+28' },
                { month: 'Apr 2024', mrr: '$95,800', new: 29, churn: 4, net: '+25' },
                { month: 'May 2024', mrr: '$101,300', new: 38, churn: 6, net: '+32' },
                { month: 'Jun 2024', mrr: '$108,700', new: 42, churn: 8, net: '+34' },
              ].map((row, i) => (
                <tr key={row.month} className={i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                  <td className="py-3 px-4 font-medium text-slate-800">{row.month}</td>
                  <td className="py-3 px-4 text-right text-slate-700">{row.mrr}</td>
                  <td className="py-3 px-4 text-right text-green-600">+{row.new}</td>
                  <td className="py-3 px-4 text-right text-red-500">-{row.churn}</td>
                  <td className="py-3 px-4 text-right font-semibold text-green-600">{row.net}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
