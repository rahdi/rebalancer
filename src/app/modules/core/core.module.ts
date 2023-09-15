import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import {
  DashboardComponent,
  AssetGroupComponent,
  EditAssetComponent,
  NewAssetComponent,
} from './pages';
import {
  ContentContainerComponent,
  MenuButtonComponent,
  MenuDialogComponent,
  AssetFormComponent,
} from './components';
import { SharedModule } from 'shared';

@NgModule({
  declarations: [
    DashboardComponent,
    NewAssetComponent,
    EditAssetComponent,
    AssetGroupComponent,
    ContentContainerComponent,
    MenuButtonComponent,
    MenuDialogComponent,
    AssetFormComponent,
  ],
  imports: [CommonModule, CoreRoutingModule, SharedModule],
})
export class CoreModule {}
