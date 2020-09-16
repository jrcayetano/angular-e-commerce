import { OrderItem } from './../../../models/user-order-item.model';
import { takeUntil, map } from 'rxjs/operators';

import { AutoUnsubscribe } from './../../../utils/auto-unsubscribe';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.scss'],
})
export class UserOrdersComponent extends AutoUnsubscribe implements OnInit {
  orders$: Observable<OrderItem[]> = of([]);
  constructor(private userService: UserService) {
    super();
  }

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders() {
    this.orders$ = this.userService
      .getOrders()
      .pipe(takeUntil(this.autoUnsubscribe$));
  }
}
