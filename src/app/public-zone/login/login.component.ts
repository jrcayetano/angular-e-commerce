import { SetIsLogged } from './../../state/app-user-logged.actions';
import { LoginService } from './services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
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
    if (this.form.valid) {
      this.loginService.login(this.form.value).subscribe((response) => {
        if (response) {
          this.store.dispatch(new SetIsLogged());
          this.router.navigate(['/']);
        }
      });
    }
  }

  private generateFormBuilder(): FormGroup {
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
}
