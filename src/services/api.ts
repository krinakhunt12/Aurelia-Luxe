import type { Product, Collection } from '../types';

const API_URL = 'http://localhost:3001';

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) throw new Error('Failed to fetch products');
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const fetchProductById = async (id: string): Promise<Product | null> => {
  try {
    const response = await fetch(`${API_URL}/products/${id}`);
    if (!response.ok) throw new Error('Failed to fetch product');
    return await response.json();
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
};

export const fetchCollections = async (): Promise<Collection[]> => {
  try {
    const response = await fetch(`${API_URL}/collections`);
    if (!response.ok) throw new Error('Failed to fetch collections');
    return await response.json();
  } catch (error) {
    console.error('Error fetching collections:', error);
    return [];
  }
};

export const fetchProductsByCategory = async (category: string): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_URL}/products?category=${category}`);
    if (!response.ok) throw new Error('Failed to fetch products');
    return await response.json();
  } catch (error) {
    console.error('Error fetching products by category:', error);
    return [];
  }
};
