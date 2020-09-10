import {
  VALID_ZIP_PATTERN,
  VALID_EMAIL_PATTERN,
  VALID_PASSWORD_PATTERN,
} from './../../consts/patterns';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/public-zone/login/services/login.service';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { RegisterService } from './services/register.service';
import { Observable } from 'rxjs';
import { LOGIN_PATH } from './../../consts/paths';
import { MustMatch } from '../../validators/match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  states$: Observable<any>;
  form: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.generateFormBuilder();
    this.loadStates();
  }

  onSubmit(): void {
    console.log(this.form);
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.registerUser();
  }

  get f() {
    return this.form.controls;
  }

  private generateFormBuilder(): FormGroup {
    return this.formBuilder.group(
      {
        username: ['', [Validators.required]],
        email: [
          '',
          [Validators.required, Validators.pattern(VALID_EMAIL_PATTERN)],
        ],
        name: ['', [Validators.required]],
        surname: ['', [Validators.required]],
        address: ['', [Validators.required]],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        zip: ['', [Validators.required, Validators.pattern(VALID_ZIP_PATTERN)]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(VALID_PASSWORD_PATTERN),
          ],
        ],
        repassword: ['', [Validators.required]],
      },
      {
        validator: MustMatch('password', 'repassword'),
      }
    );
  }

  private loadStates(): void {
    this.states$ = this.registerService.getState();
  }

  private registerUser() {
    this.registerService.register(this.form.value).subscribe((response) => {
      if (response) {
        // this.store.dispatch(new SetIsLogged());
        this.router.navigate([`/${LOGIN_PATH}`]);
      }
    });
  }
}
