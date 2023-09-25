import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Path } from 'shared';
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
  },
  {
    path: Path.NewAsset,
    component: NewAssetComponent,
  },
  {
    path: Path.EditAsset,
    component: EditAssetComponent,
  },
  {
    path: Path.AssetGroup,
    component: AssetGroupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
