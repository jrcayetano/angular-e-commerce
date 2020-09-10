import { OrderProduct } from './../../../models/user-order-item.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-orders-product',
  templateUrl: './user-orders-product.component.html',
  styleUrls: ['./user-orders-product.component.scss'],
})
export class UserOrdersProductComponent implements OnInit {
  @Input() product: OrderProduct;
  constructor() {}

  ngOnInit(): void {}
}
