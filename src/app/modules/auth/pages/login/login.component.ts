import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'app.store';

import { Path, sharedStore } from 'shared';

const apiSelectors = sharedStore.selectors.api;
const apiActions = sharedStore.actions.api;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  path = Path;
  loginForm = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)],
    }),
  });
  isLoading$ = this.store.select(apiSelectors.selectIsLoading);

  validateInput(name: 'email' | 'password') {
    const control = this.loginForm.get(name);
    if (!control) return;

    const { invalid, dirty, touched, errors } = control;
    if (!(invalid && dirty && touched)) return;
    if (!errors) return;

    if (errors['required']) return 'This field is required.';
    if (errors['email']) return 'Please provide a valid email.';
    if (errors['minlength']) return 'Password must have at least 3 characters.';

    return;
  }

  get emailErrorMessage() {
    return this.validateInput('email');
  }

  get passwordErrorMessage() {
    return this.validateInput('password');
  }

  constructor(private store: Store<AppState>) {}

  async onSubmit() {
    this.store.dispatch(
      apiActions.logIn({
        email: this.loginForm.value.email || '',
        password: this.loginForm.value.password || '',
      })
    );
  }
}
