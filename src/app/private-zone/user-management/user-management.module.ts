import { StatesService } from './../../services/states.service';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileFormComponent } from './user-profile-form/user-profile-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { UserOrdersItemComponent } from './user-orders-item/user-orders-item.component';

import { UserOrdersProductComponent } from './user-orders-product/user-orders-product.component';

@NgModule({
  declarations: [
    UserProfileComponent,
    UserProfileFormComponent,
    UserOrdersComponent,
    UserOrdersItemComponent,
    UserOrdersProductComponent,
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [UserService, StatesService],
})
export class UserManagementModule {}
