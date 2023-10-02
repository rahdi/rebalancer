import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'app.store';
import { Path, sharedStore } from 'shared';

@Component({
  selector: 'app-choose-option',
  templateUrl: './choose-option.component.html',
})
export class ChooseOptionComponent {
  path = Path;
  isLoading$ = this.store.select(sharedStore.selectors.api.selectIsLoading);

  constructor(private store: Store<AppState>) {}

  guestLogIn() {
    this.store.dispatch(sharedStore.actions.api.guestLogIn());
  }
}
