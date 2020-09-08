import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logged-user',
  templateUrl: './logged-user.component.html',
  styleUrls: ['./logged-user.component.scss'],
})
export class LoggedUserComponent implements OnInit {
  username$: Observable<string>;
  isLogged$: Observable<string>;
  constructor(private store: Store<{ userLogged }>, private router: Router) {}

  ngOnInit(): void {
    this.getUsername();
    this.isLogged();
  }

  public handleLogin(): void {
    this.router.navigate(['/login']);
  }

  private getUsername(): void {
    this.username$ = this.store.pipe(select('userLogged', 'username'));
  }
  private isLogged(): void {
    this.isLogged$ = this.store.pipe(select('userLogged', 'isLogged'));
  }
}
