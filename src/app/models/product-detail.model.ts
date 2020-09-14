import { ProductCard } from 'src/app/models/product-card.model';
export interface ProductDetail extends ProductCard {
  extraInformation: string[];
  reviews: ProductDetailReview[];
}

export interface ProductDetailReview {
  user: {
    image: string;
    name: string;
  };
  rating: number;
  title: string;
  date: string;
  description: string;
}
