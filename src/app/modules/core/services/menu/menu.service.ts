import { Subject } from 'rxjs';

export class MenuService {
  isOpen = false;
  isOpenUpdated = new Subject<boolean>();

  openMenu() {
    this.isOpen = true;
    this.isOpenUpdated.next(true);
  }

  closeMenu() {
    this.isOpen = false;
    this.isOpenUpdated.next(false);
  }
}
