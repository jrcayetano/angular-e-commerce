import { ProductDetail } from './../../../../models/product-detail.model';
import { Component, Input, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-detail-information',
  templateUrl: './product-detail-information.component.html',
  styleUrls: ['./product-detail-information.component.scss'],
})
export class ProductDetailInformationComponent implements OnInit {
  @Input() product: ProductDetail;
  star = faStar;
  starHalf = faStarHalfAlt;

  constructor() {}

  ngOnInit(): void {}
}
