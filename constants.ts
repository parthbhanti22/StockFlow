import { InventoryItem } from './types';

export const CATEGORIES = [
  'Electronics',
  'Office Supplies',
  'Furniture',
  'Accessories',
  'Peripherals'
];

export const INITIAL_DATA: InventoryItem[] = [
  {
    id: '1',
    name: 'Ergonomic Mesh Chair',
    category: 'Furniture',
    quantity: 45,
    price: 299.00,
    minStockThreshold: 10,
    lastUpdated: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Wireless Mechanical Keyboard',
    category: 'Peripherals',
    quantity: 8,
    price: 129.99,
    minStockThreshold: 15,
    lastUpdated: new Date().toISOString()
  },
  {
    id: '3',
    name: '27" 4K Monitor',
    category: 'Electronics',
    quantity: 12,
    price: 449.50,
    minStockThreshold: 5,
    lastUpdated: new Date().toISOString()
  },
  {
    id: '4',
    name: 'USB-C Docking Station',
    category: 'Accessories',
    quantity: 3,
    price: 89.99,
    minStockThreshold: 8,
    lastUpdated: new Date().toISOString()
  }
];