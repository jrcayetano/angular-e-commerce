import { ProductsComponent } from './products.component';
import { ProductsService } from './services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [ProductsComponent, ProductCardComponent],
  imports: [CommonModule, ProductsRoutingModule, HttpClientModule],
  providers: [ProductsService],
})
export class ProductsModule {}
