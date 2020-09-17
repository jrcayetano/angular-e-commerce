import { AuthGuard } from './../../guard/auth.guard';
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
    canActivate: [AuthGuard],
  },
  {
    path: 'edit-profile',
    component: UserProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'orders',
    component: UserOrdersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'favorite',
    component: UserFavoriteProductsComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserManagementRoutingModule {}
