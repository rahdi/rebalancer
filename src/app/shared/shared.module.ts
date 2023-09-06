import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './components';
import { PigIconComponent, WeightIconComponent } from './icons';
import { RouterModule } from '@angular/router';
import { StyledButtonComponent } from './components/styled-button/styled-button.component';

@NgModule({
  declarations: [
    LayoutComponent,
    WeightIconComponent,
    PigIconComponent,
    StyledButtonComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [LayoutComponent, StyledButtonComponent],
})
export class SharedModule {}
