import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'app.store';
import { Subscription } from 'rxjs';
import { PathParams, sharedStore } from 'shared';

const apiCoreSelectors = sharedStore.selectors.apiCore;
const apiCoreActions = sharedStore.actions.apiCore;

@Component({
  selector: 'app-edit-asset',
  templateUrl: './edit-asset.component.html',
})
export class EditAssetComponent implements OnInit, OnDestroy {
  assetId = '';
  assetIdSub$?: Subscription;
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

    this.assetIdSub$ = this.store
      .select(apiCoreSelectors.selectCurrentAssetGroup)
      .subscribe((assetId) => {
        this.assetId = assetId;
      });

    // TODO: possible optimization - no need to fetch all assets probably
    this.store.dispatch(apiCoreActions.fetchAssets());
  }

  ngOnDestroy(): void {
    this.params$?.unsubscribe();
    this.assetIdSub$?.unsubscribe();
  }
}
