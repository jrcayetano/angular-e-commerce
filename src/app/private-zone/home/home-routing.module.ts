import { UserManagementModule } from './../user-management/user-management.module';
import { LoginModule } from './../../public-zone/login/login.module';
import { RegisterModule } from './../../public-zone/register/register.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsModule } from '../products/products.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => LoginModule,
      },
      {
        path: 'register',
        loadChildren: () => RegisterModule,
      },
      {
        path: 'products',
        loadChildren: () => ProductsModule,
      },
      {
        path: 'user',
        loadChildren: () => UserManagementModule,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
