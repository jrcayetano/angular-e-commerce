import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  isLogged = true;
  constructor(
    private userLoggedStore: Store<{ userLogged: any}>,
    private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.validateAuth();
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
      return this.validateAuth();
  }

  private validateAuth(): boolean {
    let login = false;
    this.userLoggedStore.pipe(select('userLogged', 'isLogged')).subscribe( (isLogged: boolean) => {
      login = isLogged;
      if (isLogged) {
        return isLogged;
      }
      this.router.navigate(['/login']);
      return of(false);
    });
    console.log(login);
    return login;
  }


}
