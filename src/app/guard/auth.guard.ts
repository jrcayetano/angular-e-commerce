import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  CanActivateChild,
} from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  isLogged = true;
  constructor(
    private userLoggedStore: Store<{ userLogged: any }>,
    private appStore: Store<{ app: any }>,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.validateAuth().pipe(
      map((hasAccess) => {
        if (hasAccess) {
          return true;
        }

        this.router.navigate(['/products']);
        return false;
      })
    );
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return this.validateAuth().pipe(
      map((hasAccess) => {
        if (hasAccess) {
          return true;
        }

        this.router.navigate(['/products']);
        return false;
      })
    );
  }

  private validateAuth(): Observable<boolean> {
    console.log(this.router);
    return this.appStore.pipe(
      select('app', 'token'),
      take(1),
      map((token) => (token ? true : false))
    );
  }
}
