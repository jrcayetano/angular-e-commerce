import { takeUntil } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FavoriteProduct } from './../../../models/favorite-product.model';
import { AutoUnsubscribe } from './../../../utils/auto-unsubscribe';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-favorite-products',
  templateUrl: './user-favorite-products.component.html',
  styleUrls: ['./user-favorite-products.component.scss'],
})
export class UserFavoriteProductsComponent
  extends AutoUnsubscribe
  implements OnInit {
  favoriteList$: Observable<FavoriteProduct[]>;
  constructor(private userService: UserService) {
    super();
  }

  ngOnInit(): void {
    this.loadFavoriteProducts();
  }

  private loadFavoriteProducts() {
    this.favoriteList$ = this.userService
      .getFavorites()
      .pipe(takeUntil(this.autoUnsubscribe$));
  }
}
