import { HomeComponent } from './private-zone/home/home.component';
import { LoginModule } from './public-zone/login/login.module';
import { HomeModule } from './private-zone/home/home.module';
import { AuthGuard } from './guard/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  /*  {
    path: 'login',
    loadChildren: () => LoginModule,
  }, */
  {
    path: '',
    loadChildren: () => HomeModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [HttpClientModule],
})
export class AppRoutingModule {}
