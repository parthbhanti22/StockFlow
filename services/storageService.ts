import { InventoryItem } from '../types';
import { INITIAL_DATA } from '../constants';

const STORAGE_KEY = 'stockflow_inventory_v1';

export const StorageService = {
  getItems: (): InventoryItem[] => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        return INITIAL_DATA;
      }
      return JSON.parse(stored);
    } catch (error) {
      console.error('Failed to load inventory from storage', error);
      return INITIAL_DATA;
    }
  },

  saveItems: (items: InventoryItem[]): void => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error('Failed to save inventory to storage', error);
    }
  }
};