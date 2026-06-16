export interface Stat {
  id: string;
  label: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease' | 'neutral';
  icon: string;
  iconBg: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  plan: 'Enterprise' | 'Professional' | 'Starter';
  status: 'active' | 'inactive' | 'trial' | 'churned';
  mrr: number;
  joinedDate: string;
}

export interface Activity {
  id: string;
  type: 'signup' | 'payment' | 'upgrade' | 'churn' | 'support';
  customerName: string;
  description: string;
  timestamp: string;
  amount?: number;
}

/**
 * ChartDataPoint is an index-signature compatible type used for Recharts.
 * All chart data arrays must use this type so they are assignable to
 * Record<string, string | number>[] as required by Recharts v3.
 */
export type ChartDataPoint = Record<string, string | number>;
