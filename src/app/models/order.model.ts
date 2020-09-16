import { ProductCard } from './product-card.model';
export interface Order {
  id?: number;
  date: string;
  total: number;
  receiver: string;
  number: string;
  refund: string;
  delivery: DeliveryOrder;
  products: ProductCard[];
}

export interface DeliveryOrder {
  status: string;
  info: string;
}
