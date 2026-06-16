import { RevenueChart } from '@/components/RevenueChart';
import { StatsCard } from '@/components/StatsCard';
import { RecentActivity } from '@/components/RecentActivity';
import { dashboardStats, revenueTimeSeries, activityFeed } from '@/lib/data';

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-600 mt-1">Your business performance at a glance</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {dashboardStats.map((stat) => (
          <StatsCard key={stat.id} stat={stat} />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <RevenueChart
            title="Revenue Growth"
            description="Monthly recurring revenue over the past 12 months"
            data={revenueTimeSeries}
            dataKey="revenue"
            xKey="month"
            color="#3b82f6"
          />
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-1">Plan Distribution</h3>
          <p className="text-sm text-slate-500 mb-6">Active subscriptions by plan tier</p>
          <div className="space-y-4">
            {[
              { plan: 'Enterprise', count: 48, color: 'bg-purple-500', pct: 15 },
              { plan: 'Professional', count: 134, color: 'bg-blue-500', pct: 42 },
              { plan: 'Starter', count: 138, color: 'bg-green-500', pct: 43 },
            ].map((item) => (
              <div key={item.plan}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-slate-700">{item.plan}</span>
                  <span className="text-slate-500">{item.count} customers</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div
                    className={`${item.color} h-2 rounded-full`}
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity activities={activityFeed} />
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-1">Top Metrics</h3>
          <p className="text-sm text-slate-500 mb-6">Key performance indicators this month</p>
          <div className="space-y-4">
            {[
              { label: 'Customer Acquisition Cost', value: '$142', change: '-8%', positive: true },
              { label: 'Average Revenue Per User', value: '$89', change: '+12%', positive: true },
              { label: 'Net Revenue Retention', value: '118%', change: '+3%', positive: true },
              { label: 'Churn Rate', value: '2.1%', change: '-0.4%', positive: true },
              { label: 'Trial Conversion Rate', value: '24%', change: '+2%', positive: true },
              { label: 'Support Ticket Volume', value: '312', change: '+18%', positive: false },
            ].map((metric) => (
              <div key={metric.label} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                <span className="text-sm text-slate-600">{metric.label}</span>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-800">{metric.value}</span>
                  <span className={`text-xs font-medium px-1.5 py-0.5 rounded ${metric.positive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {metric.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
