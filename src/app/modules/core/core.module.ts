import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import {
  DashboardComponent,
  AssetGroupComponent,
  EditAssetComponent,
  NewAssetComponent,
} from './pages';

@NgModule({
  declarations: [
    DashboardComponent,
    NewAssetComponent,
    EditAssetComponent,
    AssetGroupComponent,
  ],
  imports: [CommonModule, CoreRoutingModule],
})
export class CoreModule {}
