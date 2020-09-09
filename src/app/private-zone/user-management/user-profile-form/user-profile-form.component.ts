import { Observable } from 'rxjs';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile-form',
  templateUrl: './user-profile-form.component.html',
  styleUrls: ['./user-profile-form.component.scss'],
})
export class UserProfileFormComponent implements OnInit {
  states$: Observable<any>;
  form: FormGroup;
  submitted = false;
  zipPattern = '^[0-9]+$';
  emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(private formBuilder: FormBuilder) {}

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
    // this.registerUser();
  }

  get f() {
    return this.form.controls;
  }

  private generateFormBuilder(): FormGroup {
    return this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zip: ['', [Validators.required, Validators.pattern(this.zipPattern)]],
    });
  }

  private loadStates(): void {
    // this.states$ = this.registerService.getState();
  }

  /*  private registerUser() {
    this.registerService.register(this.form.value).subscribe((response) => {
      if (response) {
        // this.store.dispatch(new SetIsLogged());
        this.router.navigate([`/${LOGIN_PATH}`]);
      }
    });
  } */
}
