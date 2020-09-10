import { FavoriteProduct } from './../../../models/favorite-product.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorite-products-list',
  templateUrl: './favorite-products-list.component.html',
  styleUrls: ['./favorite-products-list.component.scss'],
})
export class FavoriteProductsListComponent implements OnInit {
  @Input() productList: FavoriteProduct[] = [];
  constructor() {}

  ngOnInit(): void {}
}
