import { AddFavoriteProduct } from 'src/app/state/app-user-logged.actions';
import { AddProduct } from './../../state/basket.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductsService } from './services/products.service';
import { Component, OnInit } from '@angular/core';
import { ProductCard } from 'src/app/models/product-card.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$: Observable<ProductCard>;
  constructor(
    private productsService: ProductsService,
    private basketStore: Store<{ basket }>,
    private userLoggedStore: Store<{ userLogged }>
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  onBuyProduct(product: ProductCard): void {
    console.log(product);
    this.basketStore.dispatch(new AddProduct(product));
  }

  onFavoriteProduct(product: ProductCard): void {
    console.log(product);
    this.userLoggedStore.dispatch(new AddFavoriteProduct(product));
  }

  private getProducts(): void {
    this.products$ = this.productsService.getAll();
  }
}
