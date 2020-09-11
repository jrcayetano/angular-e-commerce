import { ProductCard } from 'src/app/models/product-card.model';
import { PRODUCTS_PATH } from './../../../../consts/paths';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: ProductCard;
  @Output() buy: EventEmitter<ProductCard> = new EventEmitter<ProductCard>();
  @Output() favorite: EventEmitter<ProductCard> = new EventEmitter<
    ProductCard
  >();
  productPath = PRODUCTS_PATH;
  constructor() {}

  ngOnInit(): void {}

  onBuyClick() {
    this.buy.emit({ ...this.product });
  }
  onFavoriteClick() {
    this.favorite.emit({ ...this.product });
  }
}
