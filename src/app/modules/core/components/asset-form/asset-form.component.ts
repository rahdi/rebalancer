import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from 'app.store';
import { Path, sharedStore } from 'shared';

enum FormFields {
  Name = 'name',
  Group = 'group',
  Amount = 'amount',
}

function amountValidator(): ValidatorFn {
  return (control: AbstractControl<string>): ValidationErrors | null => {
    const value = (control.value || '').replaceAll(',', '.');

    if (!value) return { required: true };

    if (isNaN(+value)) return { onlyNumbers: true };

    if (+value < 0.01) return { minValue: true };

    return null;
  };
}

@Component({
  selector: 'app-asset-form',
  templateUrl: './asset-form.component.html',
})
export class AssetFormComponent {
  @Input() edit = false;
  path = Path;
  assetForm = new FormGroup({
    [FormFields.Name]: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    [FormFields.Group]: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    [FormFields.Amount]: new FormControl(0, {
      nonNullable: true,
      validators: [amountValidator()],
    }),
  });

  validateInput(name: FormFields) {
    const control = this.assetForm.get(name);
    if (!control) return;

    const { invalid, dirty, touched, errors } = control;
    if (!(invalid && dirty && touched)) return;
    if (!errors) return;

    if (errors['required']) return 'This field is required.';
    if (errors['onlyNumbers']) return 'Only numbers are allowed.';
    if (errors['minValue']) return 'Minimum amount is 0.01.';

    return;
  }

  get nameErrorMessage() {
    return this.validateInput(FormFields.Name);
  }

  get groupErrorMessage() {
    return this.validateInput(FormFields.Group);
  }

  get amountErrorMessage() {
    return this.validateInput(FormFields.Amount);
  }

  onSubmit() {
    const asset = {
      name: this.assetForm.value[FormFields.Name] || '',
      group: this.assetForm.value[FormFields.Group] || '',
      amount: this.assetForm.value[FormFields.Amount] || 0,
    };

    this.store.dispatch(sharedStore.actions.apiCore.addAsset({ asset }));
    this.router.navigate([`/${Path.Dashboard}`]);
  }

  constructor(private store: Store<AppState>, private router: Router) {}
}
