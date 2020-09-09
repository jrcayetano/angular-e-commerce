import { OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';
/** class to autounsubscribe from store when components are destroyed */
export class AutoUnsubscribe implements OnDestroy {
  protected readonly autoUnsubscribe$: Observable<any>;
  private readonly onDestroy$: Subject<any>;

  constructor() {
    this.onDestroy$ = this.onDestroy$ || new Subject();
    this.autoUnsubscribe$ = this.onDestroy$.asObservable();
  }

  ngOnDestroy() {
    if (this.onDestroy$ && this.onDestroy$.next && this.onDestroy$.complete) {
      this.onDestroy$.next();
      this.onDestroy$.complete();
    }
  }
}
