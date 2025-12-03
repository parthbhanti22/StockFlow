export interface InventoryItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  price: number;
  minStockThreshold: number;
  lastUpdated: string;
}

export type SortField = 'name' | 'quantity' | 'price' | 'category' | 'lastUpdated';
export type SortOrder = 'asc' | 'desc';

export interface DashboardStats {
  totalItems: number;
  totalValue: number;
  lowStockCount: number;
  categoriesCount: number;
}