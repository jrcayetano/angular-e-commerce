import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { RatingStarComponent } from './rating-star/rating-star.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [RatingStarComponent, ProductFilterComponent],
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
  exports: [RatingStarComponent, ProductFilterComponent],
})
export class SharedModule {}
