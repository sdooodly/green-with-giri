export interface GalleryItem {
  id: string;
  caption: string;
  username: string;
  height: 'tall' | 'medium' | 'short';
  imageUrl: string;
}

export const galleryItems: GalleryItem[] = [
  { id: '1', caption: 'My monstera corner', username: '@leaflover', height: 'tall', imageUrl: 'https://images.unsplash.com/photo-1545241047-6083a3684587?w=400&h=500&fit=crop&crop=center' },
  { id: '2', caption: 'Morning light ritual', username: '@urban.jungle', height: 'medium', imageUrl: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?w=400&h=350&fit=crop&crop=center' },
  { id: '3', caption: 'Three years of growth', username: '@plantparent', height: 'tall', imageUrl: 'https://images.unsplash.com/photo-1501004318855-cdbd882de024?w=400&h=500&fit=crop&crop=center' },
  { id: '4', caption: 'Kitchen window garden', username: '@greenthumb', height: 'short', imageUrl: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=280&fit=crop&crop=center' },
  { id: '5', caption: 'New shelf, who dis', username: '@botanical.life', height: 'medium', imageUrl: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&h=350&fit=crop&crop=center' },
  { id: '6', caption: 'Sunday propagation', username: '@rootedathome', height: 'tall', imageUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=500&fit=crop&crop=center' },
  { id: '7', caption: 'Bathroom oasis', username: '@fern.friend', height: 'medium', imageUrl: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&h=350&fit=crop&crop=center' },
  { id: '8', caption: 'Reading nook companion', username: '@mossy.spaces', height: 'short', imageUrl: 'https://images.unsplash.com/photo-1572688484438-313a56e6a150?w=400&h=280&fit=crop&crop=center' },
  { id: '9', caption: 'Office desk jungle', username: '@wild.indoors', height: 'medium', imageUrl: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&h=350&fit=crop&crop=center' },
];
