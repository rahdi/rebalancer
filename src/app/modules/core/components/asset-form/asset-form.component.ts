import { Component, Input, OnDestroy, OnInit } from '@angular/core';
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
import { Subscription } from 'rxjs';
import { Asset, Path, sharedStore } from 'shared';

enum FormFields {
  Name = 'name',
  Group = 'group',
  Amount = 'amount',
}

function amountValidator(): ValidatorFn {
  return (control: AbstractControl<string>): ValidationErrors | null => {
    const value = (String(control.value) || '').replaceAll(',', '.');

    if (!value) return { required: true };

    if (isNaN(+value)) return { onlyNumbers: true };

    if (+value < 0.01) return { minValue: true };

    return null;
  };
}

const apiCoreActions = sharedStore.actions.apiCore;
const apiCoreSelectors = sharedStore.selectors.apiCore;

@Component({
  selector: 'app-asset-form',
  templateUrl: './asset-form.component.html',
})
export class AssetFormComponent implements OnInit, OnDestroy {
  @Input() edit = false;
  @Input() assetToEdit?: Asset | null;
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
  isLoading$ = this.store.select(apiCoreSelectors.selectIsLoading);
  currentAssetId = '';
  currentAssetIdSub$?: Subscription;

  ngOnInit(): void {
    if (!this.assetToEdit) return;

    const { name, group, amount } = this.assetToEdit;
    this.assetForm.setValue({ name, group, amount });

    this.currentAssetIdSub$ = this.store
      .select(apiCoreSelectors.selectCurrentAssetId)
      .subscribe((assetId) => {
        if (assetId) {
          this.currentAssetId = assetId;
        }
      });
  }

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
      amount: Number(this.assetForm.value[FormFields.Amount] || 0),
    };

    if (!this.edit) {
      this.store.dispatch(apiCoreActions.addAsset({ asset }));
    }

    if (this.edit && this.currentAssetId) {
      this.store.dispatch(
        apiCoreActions.editAsset({
          asset: { ...asset, assetId: this.currentAssetId },
        })
      );
    }
  }

  ngOnDestroy(): void {
    this.currentAssetIdSub$?.unsubscribe();
  }

  constructor(private store: Store<AppState>) {}
}
