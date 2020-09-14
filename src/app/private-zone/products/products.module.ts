import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductsComponent } from './products.component';
import { ProductsService } from './services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductsGridComponent } from './components/products-grid/products-grid.component';
import { BasketListComponent } from './components/basket-list/basket-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductDetailInformationComponent } from './components/product-detail-information/product-detail-information.component';

import { RatingStarComponent } from './components/rating-star/rating-star.component';
import { ProductDetailReviewsComponent } from './components/product-detail-reviews/product-detail-reviews.component';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent,
    ProductsGridComponent,
    BasketListComponent,
    ProductDetailComponent,
    ProductDetailInformationComponent,
    RatingStarComponent,
    ProductDetailReviewsComponent,
    ProductFilterComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  providers: [ProductsService],
})
export class ProductsModule {}
