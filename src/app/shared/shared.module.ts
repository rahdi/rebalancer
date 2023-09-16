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

@NgModule({
  declarations: [
    LayoutComponent,
    WeightIconComponent,
    PigIconComponent,
    LabeledInputComponent,
    CloseIconComponent,
    LoaderComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    LayoutComponent,
    LabeledInputComponent,
    CloseIconComponent,
    LoaderComponent,
  ],
})
export class SharedModule {}
