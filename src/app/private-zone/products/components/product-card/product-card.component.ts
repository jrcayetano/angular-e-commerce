import { ProductCard } from './../../../../models/product-card.model';
import { PRODUCTS_PATH } from './../../../../consts/paths';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: ProductCard;
  @Output() buy: EventEmitter<ProductCard>;
  productPath = PRODUCTS_PATH;
  constructor() {}

  ngOnInit(): void {
    console.log(this.product);
  }

  onBuyClick() {
    this.buy.emit({ ...this.product });
  }
}
