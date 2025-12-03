import React from 'react';
import { LayoutDashboard, Package, Settings, BarChart3, Users, Box } from 'lucide-react';

interface SidebarProps {
  activeView: 'dashboard' | 'inventory';
  onChangeView: (view: 'dashboard' | 'inventory') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, onChangeView }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'inventory', label: 'Inventory', icon: Package },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, disabled: true },
    { id: 'team', label: 'Team', icon: Users, disabled: true },
    { id: 'settings', label: 'Settings', icon: Settings, disabled: true },
  ];

  return (
    <div className="w-64 bg-white h-screen border-r border-gray-200 flex flex-col fixed left-0 top-0 z-10 hidden md:flex">
      <div className="p-6 flex items-center gap-3 border-b border-gray-100">
        <div className="bg-indigo-600 p-2 rounded-lg">
          <Box className="w-5 h-5 text-white" />
        </div>
        <h1 className="text-xl font-bold text-gray-900 tracking-tight">StockFlow</h1>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => !item.disabled && onChangeView(item.id as 'dashboard' | 'inventory')}
              disabled={item.disabled}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 
                ${isActive 
                  ? 'bg-indigo-50 text-indigo-700' 
                  : item.disabled 
                    ? 'text-gray-400 cursor-not-allowed' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
            >
              <Icon size={18} className={isActive ? 'text-indigo-600' : 'text-gray-400'} />
              {item.label}
              {item.disabled && (
                <span className="ml-auto text-[10px] uppercase font-bold bg-gray-100 text-gray-400 px-1.5 py-0.5 rounded">
                  Soon
                </span>
              )}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 rounded-full bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-xs">
            JD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">John Doe</p>
            <p className="text-xs text-gray-500 truncate">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;