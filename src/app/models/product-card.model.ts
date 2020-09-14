import { ProductDetailReview } from './product-detail.model';
export interface ProductCard {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  src: string;
  srcset: string[];
  delivery: string;
  rating: number;
  mostseller: boolean;
  stock: number;
  category: string;
  reviews: ProductDetailReview[];
}
