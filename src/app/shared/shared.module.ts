import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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

@NgModule({
  declarations: [
    LayoutComponent,
    WeightIconComponent,
    PigIconComponent,
    LabeledInputComponent,
    CloseIconComponent,
    LoaderComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [
    LayoutComponent,
    LabeledInputComponent,
    CloseIconComponent,
    LoaderComponent,
  ],
})
export class SharedModule {}
