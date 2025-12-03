import React from 'react';
import { Package, DollarSign, AlertTriangle, TrendingUp } from 'lucide-react';
import { DashboardStats } from '../types';

interface DashboardStatsProps {
  stats: DashboardStats;
}

const StatCard: React.FC<{
  title: string;
  value: string | number;
  icon: React.ElementType;
  trend?: string;
  trendUp?: boolean;
  colorClass: string;
}> = ({ title, value, icon: Icon, trend, trendUp, colorClass }) => (
  <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
        <h3 className="text-2xl font-bold text-gray-900 tracking-tight">{value}</h3>
      </div>
      <div className={`p-3 rounded-lg ${colorClass} bg-opacity-10`}>
        <Icon className={`w-6 h-6 ${colorClass.replace('bg-', 'text-')}`} />
      </div>
    </div>
    {trend && (
      <div className="mt-4 flex items-center text-xs">
        <span className={`font-medium ${trendUp ? 'text-green-600' : 'text-red-600'} flex items-center gap-1`}>
          {trendUp ? '+' : '-'}{trend}
          <TrendingUp className="w-3 h-3" />
        </span>
        <span className="text-gray-400 ml-2">vs last month</span>
      </div>
    )}
  </div>
);

const DashboardStatsComponent: React.FC<DashboardStatsProps> = ({ stats }) => {
  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <StatCard
        title="Total Items"
        value={stats.totalItems}
        icon={Package}
        trend="12%"
        trendUp={true}
        colorClass="bg-blue-500 text-blue-600"
      />
      <StatCard
        title="Total Value"
        value={currencyFormatter.format(stats.totalValue)}
        icon={DollarSign}
        trend="8.2%"
        trendUp={true}
        colorClass="bg-emerald-500 text-emerald-600"
      />
      <StatCard
        title="Low Stock Alerts"
        value={stats.lowStockCount}
        icon={AlertTriangle}
        colorClass="bg-amber-500 text-amber-600"
      />
      <StatCard
        title="Active Categories"
        value={stats.categoriesCount}
        icon={TrendingUp}
        colorClass="bg-indigo-500 text-indigo-600"
      />
    </div>
  );
};

export default DashboardStatsComponent;