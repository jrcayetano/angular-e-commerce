import { AutoUnsubscribe } from './../../../../utils/auto-unsubscribe';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent
  extends AutoUnsubscribe
  implements OnInit, OnDestroy {
  faShoppingCart = faShoppingCart;
  productList$: Observable<[]>;
  constructor(private store: Store<{ basket }>) {
    super();
  }

  ngOnInit(): void {
    this.subscriteToProductList();
  }

  private subscriteToProductList() {
    this.productList$ = this.store.pipe(
      select('basket', 'productsList'),
      takeUntil(this.autoUnsubscribe$)
    );
  }
}
