'use client';

import { TrendingUp, TrendingDown } from 'lucide-react';
import type { StatCardProps } from '@/types';

const colorMap = {
  blue: 'bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400',
  green: 'bg-green-50 dark:bg-green-950 text-green-600 dark:text-green-400',
  red: 'bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400',
  purple: 'bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400',
};

export function StatCard({ title, value, change, icon, color, invertChange }: StatCardProps) {
  const isPositive = change >= 0;
  const isGood = invertChange ? !isPositive : isPositive;

  return (
    <div className="card p-5">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-1">{value}</p>
        </div>
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${colorMap[color]}`}>
          {icon}
        </div>
      </div>
      <div className="flex items-center gap-1 mt-3">
        {isGood ? (
          <TrendingUp className="w-3.5 h-3.5 text-green-500" />
        ) : (
          <TrendingDown className="w-3.5 h-3.5 text-red-500" />
        )}
        <span className={`text-xs font-medium ${isGood ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
          {isPositive ? '+' : ''}{change}%
        </span>
        <span className="text-xs text-gray-400 dark:text-gray-500">vs last month</span>
      </div>
    </div>
  );
}
