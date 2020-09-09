import { ProductsComponent } from './products.component';
import { ProductsService } from './services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductsGridComponent } from './components/products-grid/products-grid.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent,
    ProductsGridComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule, HttpClientModule],
  providers: [ProductsService],
})
export class ProductsModule {}
