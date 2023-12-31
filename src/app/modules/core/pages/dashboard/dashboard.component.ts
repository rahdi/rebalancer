import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'app.store';
import { Path, sharedStore } from 'shared';

const apiCoreSelectors = sharedStore.selectors.apiCore;
const apiCoreActions = sharedStore.actions.apiCore;

// TODO: add cache?

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  path = Path;
  assets$ = this.store.select(apiCoreSelectors.selectChartData);
  isLoading$ = this.store.select(apiCoreSelectors.selectIsLoading);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(apiCoreActions.fetchAssets());
  }
}
