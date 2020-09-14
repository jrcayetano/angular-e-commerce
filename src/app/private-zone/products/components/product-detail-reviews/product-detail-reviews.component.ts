import { ProductDetailReview } from './../../../../models/product-detail.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail-reviews',
  templateUrl: './product-detail-reviews.component.html',
  styleUrls: ['./product-detail-reviews.component.scss'],
})
export class ProductDetailReviewsComponent implements OnInit {
  @Input() review: ProductDetailReview;
  constructor() {}

  ngOnInit(): void {}
}
