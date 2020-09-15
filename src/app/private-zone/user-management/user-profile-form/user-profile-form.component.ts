import { UserService } from './../services/user.service';
import { takeUntil } from 'rxjs/operators';
import { AutoUnsubscribe } from './../../../utils/auto-unsubscribe';
import { LOGIN_PATH } from './../../../consts/paths';
import { Router } from '@angular/router';
import { StatesService } from './../../../services/states.service';
import { ProfileResponse } from '../../../models/profile-response.model';
import {
  VALID_EMAIL_PATTERN,
  VALID_ZIP_PATTERN,
} from './../../../consts/patterns';
import { Observable } from 'rxjs';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-user-profile-form',
  templateUrl: './user-profile-form.component.html',
  styleUrls: ['./user-profile-form.component.scss'],
})
export class UserProfileFormComponent
  extends AutoUnsubscribe
  implements OnInit, OnChanges {
  states$: Observable<any>;
  form: FormGroup;
  submitted = false;
  @Input() profile: ProfileResponse;
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private formBuilder: FormBuilder,
    private statesService: StatesService,
    private userService: UserService
  ) {
    super();
  }

  ngOnInit(): void {
    this.form = this.generateFormBuilder(this.profile);
    this.loadStates();
  }

  ngOnChanges(change: SimpleChanges) {
    if (change && change.profile && change.profile.currentValue) {
      this.form = this.generateFormBuilder(change.profile.currentValue);
    }
  }

  onSubmit(event: Event): void {
    event.stopPropagation();
    console.log(this.form);
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.updateProfile();
  }

  get f() {
    return this.form.controls;
  }

  private generateFormBuilder(profile?: ProfileResponse): FormGroup {
    return this.formBuilder.group({
      username: [(profile && profile.username) || '', [Validators.required]],
      email: [
        (profile && profile.email) || '',
        [Validators.required, Validators.pattern(VALID_EMAIL_PATTERN)],
      ],
      name: [(profile && profile.name) || '', [Validators.required]],
      surname: [(profile && profile.surname) || '', [Validators.required]],
      address: [(profile && profile.address) || '', [Validators.required]],
      city: [(profile && profile.city) || '', [Validators.required]],
      state: [(profile && profile.state) || '', [Validators.required]],
      zip: [
        (profile && profile.zip) || '',
        [Validators.required, Validators.pattern(VALID_ZIP_PATTERN)],
      ],
    });
  }

  private loadStates(): void {
    this.states$ = this.statesService
      .getState()
      .pipe(takeUntil(this.autoUnsubscribe$));
  }

  private updateProfile() {
    this.submit.emit(this.form.value);
  }
}
