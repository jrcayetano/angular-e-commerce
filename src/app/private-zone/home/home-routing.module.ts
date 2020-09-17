import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./../../public-zone/login/login.module').then(
            (m) => m.LoginModule
          ),
      },
      {
        path: 'register',
        loadChildren: () =>
          import('./../../public-zone/register/register.module').then(
            (m) => m.RegisterModule
          ),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./../products/products.module').then((m) => m.ProductsModule),
      },
      {
        path: 'offers',
        loadChildren: () =>
          import('./../products/products.module').then((m) => m.ProductsModule),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./../user-management/user-management.module').then(
            (m) => m.UserManagementModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
