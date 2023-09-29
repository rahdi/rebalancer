import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  LayoutComponent,
  LabeledInputComponent,
  LoaderComponent,
} from './components';
import {
  PigIconComponent,
  WeightIconComponent,
  CloseIconComponent,
} from './icons';
import { ReactiveFormsModule } from '@angular/forms';
import { SnackbarComponent } from './components/snackbar/snackbar.component';

@NgModule({
  declarations: [
    LayoutComponent,
    WeightIconComponent,
    PigIconComponent,
    LabeledInputComponent,
    CloseIconComponent,
    LoaderComponent,
    SnackbarComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    LayoutComponent,
    LabeledInputComponent,
    CloseIconComponent,
    LoaderComponent,
    SnackbarComponent,
  ],
})
export class SharedModule {}
