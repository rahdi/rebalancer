import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDialogComponent } from './menu-dialog.component';
import { CoreModule } from '../../core.module';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

describe('MenuDialogComponent', () => {
  let component: MenuDialogComponent;
  let fixture: ComponentFixture<MenuDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuDialogComponent],
      imports: [CoreModule, RouterTestingModule, StoreModule.forRoot({})],
    });
    fixture = TestBed.createComponent(MenuDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a button with icon', () => {
    const button = fixture.nativeElement.querySelector(
      'button > app-close-icon'
    );
    const closeIcon = fixture.nativeElement.querySelector(
      'button > app-close-icon'
    );
    expect(button).toBeTruthy();
    expect(closeIcon).toBeTruthy();
  });

  it('should have a text', () => {
    const p = fixture.nativeElement.querySelector('p');
    expect(p).toBeTruthy();
    expect(p.innerText).toContain('You are not logged in.');
  });

  it('should have a "Log in" button', () => {
    const button = fixture.nativeElement.querySelector('.btn-primary');
    expect(button).toBeTruthy();
    expect(button.innerText).toContain('Log in');
  });

  it('should have a "Welcome" text, when user is logged in', () => {
    component.userEmail = 'test@test.test';
    fixture.detectChanges();
    const p = fixture.nativeElement.querySelector('p');
    expect(p).toBeTruthy();
    expect(p.innerText).toContain('Welcome, test@test.test');
  });

  it('should have a "Log out" button, when user is logged in', () => {
    component.userEmail = 'test@test.test';
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('.btn-primary');
    expect(button).toBeTruthy();
    expect(button.innerText).toContain('Log out');
  });
});
