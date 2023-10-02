import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

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
  FabComponent,
  RefreshTokenDialogComponent,
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
    FabComponent,
    RefreshTokenDialogComponent,
  ],
  imports: [CommonModule, CoreRoutingModule, SharedModule, ReactiveFormsModule],
})
export class CoreModule {}
