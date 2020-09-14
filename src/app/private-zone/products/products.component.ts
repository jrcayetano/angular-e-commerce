import { HttpParams } from '@angular/common/http';
import { SetMenu } from './../../state/app.actios';
import { MenuEnum } from './../../consts/menu.enum';
import { Router, ActivatedRoute } from '@angular/router';
import { AddFavoriteProduct } from 'src/app/state/app-user-logged.actions';
import { AddProduct } from './../../state/basket.actions';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { ProductsService } from './services/products.service';
import { Component, OnInit } from '@angular/core';
import { ProductCard } from 'src/app/models/product-card.model';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$: Observable<ProductCard>;
  menuName = MenuEnum.Products;
  isOffers = false;
  constructor(
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute,
    private basketStore: Store<{ basket }>,
    private userLoggedStore: Store<{ userLogged }>,
    private appStore: Store<{ app }>
  ) {}

  ngOnInit(): void {
    this.subscribeToIsOffer();
    this.getProducts();
  }

  onBuyProduct(product: ProductCard): void {
    console.log(product);
    this.basketStore.dispatch(new AddProduct(product));
  }

  onFavoriteProduct(product: ProductCard): void {
    console.log(product);
    this.userLoggedStore.dispatch(new AddFavoriteProduct(product));
  }

  onCardClick(product: ProductCard): void {
    this.router.navigate([`${product.id}`], { relativeTo: this.route });
  }

  onFilterChange(formValues) {
    if (!(formValues instanceof Event)) {
      let params: HttpParams = this.productsService.generateFilterSearch(
        formValues,
        this.isOffers
      );
      /*   console.log(this.isOffers);
      if (this.isOffers) {
        params.set('isOffer_ne', 'false');
      } else {
        params.set('isOffer_ne', 'true');
      } */

      /*     if (this.isOffers) {
        params = this.productsService.addOfferFilter(params);
      } */

      this.products$ = this.productsService.getAll(params);
    }
  }

  private getProducts(): void {
    let params: HttpParams;
    if (this.isOffers) {
      params = new HttpParams().set('isOffer_ne', 'false');
    } else {
      params = new HttpParams().set('isOffer_ne', 'true');
    }
    this.products$ = this.productsService.getAll(params);
  }

  private subscribeToIsOffer() {
    this.appStore
      .pipe(select('app', 'selectedMenu'), take(1))
      .subscribe((selectedMenu) => {
        if (selectedMenu === MenuEnum.Offers) {
          this.isOffers = true;
        } else {
          this.isOffers = false;
        }
      });
  }
}
