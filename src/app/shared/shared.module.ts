import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import {
  LayoutComponent,
  LabeledInputComponent,
  LoaderComponent,
  SnackbarComponent,
} from './components';
import {
  PigIconComponent,
  WeightIconComponent,
  CloseIconComponent,
} from './icons';
import { AuthInterceptorService } from './services';

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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  exports: [
    LayoutComponent,
    LabeledInputComponent,
    CloseIconComponent,
    LoaderComponent,
    SnackbarComponent,
  ],
})
export class SharedModule {}
