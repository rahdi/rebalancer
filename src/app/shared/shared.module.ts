import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent, LabeledInputComponent } from './components';
import { PigIconComponent, WeightIconComponent } from './icons';

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
