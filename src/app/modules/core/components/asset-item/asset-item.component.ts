import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'app.store';
import { Asset, Path, sharedStore } from 'shared';

@Component({
  selector: 'app-asset-item',
  templateUrl: './asset-item.component.html',
  styleUrls: ['./asset-item.component.css'],
})
export class AssetItemComponent {
  @Input() asset?: Asset;
  path = Path;

  constructor(private store: Store<AppState>) {}

  // TODO: maybe add a confirmation dialog here
  deleteAsset(assetId?: string) {
    if (!assetId) return;
    this.store.dispatch(sharedStore.actions.apiCore.deleteAsset({ assetId }));
  }

  onDelete(event: Event) {
    event.stopPropagation();
    this.deleteAsset(this.asset?.assetId);
  }
}
