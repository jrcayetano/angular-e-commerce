import { ProductCard } from 'src/app/models/product-card.model';
import { Component, OnInit, Input } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-offer-card',
  templateUrl: './product-offer-card.component.html',
  styleUrls: ['./product-offer-card.component.scss'],
})
export class ProductOfferCardComponent
  extends ProductCardComponent
  implements OnInit {
  @Input() product: ProductCard;

  constructor() {
    super();
  }

  ngOnInit(): void {}
}
