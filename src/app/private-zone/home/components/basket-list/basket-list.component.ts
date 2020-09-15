import { ProductCard } from './../../../../models/product-card.model';
import { takeUntil } from 'rxjs/operators';
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

  constructor(private basket: Store<{ basket }>) {
    super();
  }

  ngOnInit(): void {
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
}
