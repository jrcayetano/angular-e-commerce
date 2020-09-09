import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { PRODUCTS_PATH } from './../../../../consts/paths';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  PRODUCTS_PATH = `/${PRODUCTS_PATH}`;
  public isMenuCollapsed = true;

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
