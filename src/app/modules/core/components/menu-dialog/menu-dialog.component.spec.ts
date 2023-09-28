import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDialogComponent } from './menu-dialog.component';
import { CoreModule } from '../../core.module';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('MenuDialogComponent', () => {
  let component: MenuDialogComponent;
  let fixture: ComponentFixture<MenuDialogComponent>;
  let store: MockStore;
  const initialState = { api: { email: '' } };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, RouterTestingModule],
      providers: [provideMockStore({ initialState })],
    });
    fixture = TestBed.createComponent(MenuDialogComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a button with icon', () => {
    const closeIcon = fixture.nativeElement.querySelector(
      'button > app-close-icon'
    );
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
    store.setState({ api: { email: 'test@test.test' } });
    fixture.detectChanges();

    const p = fixture.nativeElement.querySelector('p');
    expect(p).toBeTruthy();
    expect(p.innerText).toContain('Welcome, test@test.test');
  });

  it('should have a "Log out" button, when user is logged in', () => {
    store.setState({ api: { email: 'test@test.test' } });
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('.btn-primary');
    expect(button).toBeTruthy();
    expect(button.innerText).toContain('Log out');
  });
});
