import { Activity } from '@/types';
import { cn } from '@/lib/utils';

interface RecentActivityProps {
  activities: Activity[];
}

const activityTypeStyles: Record<Activity['type'], { bg: string; text: string; icon: string }> = {
  signup: { bg: 'bg-green-100', text: 'text-green-600', icon: '👤' },
  payment: { bg: 'bg-blue-100', text: 'text-blue-600', icon: '💳' },
  upgrade: { bg: 'bg-purple-100', text: 'text-purple-600', icon: '⬆️' },
  churn: { bg: 'bg-red-100', text: 'text-red-600', icon: '❌' },
  support: { bg: 'bg-orange-100', text: 'text-orange-600', icon: '🎧' },
};

export function RecentActivity({ activities }: RecentActivityProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h3 className="text-lg font-semibold text-slate-800 mb-1">Recent Activity</h3>
      <p className="text-sm text-slate-500 mb-6">Latest events across your platform</p>
      <div className="space-y-4">
        {activities.map((activity) => {
          const style = activityTypeStyles[activity.type];
          return (
            <div key={activity.id} className="flex items-start gap-3">
              <div className={cn('w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm', style.bg)}>
                {style.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-800">
                  <span className="font-medium">{activity.customerName}</span>{' '}
                  <span className="text-slate-600">{activity.description}</span>
                </p>
                <p className="text-xs text-slate-400 mt-0.5">{activity.timestamp}</p>
              </div>
              {activity.amount && (
                <span className="text-sm font-semibold text-slate-800 flex-shrink-0">${activity.amount}</span>
              )}
            </div>
          );
        })}
      </div>
      <button className="mt-6 w-full text-center text-sm text-brand-600 hover:text-brand-800 font-medium">
        View all activity →
      </button>
    </div>
  );
}
