import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { AutoUnsubscribe } from './../../utils/auto-unsubscribe';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends AutoUnsubscribe implements OnInit {
  isBasketOpened$: Observable<boolean> = of(false);
  constructor(private router: Router, private basketStore: Store<{ basket }>) {
    super();
  }

  ngOnInit(): void {
    this.subscribeBasketStore();

    this.router.navigate(['products']);
  }

  private subscribeBasketStore() {
    this.isBasketOpened$ = this.basketStore.pipe(
      select('basket', 'opened'),
      takeUntil(this.autoUnsubscribe$)
    );
  }
}
