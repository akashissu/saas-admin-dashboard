'use client';

import { ChevronUp, ChevronDown, ChevronsUpDown } from 'lucide-react';
import type { SortableTableHeaderProps } from '@/types';

export function SortableTableHeader({ label, sortKey, currentSort, onSort }: SortableTableHeaderProps) {
  const isActive = currentSort.key === sortKey;
  const direction = currentSort.direction;

  return (
    <th
      className="px-4 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer select-none hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
      onClick={() => onSort(sortKey)}
    >
      <div className="flex items-center gap-1.5">
        <span>{label}</span>
        <span className="text-gray-400">
          {!isActive && <ChevronsUpDown className="w-3.5 h-3.5" />}
          {isActive && direction === 'asc' && <ChevronUp className="w-3.5 h-3.5 text-brand-600" />}
          {isActive && direction === 'desc' && <ChevronDown className="w-3.5 h-3.5 text-brand-600" />}
        </span>
      </div>
    </th>
  );
}
