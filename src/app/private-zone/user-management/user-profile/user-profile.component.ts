import { Store, select } from '@ngrx/store';
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
  userId: number;
  password: string;
  constructor(
    private userService: UserService,
    private loggedUser: Store<{ userLogged }>
  ) {
    super();
  }

  ngOnInit(): void {
    this.getUserProfile();
    this.getUserId();
  }

  onSubmit(userProfile) {
    console.log('userProfile', userProfile);
    this.userService
      .updateProfile(userProfile, this.userId, this.password)
      .subscribe((response) => {});
  }

  private getUserProfile() {
    this.userProfile$ = this.loggedUser.pipe(select('userLogged', 'profile'));
  }

  private getUserId() {
    this.userProfile$.subscribe((profile) => {
      this.userId = profile.id;
      this.password = profile.repassword;
    });
  }
}
