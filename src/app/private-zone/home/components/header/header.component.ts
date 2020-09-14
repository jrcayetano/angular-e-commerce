import { ProductsModule } from './../../../products/products.module';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {
  PRODUCTS_PATH,
  EDIT_PROFILE_PATH,
  USER_PATH,
  USER_ORDERS_PATH,
  USER_FAVORITE_PRODUCTS_PATH,
} from './../../../../consts/paths';
import { MenuEnum } from 'src/app/consts/menu.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  PRODUCTS_PATH = `/${PRODUCTS_PATH}`;
  EDIT_PROFILE_PATH = `/${USER_PATH}/${EDIT_PROFILE_PATH}`;
  USER_ORDERS_PATH = `/${USER_PATH}/${USER_ORDERS_PATH}`;
  USER_FAVORITE_PATH = `/${USER_PATH}/${USER_FAVORITE_PRODUCTS_PATH}`;
  public isMenuCollapsed = true;
  selectedMenu$: Observable<String>;
  productsMenu = MenuEnum.Products;
  offerMenu = MenuEnum.Offers;
  constructor(private router: Router, private appStore: Store<{ app }>) {}

  ngOnInit(): void {
    this.subscribeSelectedMenu();
  }

  private subscribeSelectedMenu() {
    this.selectedMenu$ = this.appStore.pipe(select('app', 'selectedMenu'));
  }
}
