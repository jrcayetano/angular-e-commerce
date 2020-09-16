import { ToastService } from './../../../shared/shared/services/toast.service';
import { ClearBasket } from './../../../../state/basket.actions';
import { OrdersService } from './../../services/orders.service';
import { AddOrder } from './../../../../state/app-user-logged.actions';
import { Order } from './../../../../models/order.model';

import {
  ProductCard,
  ProductSeller,
} from './../../../../models/product-card.model';
import { take, takeUntil } from 'rxjs/operators';
import { AutoUnsubscribe } from './../../../../utils/auto-unsubscribe';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket-list',
  templateUrl: './basket-list.component.html',
  styleUrls: ['./basket-list.component.scss'],
})
export class BasketListComponent extends AutoUnsubscribe implements OnInit {
  subtotal = 0;
  basketList: ProductCard[] = [];
  userLoggedData;
  constructor(
    private basket: Store<{ basket }>,
    private userLoggedStore: Store<{ userLogged }>,
    private orderService: OrdersService,
    private toastService: ToastService
  ) {
    super();
  }

  ngOnInit(): void {
    this.getUserLoggedData();
    this.calculateSubtotal();
  }

  private calculateSubtotal() {
    this.basket
      .pipe(select('basket', 'productsList'), takeUntil(this.autoUnsubscribe$))
      .subscribe((products: any[]) => {
        this.basketList = [...products];
        this.subtotal = products
          .map((product) =>
            product.isOffer
              ? product.priceOffer * product.quantity
              : product.price * product.quantity
          )
          .reduce((product1, product2) => product1 + product2, 0);
      });
  }

  onBuy() {
    const order: Order = this.orderService.generateOrder(
      this.basketList,
      this.subtotal,
      this.userLoggedData
    );
    // this.userLoggedStore.dispatch(new AddOrder(order));
    this.orderService.createOrder(order).subscribe(
      (response) => {
        this.toastService.show(
          'Compra realizada correctamente. Consulte la información sobre su pedido, en su perfil',
          {
            classname: 'bg-success text-light',
            delay: 3000,
          }
        );
        this.basket.dispatch(new ClearBasket());
      },
      (error) =>
        this.toastService.show(error, {
          classname: 'bg-danger text-light',
          delay: 3000,
        })
    );
  }

  private getUserLoggedData() {
    this.userLoggedStore
      .pipe(select('userLogged', 'profile'), take(1))
      .subscribe((profile) => (this.userLoggedData = profile));
  }
}
