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
  constructor(private productsService: ProductsService, private store: Store) {}

  ngOnInit(): void {
    this.getProducts();
  }

  onBuyProduct(product: ProductCard): void {
    console.log(product);
    this.store.dispatch(new AddProduct(product));
  }

  private getProducts(): void {
    this.products$ = this.productsService.getAll();
  }
}
