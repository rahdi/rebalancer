import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'app.store';
import { Path, sharedStore } from 'shared';

const apiSelectors = sharedStore.selectors.api;
const apiActions = sharedStore.actions.api;

const confirmPasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirm');

  if (password && confirmPassword && password.value === confirmPassword.value)
    return null;

  return { passwordFieldsDoNotMatch: true };
};

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  path = Path;
  registerForm = new FormGroup(
    {
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(6)],
      }),
      confirm: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(6)],
      }),
    },
    { validators: confirmPasswordValidator }
  );
  isLoading$ = this.store.select(apiSelectors.selectIsLoading);

  validateInput(name: 'email' | 'password') {
    const control = this.registerForm.get(name);
    if (!control) return;

    const { invalid, dirty, touched, errors } = control;
    if (!(invalid && dirty && touched)) return;
    if (!errors) return;

    if (errors['required']) return 'This field is required.';
    if (errors['email']) return 'Please provide a valid email.';
    if (errors['minlength']) return 'Password must have at least 6 characters.';

    return;
  }

  get emailErrorMessage() {
    return this.validateInput('email');
  }

  get passwordErrorMessage() {
    return this.validateInput('password');
  }

  get confirmErrorMessage() {
    const control = this.registerForm;
    const { dirty, touched, errors } = control;
    if (!(dirty && touched && errors)) return;
    if (!control.get('confirm')?.touched) return;

    const formValidationMessage = errors['passwordFieldsDoNotMatch']
      ? 'Password fields must match.'
      : undefined;

    return formValidationMessage;
  }

  constructor(private store: Store<AppState>) {}

  async onSubmit() {
    this.store.dispatch(
      apiActions.register({
        email: this.registerForm.value.email || '',
        password: this.registerForm.value.password || '',
      })
    );
  }
}
