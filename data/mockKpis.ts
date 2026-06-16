import type { KpiData, TimeSeriesPoint, MonthlySignupPoint } from '@/types';

export const mockKpis: KpiData = {
  totalUsers: 24831,
  totalUsersChange: 12.4,
  mrr: 89420,
  mrrChange: 8.7,
  churnRate: 2.3,
  churnRateChange: -0.4,
  activeSessions: 1847,
  activeSessionsChange: 5.2,
};

export const revenueTimeSeries: TimeSeriesPoint[] = [
  { month: 'Jan', revenue: 62000 },
  { month: 'Feb', revenue: 65500 },
  { month: 'Mar', revenue: 68200 },
  { month: 'Apr', revenue: 71800 },
  { month: 'May', revenue: 74300 },
  { month: 'Jun', revenue: 76900 },
  { month: 'Jul', revenue: 79100 },
  { month: 'Aug', revenue: 81400 },
  { month: 'Sep', revenue: 83700 },
  { month: 'Oct', revenue: 85200 },
  { month: 'Nov', revenue: 87600 },
  { month: 'Dec', revenue: 89420 },
];

export const monthlySignups: MonthlySignupPoint[] = [
  { month: 'Jan', signups: 320 },
  { month: 'Feb', signups: 410 },
  { month: 'Mar', signups: 385 },
  { month: 'Apr', signups: 490 },
  { month: 'May', signups: 520 },
  { month: 'Jun', signups: 475 },
  { month: 'Jul', signups: 610 },
  { month: 'Aug', signups: 580 },
  { month: 'Sep', signups: 640 },
  { month: 'Oct', signups: 700 },
  { month: 'Nov', signups: 660 },
  { month: 'Dec', signups: 730 },
];
