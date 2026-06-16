export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export interface NavItem {
  label: string;
  href: string;
  icon: string;
}

export interface KpiData {
  totalUsers: number;
  totalUsersChange: number;
  mrr: number;
  mrrChange: number;
  churnRate: number;
  churnRateChange: number;
  activeSessions: number;
  activeSessionsChange: number;
}

export interface TimeSeriesPoint {
  month: string;
  revenue: number;
}

export interface MonthlySignupPoint {
  month: string;
  signups: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  joinDate: string;
}

export type SortDirection = 'asc' | 'desc';

export interface SortConfig {
  key: string;
  direction: SortDirection;
}

export interface StatCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
  color: 'blue' | 'green' | 'red' | 'purple';
  invertChange?: boolean;
}

export interface ChartWidgetProps {
  title: string;
  description?: string;
  data: Record<string, string | number>[];
  dataKey: string;
  xKey: string;
  color: string;
  valuePrefix?: string;
}

export interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export interface SortableTableHeaderProps {
  label: string;
  sortKey: string;
  currentSort: SortConfig;
  onSort: (key: string) => void;
}

export interface BadgeStatusProps {
  type: 'role' | 'status';
  value: string;
}

export interface NotificationToggleProps {
  label: string;
  description?: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}

export interface AdminSettings {
  profile: {
    displayName: string;
    email: string;
    avatarUrl: string;
  };
  notifications: {
    emailAlerts: boolean;
    productUpdates: boolean;
    securityNotifications: boolean;
  };
}
