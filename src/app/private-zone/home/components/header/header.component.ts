import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  public isMenuCollapsed = true;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public handleLogin(): void {
    this.router.navigate(['/login']);
  }
}
