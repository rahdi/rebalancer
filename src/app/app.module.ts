import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  LayoutComponent,
  PigIconComponent,
  WeightIconComponent,
} from './shared';
import { AuthModule, CoreModule } from './modules';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    WeightIconComponent,
    PigIconComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule,
    CoreModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
