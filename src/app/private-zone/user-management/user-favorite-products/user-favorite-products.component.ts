import { AddFavoriteProductInBulk } from './../../../state/app-user-logged.actions';
import { Store, select } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FavoriteProduct } from './../../../models/favorite-product.model';
import { AutoUnsubscribe } from './../../../utils/auto-unsubscribe';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { AddFavoriteProduct } from 'src/app/state/app-user-logged.actions';

@Component({
  selector: 'app-user-favorite-products',
  templateUrl: './user-favorite-products.component.html',
  styleUrls: ['./user-favorite-products.component.scss'],
})
export class UserFavoriteProductsComponent
  extends AutoUnsubscribe
  implements OnInit {
  favoriteList$: Observable<FavoriteProduct[]>;
  constructor(
    private userService: UserService,
    private userStore: Store<{ userLogged }>
  ) {
    super();
  }

  ngOnInit(): void {
    this.loadFavoriteProducts();
    this.loadProductsInstore();
  }

  private loadFavoriteProducts() {
    /*Esto deberia leer del servicio his.userService.getFavorites()
     * lo pongo así para dar un mayor uso a la store
     */
    this.favoriteList$ = this.userStore.pipe(
      select('userLogged', 'favoriteProducts'),
      takeUntil(this.autoUnsubscribe$)
    );
  }

  private loadProductsInstore() {
    this.userService
      .getFavorites()
      .pipe(takeUntil(this.autoUnsubscribe$))
      .subscribe((product: FavoriteProduct[]) =>
        this.userStore.dispatch(new AddFavoriteProductInBulk(product))
      );
  }
}
