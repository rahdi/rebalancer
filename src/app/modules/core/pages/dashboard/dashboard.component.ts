import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'app.store';
import { coreActions } from 'modules/core/store';
import { Path } from 'shared';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  path = Path;

  // TODO: delete the code below
  constructor(private store: Store<AppState>) {}

  openRefreshTokenDialog() {
    this.store.dispatch(coreActions.openTokenDialog());
  }
}
