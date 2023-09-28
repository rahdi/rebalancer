import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { RefreshTokenDialogComponent } from './refresh-token-dialog.component';

describe('RefreshTokenDialogComponent', () => {
  let component: RefreshTokenDialogComponent;
  let fixture: ComponentFixture<RefreshTokenDialogComponent>;
  let store: MockStore;
  const initialState = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefreshTokenDialogComponent],
      providers: [provideMockStore({ initialState })],
    });
    fixture = TestBed.createComponent(RefreshTokenDialogComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have text', () => {
    const text = fixture.nativeElement.querySelector('p');
    expect(text.innerText).toBe('Your session is about to expire.');
    expect(text.nextSibling.innerText).toBe('You will be logged out in 60 s.');
  });

  it('should have a "Log out" button', () => {
    const button = fixture.nativeElement.querySelector('.btn-secondary');
    expect(button.innerText).toContain('Log out');
  });

  it('should have a "Continue session" button', () => {
    const button = fixture.nativeElement.querySelector('.btn-primary');
    expect(button.innerText).toContain('Continue session');
  });
});
