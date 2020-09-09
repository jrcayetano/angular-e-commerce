import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileFormComponent } from './user-profile-form/user-profile-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserProfileComponent, UserProfileFormComponent],
  imports: [CommonModule, UserManagementRoutingModule, ReactiveFormsModule],
})
export class UserManagementModule {}
