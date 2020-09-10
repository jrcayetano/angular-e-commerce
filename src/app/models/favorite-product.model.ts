import { ProductCard } from './product-card.model';
export interface FavoriteProduct extends ProductCard {
  addedDate: string;
  rating: number;
}
