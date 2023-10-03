import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'app.store';
import { coreSelectors } from '../../store';
import { Path } from 'shared';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  path = Path;
  assets$ = this.store.select(coreSelectors.selectAssets);

  constructor(private store: Store<AppState>) {}
}
