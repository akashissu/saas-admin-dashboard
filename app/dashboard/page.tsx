'use client';

import { StatCard } from '@/components/StatCard';
import { LineChartWidget } from '@/components/LineChartWidget';
import { BarChartWidget } from '@/components/BarChartWidget';
import { mockKpis, revenueTimeSeries, monthlySignups } from '@/data/mockKpis';
import { Users, DollarSign, TrendingDown, Activity } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Dashboard Overview</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Welcome back! Here's what's happening with your product.</p>
      </div>

      {/* KPI Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard
          title="Total Users"
          value={mockKpis.totalUsers.toLocaleString()}
          change={mockKpis.totalUsersChange}
          icon={<Users className="w-5 h-5" />}
          color="blue"
        />
        <StatCard
          title="Monthly Recurring Revenue"
          value={`$${mockKpis.mrr.toLocaleString()}`}
          change={mockKpis.mrrChange}
          icon={<DollarSign className="w-5 h-5" />}
          color="green"
        />
        <StatCard
          title="Churn Rate"
          value={`${mockKpis.churnRate}%`}
          change={mockKpis.churnRateChange}
          icon={<TrendingDown className="w-5 h-5" />}
          color="red"
          invertChange
        />
        <StatCard
          title="Active Sessions"
          value={mockKpis.activeSessions.toLocaleString()}
          change={mockKpis.activeSessionsChange}
          icon={<Activity className="w-5 h-5" />}
          color="purple"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <LineChartWidget
          title="Revenue Growth"
          description="Monthly recurring revenue over the past 12 months"
          data={revenueTimeSeries}
          dataKey="revenue"
          xKey="month"
          color="#3b82f6"
          valuePrefix="$"
        />
        <BarChartWidget
          title="Monthly Signups"
          description="New user registrations per month"
          data={monthlySignups}
          dataKey="signups"
          xKey="month"
          color="#8b5cf6"
        />
      </div>
    </div>
  );
}
