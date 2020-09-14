import { SetIsLogged } from './../../state/app-user-logged.actions';
import { LoginService } from './services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { HOME_PATH } from 'src/app/consts/paths';

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
    private store: Store,
    private router: Router
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
          if (response) {
            this.store.dispatch(new SetIsLogged());
            this.router.navigate([`${HOME_PATH}`]);
          }
        });
    }
  }

  get f() {
    return this.form.controls;
  }

  private generateFormBuilder(): FormGroup {
    return this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
}
