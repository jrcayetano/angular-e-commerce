import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersRoutingModule } from './offers-routing.module';
import { OffersComponent } from './offers/offers.component';

@NgModule({
  declarations: [OffersComponent],
  imports: [CommonModule, OffersRoutingModule, HttpClientModule],
})
export class OffersModule {}