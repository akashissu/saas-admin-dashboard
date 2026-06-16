import { Stat, Customer, Activity, ChartDataPoint } from '@/types';

export const overviewStats: Stat[] = [
  {
    id: '1',
    label: 'Monthly Recurring Revenue',
    value: '$108,700',
    change: '+12.4%',
    changeType: 'increase',
    icon: '💰',
    iconBg: 'bg-blue-100',
  },
  {
    id: '2',
    label: 'Total Customers',
    value: '320',
    change: '+8.1%',
    changeType: 'increase',
    icon: '👥',
    iconBg: 'bg-green-100',
  },
  {
    id: '3',
    label: 'Churn Rate',
    value: '2.1%',
    change: '-0.4%',
    changeType: 'decrease',
    icon: '📉',
    iconBg: 'bg-red-100',
  },
  {
    id: '4',
    label: 'Avg. Revenue Per User',
    value: '$89',
    change: '+$6',
    changeType: 'increase',
    icon: '📊',
    iconBg: 'bg-purple-100',
  },
];

export const dashboardStats: Stat[] = [
  {
    id: '1',
    label: 'MRR',
    value: '$108,700',
    change: '+12.4%',
    changeType: 'increase',
    icon: '💰',
    iconBg: 'bg-blue-100',
  },
  {
    id: '2',
    label: 'Active Customers',
    value: '298',
    change: '+24',
    changeType: 'increase',
    icon: '👥',
    iconBg: 'bg-green-100',
  },
  {
    id: '3',
    label: 'New Trials',
    value: '42',
    change: '+11%',
    changeType: 'increase',
    icon: '🚀',
    iconBg: 'bg-orange-100',
  },
  {
    id: '4',
    label: 'Support Tickets',
    value: '312',
    change: '+18%',
    changeType: 'increase',
    icon: '🎧',
    iconBg: 'bg-yellow-100',
  },
];

export const revenueTimeSeries: ChartDataPoint[] = [
  { month: 'Jan', revenue: 82400 },
  { month: 'Feb', revenue: 86100 },
  { month: 'Mar', revenue: 91200 },
  { month: 'Apr', revenue: 95800 },
  { month: 'May', revenue: 101300 },
  { month: 'Jun', revenue: 108700 },
  { month: 'Jul', revenue: 104200 },
  { month: 'Aug', revenue: 112500 },
  { month: 'Sep', revenue: 118900 },
  { month: 'Oct', revenue: 124300 },
  { month: 'Nov', revenue: 131800 },
  { month: 'Dec', revenue: 139200 },
];

export const userGrowthSeries: ChartDataPoint[] = [
  { month: 'Jan', users: 28 },
  { month: 'Feb', users: 31 },
  { month: 'Mar', users: 35 },
  { month: 'Apr', users: 29 },
  { month: 'May', users: 38 },
  { month: 'Jun', users: 42 },
  { month: 'Jul', users: 36 },
  { month: 'Aug', users: 45 },
  { month: 'Sep', users: 51 },
  { month: 'Oct', users: 48 },
  { month: 'Nov', users: 56 },
  { month: 'Dec', users: 62 },
];

export const churnSeries: ChartDataPoint[] = [
  { month: 'Jan', churn: 2.8 },
  { month: 'Feb', churn: 2.6 },
  { month: 'Mar', churn: 2.9 },
  { month: 'Apr', churn: 2.4 },
  { month: 'May', churn: 2.3 },
  { month: 'Jun', churn: 2.1 },
  { month: 'Jul', churn: 2.5 },
  { month: 'Aug', churn: 2.2 },
  { month: 'Sep', churn: 2.0 },
  { month: 'Oct', churn: 1.9 },
  { month: 'Nov', churn: 1.8 },
  { month: 'Dec', churn: 1.7 },
];

export const customers: Customer[] = [
  { id: '1', name: 'Acme Corporation', email: 'billing@acme.com', plan: 'Enterprise', status: 'active', mrr: 499, joinedDate: 'Jan 12, 2023' },
  { id: '2', name: 'TechFlow Inc', email: 'admin@techflow.io', plan: 'Professional', status: 'active', mrr: 149, joinedDate: 'Mar 5, 2023' },
  { id: '3', name: 'Sarah Mitchell', email: 'sarah@designstudio.co', plan: 'Starter', status: 'trial', mrr: 0, joinedDate: 'Nov 28, 2024' },
  { id: '4', name: 'DataSync Labs', email: 'ops@datasynclabs.com', plan: 'Professional', status: 'active', mrr: 149, joinedDate: 'Jun 18, 2023' },
  { id: '5', name: 'Bright Ventures', email: 'finance@brightventures.com', plan: 'Enterprise', status: 'active', mrr: 499, joinedDate: 'Feb 2, 2023' },
  { id: '6', name: 'Marcus Webb', email: 'marcus@freelance.dev', plan: 'Starter', status: 'inactive', mrr: 29, joinedDate: 'Aug 14, 2023' },
  { id: '7', name: 'CloudBase Systems', email: 'team@cloudbase.io', plan: 'Professional', status: 'active', mrr: 149, joinedDate: 'Apr 22, 2024' },
  { id: '8', name: 'NovaSpark Agency', email: 'hello@novaspark.agency', plan: 'Starter', status: 'churned', mrr: 0, joinedDate: 'Jul 9, 2023' },
  { id: '9', name: 'Pinnacle Health', email: 'it@pinnaclehealth.org', plan: 'Enterprise', status: 'active', mrr: 499, joinedDate: 'Sep 3, 2023' },
  { id: '10', name: 'Zara Patel', email: 'zara@startuplab.co', plan: 'Starter', status: 'trial', mrr: 0, joinedDate: 'Dec 1, 2024' },
];

export const activityFeed: Activity[] = [
  { id: '1', type: 'signup', customerName: 'Zara Patel', description: 'started a free trial', timestamp: '2 minutes ago' },
  { id: '2', type: 'payment', customerName: 'Acme Corporation', description: 'payment processed', timestamp: '18 minutes ago', amount: 499 },
  { id: '3', type: 'upgrade', customerName: 'CloudBase Systems', description: 'upgraded from Starter to Professional', timestamp: '1 hour ago' },
  { id: '4', type: 'churn', customerName: 'NovaSpark Agency', description: 'cancelled their subscription', timestamp: '3 hours ago' },
  { id: '5', type: 'support', customerName: 'DataSync Labs', description: 'opened a support ticket', timestamp: '5 hours ago' },
  { id: '6', type: 'payment', customerName: 'Bright Ventures', description: 'payment processed', timestamp: '8 hours ago', amount: 499 },
  { id: '7', type: 'signup', customerName: 'Sarah Mitchell', description: 'started a free trial', timestamp: '12 hours ago' },
];
