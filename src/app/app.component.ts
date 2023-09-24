import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'app.store';
import { sharedStore } from 'shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'rebalancer';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(sharedStore.actions.api.autoLogin());
  }
}
