import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-basket-list-subtotal',
  templateUrl: './basket-list-subtotal.component.html',
  styleUrls: ['./basket-list-subtotal.component.scss'],
})
export class BasketListSubtotalComponent implements OnInit {
  @Input() total: number;
  constructor() {}

  ngOnInit(): void {}
}
