export interface GalleryItem {
  id: string;
  caption: string;
  username: string;
  height: 'tall' | 'medium' | 'short';
}

export const galleryItems: GalleryItem[] = [
  { id: '1', caption: 'My monstera corner', username: '@leaflover', height: 'tall' },
  { id: '2', caption: 'Morning light ritual', username: '@urban.jungle', height: 'medium' },
  { id: '3', caption: 'Three years of growth', username: '@plantparent', height: 'tall' },
  { id: '4', caption: 'Kitchen window garden', username: '@greenthumb', height: 'short' },
  { id: '5', caption: 'New shelf, who dis', username: '@botanical.life', height: 'medium' },
  { id: '6', caption: 'Sunday propagation', username: '@rootedathome', height: 'tall' },
  { id: '7', caption: 'Bathroom oasis', username: '@fern.friend', height: 'medium' },
  { id: '8', caption: 'Reading nook companion', username: '@mossy.spaces', height: 'short' },
  { id: '9', caption: 'Office desk jungle', username: '@wild.indoors', height: 'medium' },
];
