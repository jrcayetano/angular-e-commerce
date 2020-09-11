import { FavoriteSearchPipe } from './../../pipes/favorite-search.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StatesService } from './../../services/states.service';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileFormComponent } from './user-profile-form/user-profile-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { UserOrdersItemComponent } from './user-orders-item/user-orders-item.component';

import { UserOrdersProductComponent } from './user-orders-product/user-orders-product.component';
import { UserFavoriteProductsComponent } from './user-favorite-products/user-favorite-products.component';
import { FavoriteProductsListComponent } from './favorite-products-list/favorite-products-list.component';
import { FavoriteProductComponent } from './favorite-product/favorite-product.component';

@NgModule({
  declarations: [
    UserProfileComponent,
    UserProfileFormComponent,
    UserOrdersComponent,
    UserOrdersItemComponent,
    UserOrdersProductComponent,
    UserFavoriteProductsComponent,
    FavoriteProductsListComponent,
    FavoriteProductComponent,
    FavoriteSearchPipe,
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [UserService, StatesService, FavoriteSearchPipe],
})
export class UserManagementModule {}
