import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Path } from './shared';

const routes: Routes = [
  {
    path: Path.Wildcard,
    redirectTo: Path.NotFound,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
