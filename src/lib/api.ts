// Production API utilities for ShopVerse
const API_BASE_URL = '/api';

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

interface LoginResponse {
  user: {
    _id: string;
    name: string;
    email: string;
    role: 'USER' | 'ADMIN';
  };
  accessToken: string;
}

interface RegisterResponse {
  user: {
    _id: string;
    name: string;
    email: string;
    role: 'USER' | 'ADMIN';
  };
  accessToken: string;
}

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  image: string;
  createdAt: string;
}

// Generic API request function
async function apiRequest<T>(
  endpoint: string, 
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const token = localStorage.getItem('accessToken');
  
  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    const data = await response.json();
    
    if (!response.ok) {
      return { success: false, error: data.message || 'Request failed' };
    }
    
    return { success: true, data };
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Network error' 
    };
  }
}

// Authentication API
export const authAPI = {
  async login(email: string, password: string): Promise<LoginResponse> {
    const response = await apiRequest<LoginResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    
    if (!response.success || !response.data) {
      throw new Error(response.error || 'Login failed');
    }
    
    // Store token and user data
    localStorage.setItem('accessToken', response.data.accessToken);
    localStorage.setItem('user', JSON.stringify(response.data.user));
    
    return response.data;
  },

  async register(name: string, email: string, password: string): Promise<RegisterResponse> {
    const response = await apiRequest<RegisterResponse>('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    });
    
    if (!response.success || !response.data) {
      throw new Error(response.error || 'Registration failed');
    }
    
    // Store token and user data
    localStorage.setItem('accessToken', response.data.accessToken);
    localStorage.setItem('user', JSON.stringify(response.data.user));
    
    return response.data;
  },

  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
  },
};

// Products API
export const productsAPI = {
  async getAll(): Promise<Product[]> {
    const response = await apiRequest<Product[]>('/products');
    
    if (!response.success || !response.data) {
      throw new Error(response.error || 'Failed to fetch products');
    }
    
    return response.data;
  },

  async getById(id: string): Promise<Product> {
    const response = await apiRequest<Product>(`/products/${id}`);
    
    if (!response.success || !response.data) {
      throw new Error(response.error || 'Failed to fetch product');
    }
    
    return response.data;
  },
};

    products[index] = { ...products[index], ...updates };
    localStorage.setItem('shopverse_products', JSON.stringify(products));
    return products[index];
  },

  async delete(id: string, token: string): Promise<void> {
    await delay();
    const verified = verifyToken(token);
    if (!verified || verified.role !== 'ADMIN') {
      throw new Error('Unauthorized');
    }

    const products: Product[] = JSON.parse(localStorage.getItem('shopverse_products') || '[]');
    const filtered = products.filter(p => p.id !== id);
    localStorage.setItem('shopverse_products', JSON.stringify(filtered));
  },
};

// Cart API
export const cartAPI = {
  async get(userId: string): Promise<Cart> {
    await delay();
    const carts: Cart[] = JSON.parse(localStorage.getItem('shopverse_carts') || '[]');
    const cart = carts.find(c => c.userId === userId);
    return cart || { userId, items: [] };
  },

  async addItem(userId: string, productId: string, quantity: number): Promise<Cart> {
    await delay();
    const carts: Cart[] = JSON.parse(localStorage.getItem('shopverse_carts') || '[]');
    let cart = carts.find(c => c.userId === userId);

    if (!cart) {
      cart = { userId, items: [] };
      carts.push(cart);
    }

    const existingItem = cart.items.find(item => item.productId === productId);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }

    localStorage.setItem('shopverse_carts', JSON.stringify(carts));
    return cart;
  },

  async updateItem(userId: string, productId: string, quantity: number): Promise<Cart> {
    await delay();
    const carts: Cart[] = JSON.parse(localStorage.getItem('shopverse_carts') || '[]');
    const cart = carts.find(c => c.userId === userId);

    if (!cart) throw new Error('Cart not found');

    const item = cart.items.find(i => i.productId === productId);
    if (!item) throw new Error('Item not found in cart');

    if (quantity <= 0) {
      cart.items = cart.items.filter(i => i.productId !== productId);
// Cart utility functions (localStorage-based for simplicity)
export const cartUtils = {
  getCartItems(): Array<{ _id: string; name: string; price: number; image: string; quantity: number }> {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  },

  saveCartItems(items: Array<{ _id: string; name: string; price: number; image: string; quantity: number }>): void {
    localStorage.setItem('cart', JSON.stringify(items));
  },

  clearCart(): void {
    localStorage.removeItem('cart');
  },
};

export default {
  auth: authAPI,
  products: productsAPI,
  cart: cartUtils,
};
