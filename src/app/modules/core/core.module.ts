import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';

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
  ChartComponent,
  AssetItemComponent,
  GoBackButtonComponent,
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
    ChartComponent,
    AssetItemComponent,
    GoBackButtonComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    NgxChartsModule,
  ],
})
export class CoreModule {}
