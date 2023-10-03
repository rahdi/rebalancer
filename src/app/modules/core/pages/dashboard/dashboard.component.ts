import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'app.store';
import { Path, sharedStore } from 'shared';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  path = Path;
  assets$ = this.store.select(sharedStore.selectors.api.selectAssets);

  constructor(private store: Store<AppState>) {}
}
