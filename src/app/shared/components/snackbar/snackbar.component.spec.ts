import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SnackbarComponent } from './snackbar.component';

describe('SnackbarComponent', () => {
  let component: SnackbarComponent;
  let fixture: ComponentFixture<SnackbarComponent>;
  let store: MockStore;
  const initialState = { snackbar: { snackbars: [] } };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SnackbarComponent],
      imports: [BrowserAnimationsModule],
      providers: [provideMockStore({ initialState })],
    });
    fixture = TestBed.createComponent(SnackbarComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not display a snackbar initially', () => {
    const snackbar = fixture.nativeElement.querySelector('.snackbar');
    expect(snackbar).toBeFalsy();
  });

  it('should display a snackbar when it is in store', () => {
    store.setState({
      snackbar: { snackbars: [{ color: 'warning', message: 'Test message' }] },
    });
    fixture.detectChanges();

    const snackbar = fixture.nativeElement.querySelector('.snackbar');
    expect(snackbar).toBeTruthy();
  });
});
