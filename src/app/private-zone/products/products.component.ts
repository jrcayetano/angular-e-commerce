import { HttpParams } from '@angular/common/http';
import { SetMenu } from './../../state/app.actios';
import { MenuEnum } from './../../consts/menu.enum';
import { Router, ActivatedRoute } from '@angular/router';
import { AddFavoriteProduct } from 'src/app/state/app-user-logged.actions';
import { AddProduct } from './../../state/basket.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductsService } from './services/products.service';
import { Component, OnInit } from '@angular/core';
import { ProductCard } from 'src/app/models/product-card.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$: Observable<ProductCard>;
  menuName = MenuEnum.Products;
  constructor(
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute,
    private basketStore: Store<{ basket }>,
    private userLoggedStore: Store<{ userLogged }>,
    private appStore: Store<{ app }>
  ) {}

  ngOnInit(): void {
    this.getProducts();
    this.selectMenu();
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
      const params: HttpParams = this.productsService.generateFilterSearch(
        formValues
      );
      this.products$ = this.productsService.getAll(params);
      console.log(
        this.productsService.generateFilterSearch(formValues).toString()
      );
    }
  }

  private getProducts(): void {
    this.products$ = this.productsService.getAll();
  }

  private selectMenu() {
    console.log('aaaa', this.menuName);
    this.appStore.dispatch(new SetMenu(this.menuName));
  }
}
