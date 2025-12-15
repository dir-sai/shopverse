import { Product, User } from './types';

// Mock products data
export const initialProducts: Product[] = [
  {
    _id: '1',
    name: 'Wireless Headphones',
    description: 'Premium noise-canceling headphones with 30-hour battery life. Experience crystal-clear audio quality with advanced noise cancellation technology.',
    price: 299.99,
    category: 'Audio',
    stock: 50,
    image: 'https://images.unsplash.com/photo-1713618651165-a3cf7f85506c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBoZWFkcGhvbmVzfGVufDF8fHx8MTc2NTY1MjQ4MXww&ixlib=rb-4.1.0&q=80&w=1080',
    createdAt: new Date('2024-01-15').toISOString(),
  },
  {
    _id: '2',
    name: 'Laptop Pro 15"',
    description: 'High-performance laptop with Intel i7 processor, 16GB RAM, and 512GB SSD. Perfect for professionals and content creators.',
    price: 1299.99,
    category: 'Computers',
    stock: 25,
    image: 'https://images.unsplash.com/photo-1511385348-a52b4a160dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlcnxlbnwxfHx8fDE3NjU2NjIzODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    createdAt: new Date('2024-01-20').toISOString(),
  },
  {
    _id: '3',
    name: 'Smartphone X',
    description: 'Latest flagship smartphone with 6.7" OLED display, 5G connectivity, and triple camera system. Capture stunning photos and videos.',
    price: 899.99,
    category: 'Mobile',
    stock: 100,
    image: 'https://images.unsplash.com/photo-1741061963569-9d0ef54d10d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9iaWxlfGVufDF8fHx8MTc2NTYzMDc5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    createdAt: new Date('2024-02-01').toISOString(),
  },
  {
    _id: '4',
    name: 'Smart Watch Pro',
    description: 'Advanced fitness tracking smartwatch with heart rate monitor, GPS, and 7-day battery life. Stay connected and healthy.',
    price: 399.99,
    category: 'Wearables',
    stock: 75,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHdhdGNofGVufDF8fHx8MTc2NTYwMDE0NXww&ixlib=rb-4.1.0&q=80&w=1080',
    createdAt: new Date('2024-02-10').toISOString(),
  },
  {
    _id: '5',
    name: 'Bluetooth Speaker',
    description: 'Portable wireless speaker with 360° sound, waterproof design, and 12-hour playtime. Perfect for outdoor adventures.',
    price: 149.99,
    category: 'Audio',
    stock: 120,
    image: 'https://images.unsplash.com/photo-1674303324806-7018a739ed11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMHNwZWFrZXJ8ZW58MXx8fHwxNzY1Njc2MzE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    createdAt: new Date('2024-02-15').toISOString(),
  },
  {
    _id: '6',
    name: 'Digital Camera 4K',
    description: 'Professional mirrorless camera with 24MP sensor, 4K video recording, and advanced autofocus. Capture life in stunning detail.',
    price: 1499.99,
    category: 'Cameras',
    stock: 30,
    image: 'https://images.unsplash.com/photo-1579535984712-92fffbbaa266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NjU2OTAzMTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    createdAt: new Date('2024-02-20').toISOString(),
  },
  {
    _id: '7',
    name: 'Tablet Air 11"',
    description: 'Ultra-thin tablet with stunning display, all-day battery life, and powerful performance. Perfect for work and entertainment.',
    price: 649.99,
    category: 'Tablets',
    stock: 60,
    image: 'https://images.unsplash.com/photo-1760708369071-e8a50a8979cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBkZXZpY2V8ZW58MXx8fHwxNzY1NjY1NDk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    createdAt: new Date('2024-03-01').toISOString(),
  },
  {
    _id: '8',
    name: 'Gaming Console Next-Gen',
    description: 'Next-generation gaming console with 4K gaming, ray tracing, and ultra-fast SSD. Experience gaming like never before.',
    price: 499.99,
    category: 'Gaming',
    stock: 45,
    image: 'https://images.unsplash.com/photo-1604846887565-640d2f52d564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb25zb2xlfGVufDF8fHx8MTc2NTY0NDgxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    createdAt: new Date('2024-03-05').toISOString(),
  },
];

// Initial admin user
export const initialUsers: User[] = [
  {
    _id: 'admin-1',
    name: 'Admin User',
    email: 'admin@shopverse.com',
    password: 'admin123', // In production, this would be hashed
    role: 'ADMIN',
    createdAt: new Date('2024-01-01').toISOString(),
  },
];
