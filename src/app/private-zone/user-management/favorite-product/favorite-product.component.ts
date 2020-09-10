import { AddProduct } from './../../../state/basket.actions';
import { Store } from '@ngrx/store';
import { FavoriteProduct } from './../../../models/favorite-product.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorite-product',
  templateUrl: './favorite-product.component.html',
  styleUrls: ['./favorite-product.component.scss'],
})
export class FavoriteProductComponent implements OnInit {
  @Input() product: FavoriteProduct;
  constructor(private basketStore: Store<{ basket }>) {}

  ngOnInit(): void {}

  onAddToBasketClick() {
    this.basketStore.dispatch(new AddProduct(this.product));
  }

  onDeleteClick() {}
}
