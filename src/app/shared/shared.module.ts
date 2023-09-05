import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './components';
import { PigIconComponent, WeightIconComponent } from './icons';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LayoutComponent, WeightIconComponent, PigIconComponent],
  imports: [CommonModule, RouterModule],
  exports: [LayoutComponent],
})
export class SharedModule {}
