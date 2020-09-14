import { HOME_PATH, PRODUCTS_PATH } from './../../../consts/paths';
import { AddProduct } from './../../../state/basket.actions';
import { Store } from '@ngrx/store';
import { FavoriteProduct } from './../../../models/favorite-product.model';
import { Component, OnInit, Input } from '@angular/core';
import { DeleteFavoriteProduct } from 'src/app/state/app-user-logged.actions';

@Component({
  selector: 'app-favorite-product',
  templateUrl: './favorite-product.component.html',
  styleUrls: ['./favorite-product.component.scss'],
})
export class FavoriteProductComponent implements OnInit {
  @Input() product: FavoriteProduct;
  productPath: string = '';
  constructor(
    private basketStore: Store<{ basket }>,
    private userStore: Store<{ userLogged }>
  ) {}

  ngOnInit(): void {
    this.productPath = `${HOME_PATH}/${PRODUCTS_PATH}/${this.product.id}`;
  }

  onAddToBasketClick() {
    this.basketStore.dispatch(new AddProduct(this.product));
  }

  onDeleteClick() {
    console.log(this.product);
    this.userStore.dispatch(new DeleteFavoriteProduct(this.product.id));
  }
}
