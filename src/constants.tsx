
import type { Product, Collection, Testimonial } from './types';

export const COLORS = {
  primary: '#0F0F0F',
  secondary: '#2B2B2B',
  accent: '#B5B5B5',
  background: '#FFFFFF',
};

export const COLLECTIONS: Collection[] = [
  { id: '1', title: 'The Solitaire Collection', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1470&auto=format&fit=crop', path: '/rings' },
  { id: '2', title: 'Essentials of Grace', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1374&auto=format&fit=crop', path: '/necklaces' },
  { id: '3', title: 'Nocturnal Whispers', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1374&auto=format&fit=crop', path: '/earrings' },
  { id: '4', title: 'Eternal Vows', image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1470&auto=format&fit=crop', path: '/bridal' },
];

export const SIGNATURE_PIECES: Product[] = [
  {
    id: 's1',
    name: 'Astrid Diamond Ring',
    price: '$4,200',
    category: 'Rings',
    image: 'https://images.unsplash.com/photo-1603561591411-0e7320b97771?q=80&w=1480&auto=format&fit=crop',
    description: 'A 2-carat brilliant cut diamond set in solid platinum.'
  },
  {
    id: 's2',
    name: 'Seraphina Drop Earrings',
    price: '$2,850',
    category: 'Earrings',
    image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=1496&auto=format&fit=crop',
    description: 'Delicate pear-shaped diamonds floating on silver-white gold.'
  },
  {
    id: 's3',
    name: 'Minimalist Torque Choker',
    price: '$3,100',
    category: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1515562141207-7a18b5ce7142?q=80&w=1470&auto=format&fit=crop',
    description: 'Seamless platinum choker with a single inset emerald-cut diamond.'
  },
  {
    id: 's4',
    name: 'Infinity Band',
    price: '$1,950',
    category: 'Rings',
    image: 'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=1470&auto=format&fit=crop',
    description: 'Micro-pavé diamonds wrapping around a white gold band.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, text: "The attention to detail in the Astrid ring is unparalleled. It truly is a piece of art.", author: "Eleanor Vance", location: "London" },
  { id: 2, text: "AURELIA LUXE understands that luxury is found in simplicity. My bridal set is timeless.", author: "Sophia Moretti", location: "Milan" },
  { id: 3, text: "Exceptional service and exquisite craftsmanship. The custom consultation was a breeze.", author: "James Sterling", location: "New York" },
];
