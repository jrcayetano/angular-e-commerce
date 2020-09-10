export interface OrderItem {
  id: number;
  date: string;
  total: number;
  receiver: string;
  number: string;
  refund: string;
  delivery: {
    status: string;
    info: string;
  };
  products: OrderProduct[];
}

export interface OrderProduct {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  srcset: string;
  delivery: string;
  sellet: OrderSeller;
}

export interface OrderSeller {
  name: string;
  profile: string;
}
