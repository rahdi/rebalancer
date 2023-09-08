import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './components';
import { PigIconComponent, WeightIconComponent } from './icons';
import { LabeledInputComponent } from './components/labeled-input/labeled-input.component';

@NgModule({
  declarations: [
    LayoutComponent,
    WeightIconComponent,
    PigIconComponent,
    LabeledInputComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [LayoutComponent, LabeledInputComponent],
})
export class SharedModule {}
