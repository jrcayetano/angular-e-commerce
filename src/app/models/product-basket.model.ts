import { ProductCard } from 'src/app/models/product-card.model';

export interface ProductBasket extends ProductCard {
  quantity: number;
}
