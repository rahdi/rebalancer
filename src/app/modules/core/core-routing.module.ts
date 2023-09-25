import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Path, authGuard } from 'shared';
import {
  AssetGroupComponent,
  DashboardComponent,
  EditAssetComponent,
  NewAssetComponent,
} from './pages';

const routes: Routes = [
  {
    path: Path.Dashboard,
    component: DashboardComponent,
    canActivate: [authGuard],
  },
  {
    path: Path.NewAsset,
    component: NewAssetComponent,
    canActivate: [authGuard],
  },
  {
    path: Path.EditAsset,
    component: EditAssetComponent,
    canActivate: [authGuard],
  },
  {
    path: Path.AssetGroup,
    component: AssetGroupComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
