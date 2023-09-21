import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'app.store';
import { coreActions } from '../../store';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
})
export class MenuButtonComponent {
  constructor(private store: Store<AppState>) {}

  openDialog() {
    this.store.dispatch(coreActions.openMenu());
  }
}
