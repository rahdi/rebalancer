import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent, LabeledInputComponent } from './components';
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
  ],
  imports: [CommonModule, RouterModule],
  exports: [LayoutComponent, LabeledInputComponent, CloseIconComponent],
})
export class SharedModule {}
