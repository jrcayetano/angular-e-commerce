import { UserFavoriteProductsComponent } from './user-favorite-products/user-favorite-products.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/',
  },
  {
    path: 'edit-profile',
    component: UserProfileComponent,
  },
  {
    path: 'orders',
    component: UserOrdersComponent,
  },
  {
    path: 'favorite',
    component: UserFavoriteProductsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserManagementRoutingModule {}
