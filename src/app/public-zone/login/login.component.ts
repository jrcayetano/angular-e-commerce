import { SetToken } from './../../state/app.actios';
import {
  SetIsLogged,
  SetEmail,
  SetProfile,
  SetUsername,
} from './../../state/app-user-logged.actions';
import { LoginService } from './services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { HOME_PATH } from 'src/app/consts/paths';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private userLoggedStore: Store<{ userLogged }>,
    private router: Router,
    private appStore: Store<{ app }>
  ) {}

  ngOnInit(): void {
    this.form = this.generateFormBuilder();
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.valid) {
      this.loginService
        .login(this.form.value)
        .pipe(take(1))
        .subscribe((response) => {
          this.getUserLoggedData(response);
        });
    }
  }

  get f() {
    return this.form.controls;
  }

  private generateFormBuilder(): FormGroup {
    return this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  private getUserLoggedData(response) {
    if (response && response.accessToken) {
      this.loginService
        .getUserByEmail(this.form.value.email)
        .pipe(take(1))
        .subscribe((userData) => {
          this.saveLoggedUserDataInStore(response, userData);
          this.router.navigate([`${HOME_PATH}`]);
        });
    }
  }

  private saveLoggedUserDataInStore(response, userdata) {
    console.log(response, userdata);
    this.userLoggedStore.dispatch(new SetProfile(userdata[0]));
    this.appStore.dispatch(new SetToken(response.accessToken));
    this.userLoggedStore.dispatch(new SetIsLogged());
    this.userLoggedStore.dispatch(new SetEmail(this.form.value.email));
    this.userLoggedStore.dispatch(new SetUsername(userdata[0].username));
  }
}
