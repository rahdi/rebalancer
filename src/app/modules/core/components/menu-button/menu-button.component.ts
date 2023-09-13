import { Component } from '@angular/core';
import { MenuService } from '../../services';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
})
export class MenuButtonComponent {
  constructor(private menuService: MenuService) {}

  openDialog() {
    this.menuService.openMenu();
  }
}
