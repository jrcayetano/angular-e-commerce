import { takeUntil } from 'rxjs/operators';
import { AutoUnsubscribe } from './../../../utils/auto-unsubscribe';
import { Observable } from 'rxjs';
import { ProfileResponse } from '../../../models/profile-response.model';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent extends AutoUnsubscribe implements OnInit {
  userProfile$: Observable<ProfileResponse>;
  constructor(private userService: UserService) {
    super();
  }

  ngOnInit(): void {
    this.getUserProfile();
  }

  private getUserProfile() {
    this.userProfile$ = this.userService
      .getProfile()
      .pipe(takeUntil(this.autoUnsubscribe$));
  }
}
