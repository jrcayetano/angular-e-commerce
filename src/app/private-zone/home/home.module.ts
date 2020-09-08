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

@NgModule({
  declarations: [HomeComponent, HeaderComponent, LoggedUserComponent],
  imports: [CommonModule, HomeRoutingModule, FontAwesomeModule, NgbModule],
  exports: [],
})
export class HomeModule {}
