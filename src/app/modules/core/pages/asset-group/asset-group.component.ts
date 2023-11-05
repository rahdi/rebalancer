import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { AppState } from 'app.store';
import { PathParams, sharedStore } from 'shared';

const apiCoreSelectors = sharedStore.selectors.apiCore;
const apiCoreActions = sharedStore.actions.apiCore;

@Component({
  selector: 'app-asset-group',
  templateUrl: './asset-group.component.html',
})
export class AssetGroupComponent implements OnInit, OnDestroy {
  groupName = '';
  groupNameSub$?: Subscription;
  params$?: Subscription;
  assetGroup$ = this.store.select(apiCoreSelectors.selectOneGroupOfAssets);

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.params$ = this.route.params.subscribe((params) => {
      if (params[PathParams.Name])
        this.store.dispatch(
          apiCoreActions.setCurrentAssetGroup({
            group: params[PathParams.Name],
          })
        );
    });

    this.groupNameSub$ = this.store
      .select(apiCoreSelectors.selectCurrentAssetGroup)
      .subscribe((groupName) => {
        this.groupName = groupName;
      });
  }

  ngOnDestroy(): void {
    this.params$?.unsubscribe();
    this.groupNameSub$?.unsubscribe();
  }
}
