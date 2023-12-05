import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'app.store';
import { Subscription } from 'rxjs';
import { Asset, PathParams, sharedStore } from 'shared';

const apiCoreSelectors = sharedStore.selectors.apiCore;
const apiCoreActions = sharedStore.actions.apiCore;

@Component({
  selector: 'app-edit-asset',
  templateUrl: './edit-asset.component.html',
})
export class EditAssetComponent implements OnInit, OnDestroy {
  assetId = '';
  currentAsset: Asset | null = null;
  currentAssetSub$?: Subscription;
  params$?: Subscription;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.params$ = this.route.params.subscribe((params) => {
      if (params[PathParams.AssetId])
        this.store.dispatch(
          apiCoreActions.setCurrentAssetId({
            assetId: params[PathParams.AssetId],
          })
        );
    });

    this.currentAssetSub$ = this.store
      .select(apiCoreSelectors.selectCurrentAsset)
      .subscribe((asset) => {
        if (!asset) return;
        this.currentAsset = asset;
      });

    // TODO: possible optimization - no need to fetch all assets probably
    this.store.dispatch(apiCoreActions.fetchAssets());
  }

  ngOnDestroy(): void {
    this.params$?.unsubscribe();
    this.currentAssetSub$?.unsubscribe();
  }
}
