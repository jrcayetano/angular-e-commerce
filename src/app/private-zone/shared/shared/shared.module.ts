import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from './services/toast.service';
import { ToastComponent } from './toast/toast.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { RatingStarComponent } from './rating-star/rating-star.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [RatingStarComponent, ProductFilterComponent, ToastComponent],
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule, NgbModule],
  exports: [RatingStarComponent, ProductFilterComponent, ToastComponent],
  providers: [],
})
export class SharedModule {}
