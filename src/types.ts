
export interface Product {
  id: string;
  name: string;
  price: string;
  category: 'Rings' | 'Necklaces' | 'Earrings' | 'Bridal';
  image: string;
  description: string;
}

export interface Collection {
  id: string;
  title: string;
  image: string;
  path: string;
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  location: string;
}
