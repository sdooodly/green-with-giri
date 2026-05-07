import type { Product } from '@/types';

/**
 * Static product data — replace with DB queries via Prisma in production.
 * Prices stored in paise (₹1,499 = 149900 paise).
 *
 * Images sourced from Unsplash (free to use under Unsplash License).
 * See README.md for full attribution.
 */
export const products: Product[] = [
  { id: '1', name: 'Monstera Deliciosa', latinName: 'Monstera deliciosa', priceInPaise: 149900, badges: ['beginner'], stock: 12, imageUrl: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500&h=625&fit=crop' },
  { id: '2', name: 'Fiddle Leaf Fig', latinName: 'Ficus lyrata', priceInPaise: 199900, badges: ['rare'], stock: 5, imageUrl: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=500&h=625&fit=crop' },
  { id: '3', name: 'Snake Plant', latinName: 'Dracaena trifasciata', priceInPaise: 59900, badges: ['beginner', 'low-light'], stock: 30, imageUrl: 'https://images.unsplash.com/photo-1593482892540-ba54b5e0e44e?w=500&h=625&fit=crop' },
  { id: '4', name: 'Pothos Golden', latinName: 'Epipremnum aureum', priceInPaise: 34900, badges: ['beginner', 'pet-safe'], stock: 40, imageUrl: 'https://images.unsplash.com/photo-1637967886160-fd78dc3ce3f5?w=500&h=625&fit=crop' },
  { id: '5', name: 'Bird of Paradise', latinName: 'Strelitzia reginae', priceInPaise: 249900, badges: [], stock: 8, imageUrl: 'https://images.unsplash.com/photo-1616690248297-3888a7f5b8c4?w=500&h=625&fit=crop' },
  { id: '6', name: 'Calathea Orbifolia', latinName: 'Goeppertia orbifolia', priceInPaise: 129900, badges: ['pet-safe'], stock: 10, imageUrl: 'https://images.unsplash.com/photo-1637967886160-fd78dc3ce3f5?w=500&h=625&fit=crop' },
  { id: '7', name: 'String of Pearls', latinName: 'Senecio rowleyanus', priceInPaise: 69900, badges: ['rare'], stock: 7, imageUrl: 'https://images.unsplash.com/photo-1597055181300-e3633a917388?w=500&h=625&fit=crop' },
  { id: '8', name: 'Rubber Plant', latinName: 'Ficus elastica', priceInPaise: 89900, badges: ['beginner'], stock: 18, imageUrl: 'https://images.unsplash.com/photo-1635863138275-d9b33299680b?w=500&h=625&fit=crop' },
  { id: '9', name: 'Peace Lily', latinName: 'Spathiphyllum wallisii', priceInPaise: 79900, badges: ['low-light', 'beginner'], stock: 22, imageUrl: 'https://images.unsplash.com/photo-1616690248297-3888a7f5b8c4?w=500&h=625&fit=crop' },
  { id: '10', name: 'Alocasia Polly', latinName: 'Alocasia amazonica', priceInPaise: 119900, badges: ['rare'], stock: 6, imageUrl: 'https://images.unsplash.com/photo-1620127252536-03bdfcb5a9ad?w=500&h=625&fit=crop' },
  { id: '11', name: 'Boston Fern', latinName: 'Nephrolepis exaltata', priceInPaise: 64900, badges: ['pet-safe'], stock: 15, imageUrl: 'https://images.unsplash.com/photo-1597055181300-e3633a917388?w=500&h=625&fit=crop' },
  { id: '12', name: 'Philodendron Pink Princess', latinName: 'Philodendron erubescens', priceInPaise: 349900, badges: ['rare'], stock: 3, imageUrl: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500&h=625&fit=crop' },
  { id: '13', name: 'ZZ Plant', latinName: 'Zamioculcas zamiifolia', priceInPaise: 84900, badges: ['beginner', 'low-light'], stock: 20, imageUrl: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=500&h=625&fit=crop' },
  { id: '14', name: 'Hoya Carnosa', latinName: 'Hoya carnosa', priceInPaise: 74900, badges: ['pet-safe'], stock: 11, imageUrl: 'https://images.unsplash.com/photo-1620127252536-03bdfcb5a9ad?w=500&h=625&fit=crop' },
  { id: '15', name: 'Pilea Peperomioides', latinName: 'Pilea peperomioides', priceInPaise: 49900, badges: ['beginner', 'pet-safe'], stock: 25, imageUrl: 'https://images.unsplash.com/photo-1637967886160-fd78dc3ce3f5?w=500&h=625&fit=crop' },
  { id: '16', name: 'Staghorn Fern', latinName: 'Platycerium bifurcatum', priceInPaise: 179900, badges: [], stock: 4, imageUrl: 'https://images.unsplash.com/photo-1597055181300-e3633a917388?w=500&h=625&fit=crop' },
  { id: '17', name: 'Tradescantia Nanouk', latinName: 'Tradescantia albiflora', priceInPaise: 39900, badges: ['beginner'], stock: 28, imageUrl: 'https://images.unsplash.com/photo-1616690248297-3888a7f5b8c4?w=500&h=625&fit=crop' },
  { id: '18', name: 'Anthurium Clarinervium', latinName: 'Anthurium clarinervium', priceInPaise: 229900, badges: ['rare'], stock: 4, imageUrl: 'https://images.unsplash.com/photo-1635863138275-d9b33299680b?w=500&h=625&fit=crop' },
  { id: '19', name: 'Spider Plant', latinName: 'Chlorophytum comosum', priceInPaise: 29900, badges: ['beginner', 'pet-safe'], stock: 35, imageUrl: 'https://images.unsplash.com/photo-1593482892540-ba54b5e0e44e?w=500&h=625&fit=crop' },
  { id: '20', name: 'Maranta Prayer Plant', latinName: 'Maranta leuconeura', priceInPaise: 69900, badges: ['pet-safe', 'low-light'], stock: 14, imageUrl: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=500&h=625&fit=crop' },
];
