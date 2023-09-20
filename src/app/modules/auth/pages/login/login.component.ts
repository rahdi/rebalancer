import { Component, OnDestroy, inject } from '@angular/core';
import {
  Auth,
  User,
  signInWithEmailAndPassword,
  user,
} from '@angular/fire/auth';
import { Subscription } from 'rxjs';
import { Path } from 'shared';
import { environment } from '../../../../../environments/environment';

type OptimizedAuth = Auth & { authStateReady: () => Promise<void> };

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnDestroy {
  path = Path;

  /**
   * 1. Guest user, online - firebase. Option to continue as logged user.
   * 2. Authenticated user, online - firebase. When some data was saved in local storage, ask user if he wants to
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

  async signIn() {
    const response = await signInWithEmailAndPassword(
      this.auth,
      environment.login.email,
      environment.login.password
    );
    console.log(response);
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
