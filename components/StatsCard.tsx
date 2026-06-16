import { Stat } from '@/types';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  stat: Stat;
}

export function StatsCard({ stat }: StatsCardProps) {
  const isPositive = stat.changeType === 'increase';
  const isNeutral = stat.changeType === 'neutral';

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className={cn('w-10 h-10 rounded-lg flex items-center justify-center', stat.iconBg)}>
          <span className="text-lg">{stat.icon}</span>
        </div>
        <span
          className={cn(
            'text-xs font-semibold px-2 py-1 rounded-full',
            isNeutral
              ? 'bg-slate-100 text-slate-600'
              : isPositive
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
          )}
        >
          {stat.change}
        </span>
      </div>
      <p className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</p>
      <p className="text-sm text-slate-500">{stat.label}</p>
    </div>
  );
}
