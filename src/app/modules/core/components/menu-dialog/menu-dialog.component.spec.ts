import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDialogComponent } from './menu-dialog.component';
import { MenuService } from '../../services';
import { CoreModule } from '../../core.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('MenuDialogComponent', () => {
  let component: MenuDialogComponent;
  let fixture: ComponentFixture<MenuDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuDialogComponent],
      imports: [CoreModule, RouterTestingModule],
      providers: [MenuService],
    });
    fixture = TestBed.createComponent(MenuDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
