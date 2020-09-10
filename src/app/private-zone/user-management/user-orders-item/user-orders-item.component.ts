import { OrderItem } from './../../../models/user-order-item.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-orders-item',
  templateUrl: './user-orders-item.component.html',
  styleUrls: ['./user-orders-item.component.scss'],
})
export class UserOrdersItemComponent implements OnInit {
  @Input() order: OrderItem;
  constructor() {}

  ngOnInit(): void {}
}
