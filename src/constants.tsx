
import type { Product, Collection, Testimonial } from './types';

export const COLORS = {
  primary: '#0F0F0F',
  secondary: '#2B2B2B',
  accent: '#B5B5B5',
  background: '#FFFFFF',
};

export const COLLECTIONS: Collection[] = [
  { id: 'col_001', title: 'Rings', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1470&auto=format&fit=crop', path: '/collections/rings' },
  { id: 'col_002', title: 'Necklaces', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1470&auto=format&fit=crop', path: '/collections/necklaces' },
  { id: 'col_003', title: 'Earrings', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1470&auto=format&fit=crop', path: '/collections/earrings' },
  { id: 'col_004', title: 'Bridal', image: 'https://images.unsplash.com/photo-1515562141207-6811bcdd56f9?q=80&w=1470&auto=format&fit=crop', path: '/collections/bridal' },
];

export const SIGNATURE_PIECES: Product[] = [
  {
    id: 'prod_001',
    name: 'Solitaire Diamond Ring',
    price: '$2,450',
    category: 'Rings',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1470&auto=format&fit=crop',
    description: 'An elegant solitaire diamond ring featuring a 1.5 carat certified diamond set in 18K white gold. A timeless piece that epitomizes minimalist luxury and sophistication.'
  },
  {
    id: 'prod_002',
    name: 'Pearl Pendant Necklace',
    price: '$1,850',
    category: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1470&auto=format&fit=crop',
    description: 'Sophisticated pearl pendant on a delicate gold chain. Handpicked Akoya pearls with impeccable luster and lustrous shine.'
  },
  {
    id: 'prod_003',
    name: 'Classic Diamond Studs',
    price: '$1,200',
    category: 'Earrings',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1300&auto=format&fit=crop',
    description: 'Timeless diamond stud earrings in 14K white gold. Each stone is carefully selected for brilliance and clarity.'
  },
  {
    id: 'prod_004',
    name: 'Bridal Diamond Ring Set',
    price: '$3,950',
    category: 'Bridal',
    image: 'https://images.unsplash.com/photo-1515562141207-6811bcdd56f9?q=80&w=1470&auto=format&fit=crop',
    description: 'Exquisite bridal set featuring a stunning center diamond with matching wedding band. Designed for the discerning bride.'
  },
  {
    id: 'prod_005',
    name: 'Emerald Cut Diamond Ring',
    price: '$2,850',
    category: 'Rings',
    image: 'https://images.unsplash.com/photo-1515377905703-c28bbc4b7e38?q=80&w=1470&auto=format&fit=crop',
    description: 'Sophisticated emerald cut diamond set in platinum. A modern take on classic elegance with exceptional clarity.'
  },
  {
    id: 'prod_006',
    name: 'Gold Tennis Necklace',
    price: '$2,200',
    category: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1515905035918-90b6b6e1e6b9?q=80&w=1470&auto=format&fit=crop',
    description: 'Stunning tennis necklace with round brilliant diamonds set in 18K yellow gold. Perfect for any occasion.'
  },
  {
    id: 'prod_007',
    name: 'Drop Pearl Earrings',
    price: '$1,450',
    category: 'Earrings',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1300&auto=format&fit=crop',
    description: 'Elegant drop earrings featuring lustrous South Sea pearls suspended in 14K white gold.'
  },
  {
    id: 'prod_008',
    name: 'Vintage Bridal Collection',
    price: '$4,500',
    category: 'Bridal',
    image: 'https://images.unsplash.com/photo-1515377905703-c28bbc4b7e38?q=80&w=1470&auto=format&fit=crop',
    description: 'Vintage-inspired bridal collection with intricate detailing and exceptional craftsmanship. A statement piece for your special day.'
  },
  {
    id: 'prod_009',
    name: 'Sapphire Halo Ring',
    price: '$3,200',
    category: 'Rings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1470&auto=format&fit=crop',
    description: 'Stunning sapphire center stone surrounded by a halo of brilliant diamonds in 18K white gold.'
  },
  {
    id: 'prod_010',
    name: 'Diamond Tennis Bracelet',
    price: '$2,950',
    category: 'Bridal',
    image: 'https://images.unsplash.com/photo-1515905035918-90b6b6e1e6b9?q=80&w=1470&auto=format&fit=crop',
    description: 'Elegant tennis bracelet with perfectly matched round brilliant diamonds set in platinum.'
  },
  {
    id: 'prod_011',
    name: 'Moonstone Pendant',
    price: '$1,650',
    category: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1470&auto=format&fit=crop',
    description: 'Ethereal moonstone pendant with a soft glow, set in rose gold. A mystical and elegant piece.'
  },
  {
    id: 'prod_012',
    name: 'Ruby & Diamond Earrings',
    price: '$1,800',
    category: 'Earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1300&auto=format&fit=crop',
    description: 'Vibrant ruby gemstones accented with brilliant diamonds in 14K white gold.'
  },
  {
    id: 'prod_013',
    name: 'Cushion Cut Diamond Ring',
    price: '$2,750',
    category: 'Rings',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1470&auto=format&fit=crop',
    description: 'Sophisticated cushion cut diamond with a thick halo of white diamonds in platinum setting.'
  },
  {
    id: 'prod_014',
    name: 'Gold Layered Necklace',
    price: '$1,250',
    category: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1515377905703-c28bbc4b7e38?q=80&w=1470&auto=format&fit=crop',
    description: 'Delicate layered necklace in 18K yellow gold with adjustable lengths for a modern look.'
  },
  {
    id: 'prod_015',
    name: 'Diamond Chandelier Earrings',
    price: '$2,100',
    category: 'Earrings',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1300&auto=format&fit=crop',
    description: 'Dramatic chandelier-style earrings with cascading diamonds for a luxurious evening look.'
  },
  {
    id: 'prod_016',
    name: 'Three Stone Bridal Ring',
    price: '$3,850',
    category: 'Bridal',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1470&auto=format&fit=crop',
    description: 'Iconic three-stone engagement ring symbolizing past, present, and future in 18K gold.'
  },
  {
    id: 'prod_017',
    name: 'Opal Statement Ring',
    price: '$2,300',
    category: 'Rings',
    image: 'https://images.unsplash.com/photo-1515905035918-90b6b6e1e6b9?q=80&w=1470&auto=format&fit=crop',
    description: 'Iridescent opal gemstone set in oxidized silver with diamond accents. A unique statement piece.'
  },
  {
    id: 'prod_018',
    name: 'Gold & Pearl Necklace',
    price: '$1,500',
    category: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1470&auto=format&fit=crop',
    description: 'Timeless combination of lustrous South Sea pearls with 18K yellow gold settings.'
  },
  {
    id: 'prod_019',
    name: 'Black Diamond Studs',
    price: '$1,950',
    category: 'Earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1300&auto=format&fit=crop',
    description: 'Bold black diamond studs set in white gold. Perfect for adding edge and sophistication.'
  },
  {
    id: 'prod_020',
    name: 'Princess Cut Bridal Set',
    price: '$4,200',
    category: 'Bridal',
    image: 'https://images.unsplash.com/photo-1515377905703-c28bbc4b7e38?q=80&w=1470&auto=format&fit=crop',
    description: 'Contemporary princess cut ring with matching wedding band. Modern elegance meets timeless style.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, text: "The attention to detail in every piece is unparalleled. It truly is a work of art.", author: "Eleanor Vance", location: "London" },
  { id: 2, text: "AURELIA LUXE understands that luxury is found in simplicity. My bridal set is timeless.", author: "Sophia Moretti", location: "Milan" },
  { id: 3, text: "Exceptional service and exquisite craftsmanship. The custom consultation was a breeze.", author: "James Sterling", location: "New York" },
];
