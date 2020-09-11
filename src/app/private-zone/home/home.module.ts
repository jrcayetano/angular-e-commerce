import { LoginComponent } from './../../public-zone/login/login.component';
import { LoginModule } from './../../public-zone/login/login.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { LoggedUserComponent } from './components/logged-user/logged-user.component';
import { FooterComponent } from './components/footer/footer.component';
import { BasketComponent } from './components/basket/basket.component';
import { BasketListComponent } from './components/basket-list/basket-list.component';
import { BasketListSubtotalComponent } from './components/basket-list-subtotal/basket-list-subtotal.component';
import { BasketListProductsComponent } from './components/basket-list-products/basket-list-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    LoggedUserComponent,
    FooterComponent,
    BasketComponent,
    BasketListComponent,
    BasketListSubtotalComponent,
    BasketListProductsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [],
})
export class HomeModule {}
