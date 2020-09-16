import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-basket-list-subtotal',
  templateUrl: './basket-list-subtotal.component.html',
  styleUrls: ['./basket-list-subtotal.component.scss'],
})
export class BasketListSubtotalComponent implements OnInit {
  @Input() total: number;
  @Output() buy: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  onBuy(event: Event) {
    event.stopPropagation();
    this.buy.emit();
  }
}
