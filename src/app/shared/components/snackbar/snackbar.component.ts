import { trigger, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'app.store';
import { sharedStore } from 'shared/store';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('enterAndLeave', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate(150, style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
      transition(':leave', [
        animate(150, style({ transform: 'translateX(100%)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class SnackbarComponent {
  snackbars$ = this.store.select(
    sharedStore.selectors.snackbar.selectSnackbars
  );

  constructor(private store: Store<AppState>) {}

  removeSnackbar(index: number) {
    this.store.dispatch(sharedStore.actions.snackbar.removeSnackbar({ index }));
  }
}
