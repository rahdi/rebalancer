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
} from './components';
import { SharedModule } from 'shared';
import { MenuService } from './services';

@NgModule({
  declarations: [
    DashboardComponent,
    NewAssetComponent,
    EditAssetComponent,
    AssetGroupComponent,
    ContentContainerComponent,
    MenuButtonComponent,
    MenuDialogComponent,
  ],
  imports: [CommonModule, CoreRoutingModule, SharedModule],
  providers: [MenuService],
})
export class CoreModule {}
