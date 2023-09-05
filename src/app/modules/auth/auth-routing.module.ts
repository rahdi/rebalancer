import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Path } from 'shared';
import {
  LoginComponent,
  NotFoundComponent,
  RegisterComponent,
  WelcomeComponent,
} from './pages';

const routes: Routes = [
  {
    path: Path.Welcome,
    component: WelcomeComponent,
  },
  {
    path: Path.Login,
    component: LoginComponent,
  },
  {
    path: Path.Register,
    component: RegisterComponent,
  },
  {
    path: Path.NotFound,
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
