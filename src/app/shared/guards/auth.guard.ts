import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'app.store';
import { map, take } from 'rxjs';
import { Path } from 'shared/enums';
import { sharedStore } from 'shared/store';

export const authGuard: CanActivateFn = (route, state) => {
  const store = inject(Store<AppState>);
  const router = inject(Router);

  return store.select(sharedStore.selectors.api.selectUser).pipe(
    take(1),
    map((user) => {
      if (!user) return router.createUrlTree([`/${Path.Welcome}`]);

      return true;
    })
  );
};
