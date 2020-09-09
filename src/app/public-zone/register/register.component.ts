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
  zipPattern = '^[0-9]+$';
  /**
   * Passwords must be
   * - At least 8 characters long, max length anything
   * - Include at least 1 lowercase letter
   * - 1 capital letter
   * - 1 number
   * - 1 special character => !@#$%^&*
   **/
  passwordPattern = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
  emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
          [Validators.required, Validators.pattern(this.emailPattern)],
        ],
        name: ['', [Validators.required]],
        surname: ['', [Validators.required]],
        address: ['', [Validators.required]],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        zip: ['', [Validators.required, Validators.pattern(this.zipPattern)]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(this.passwordPattern),
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
