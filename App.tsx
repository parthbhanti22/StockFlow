import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import DashboardStatsComponent from './components/DashboardStats';
import InventoryTable from './components/InventoryTable';
import ProductModal from './components/ProductModal';
import { InventoryItem, DashboardStats } from './types';
import { StorageService } from './services/storageService';
import { Menu } from 'lucide-react';

const App: React.FC = () => {
  // State
  const [items, setItems] = useState<InventoryItem[]>([]);
  const [view, setView] = useState<'dashboard' | 'inventory'>('dashboard');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<InventoryItem | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Initialize data
  useEffect(() => {
    const data = StorageService.getItems();
    setItems(data);
  }, []);

  // Save data on change
  useEffect(() => {
    if (items.length > 0) {
      StorageService.saveItems(items);
    }
  }, [items]);

  // Derived Stats
  const stats: DashboardStats = {
    totalItems: items.length,
    totalValue: items.reduce((acc, item) => acc + (item.price * item.quantity), 0),
    lowStockCount: items.filter(item => item.quantity <= item.minStockThreshold).length,
    categoriesCount: new Set(items.map(i => i.category)).size
  };

  // Handlers
  const handleAddItem = (newItem: InventoryItem) => {
    if (editingItem) {
      setItems(items.map(item => item.id === newItem.id ? newItem : item));
    } else {
      setItems([newItem, ...items]);
    }
    setIsModalOpen(false);
    setEditingItem(null);
  };

  const handleDeleteItem = (id: string) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const openAddModal = () => {
    setEditingItem(null);
    setIsModalOpen(true);
  };

  const openEditModal = (item: InventoryItem) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans flex">
      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      
      {/* Mobile Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 transform transition-transform duration-200 md:relative md:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
         <Sidebar activeView={view} onChangeView={(v) => { setView(v); setIsMobileMenuOpen(false); }} />
      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-64 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden p-2 -ml-2 text-gray-500 hover:bg-gray-100 rounded-lg"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={20} />
            </button>
            <h2 className="text-xl font-bold text-gray-800 tracking-tight">
              {view === 'dashboard' ? 'Executive Dashboard' : 'Inventory Management'}
            </h2>
          </div>
          <div className="flex items-center gap-4">
             <div className="text-sm text-gray-500 hidden sm:block">Last synced: Just now</div>
             {/* Could add notification bells or profile dropdowns here */}
          </div>
        </header>

        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-auto p-6 custom-scrollbar">
          <div className="max-w-7xl mx-auto space-y-6">
            
            {/* Dashboard View */}
            {view === 'dashboard' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <DashboardStatsComponent stats={stats} />
                
                {/* Dashboard Specific Table (simplified) */}
                <div className="mt-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Recent Inventory Movements</h3>
                    <button 
                      onClick={() => setView('inventory')} 
                      className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
                    >
                      View All
                    </button>
                  </div>
                  <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    <InventoryTable 
                      items={items.slice(0, 5)} 
                      onEdit={openEditModal} 
                      onDelete={handleDeleteItem} 
                      onAddNew={openAddModal}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Inventory View */}
            {view === 'inventory' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 h-full">
                <InventoryTable 
                  items={items} 
                  onEdit={openEditModal} 
                  onDelete={handleDeleteItem} 
                  onAddNew={openAddModal}
                />
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Modal Layer */}
      <ProductModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddItem}
        initialData={editingItem}
      />
    </div>
  );
};

export default App;