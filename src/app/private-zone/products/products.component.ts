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
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts() {
    this.products$ = this.productsService.getAll();
  }
}
