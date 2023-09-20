import { Component, OnDestroy, inject } from '@angular/core';
import {
  Auth,
  User,
  signInWithEmailAndPassword,
  user,
} from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Path } from 'shared';

type OptimizedAuth = Auth & { authStateReady: () => Promise<void> };

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnDestroy {
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

  get emailErrorMessage() {
    const control = this.loginForm.get('email');
    if (!control) return;

    const { invalid, dirty, touched, errors } = control;
    if (!(invalid && dirty && touched)) return;
    if (!errors) return;

    if (errors['required']) return 'This field is required.';
    if (errors['email']) return 'Please provide a valid email.';

    return;
  }

  get passwordErrorMessage() {
    const control = this.loginForm.get('password');
    if (!control) return;

    const { invalid, dirty, touched, errors } = control;
    if (!(invalid && dirty && touched)) return;
    if (!errors) return;

    if (errors['required']) return 'This field is required.';
    if (errors['minlength']) return 'Password must have at least 3 characters.';

    return;
  }

  /**
   * 1. Guest user, online - firebase. Option to continue as logged user.
   * 2. Authenticated user, online - firebase. When some data was saved in local storage, ask user if he wants to log in
   */

  private auth: Auth = inject(Auth);
  user$ = user(this.auth as OptimizedAuth);
  userSubscription: Subscription;

  constructor() {
    this.userSubscription = this.user$.subscribe((aUser: User | null) => {
      //handle user state changes here. Note, that user will be null if there is no currently logged in user.
      console.log(aUser);
    });
  }

  async onSubmit() {
    const response = await signInWithEmailAndPassword(
      this.auth,
      this.loginForm.value.email || '',
      this.loginForm.value.password || ''
    );
    console.log(response);
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
