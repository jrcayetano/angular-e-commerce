import { ActivatedRoute, ChildActivationStart } from '@angular/router';
import { ProductsService } from './../../services/products.service';
import { AddProduct } from './../../../../state/basket.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AddFavoriteProduct } from 'src/app/state/app-user-logged.actions';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  productId: number;
  product;
  constructor(
    private basketStore: Store<{ basket }>,
    private userLogedStore: Store<{ userLogged }>,
    private productService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = params.id;
      this.productService
        .getById(this.productId)
        .subscribe((response) => (this.product = response));
    });
  }

  addToBasket() {
    this.basketStore.dispatch(new AddProduct(this.product));
  }

  addToFavorite() {
    this.userLogedStore.dispatch(new AddFavoriteProduct(this.product));
  }
}
