import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import {
  LoginComponent,
  NotFoundComponent,
  RegisterComponent,
  WelcomeComponent,
} from './pages';
import { SharedModule } from 'shared';

@NgModule({
  declarations: [
    NotFoundComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, SharedModule],
})
export class AuthModule {}
