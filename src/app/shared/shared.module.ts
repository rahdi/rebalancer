import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './components';
import { PigIconComponent, WeightIconComponent } from './icons';

@NgModule({
  declarations: [LayoutComponent, WeightIconComponent, PigIconComponent],
  imports: [CommonModule, RouterModule],
  exports: [LayoutComponent],
})
export class SharedModule {}
