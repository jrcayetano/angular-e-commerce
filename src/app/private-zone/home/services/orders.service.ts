import { API_USER_ORDERS } from './../../../consts/api';
import { environment } from './../../../../environments/environment';
import { Order } from './../../../models/order.model';
import { ProductCard } from './../../../models/product-card.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private http: HttpClient) {}

  createOrder(order: Order) {
    return this.http.post(
      `${environment.server_url}/${API_USER_ORDERS}`,
      order
    );
  }

  generateOrder(
    product: ProductCard[],
    totalBasket: number,
    userLoggedData
  ): Order {
    return {
      date: 'hoy',
      total: totalBasket,
      receiver: userLoggedData.name,
      number: 'xxx-yyyyyyy-zzzzzzz',
      refund: '8 onov 2020',
      delivery: {
        status: 'En camino',
        info: '',
      },
      products: product,
    };
  }
}
