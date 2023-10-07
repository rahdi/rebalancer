import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { FabComponent } from './fab.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Location as NgLocation } from '@angular/common';
import { Router } from '@angular/router';
import { CoreModule } from 'modules/core/core.module';
import { Path } from 'shared';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('FabComponent', () => {
  let component: FabComponent;
  let fixture: ComponentFixture<FabComponent>;
  let location: NgLocation;
  let router: Router;
  let store: MockStore;
  const initialState = { apiAuth: { authData: null } };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, CoreModule],
      providers: [provideMockStore({ initialState })],
    });
    fixture = TestBed.createComponent(FabComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    location = TestBed.inject(NgLocation);
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have label', fakeAsync(() => {
    const label = fixture.nativeElement.querySelector('p');
    expect(label.innerText).toBe('Add new asset');
  }));

  it('should have FAB button with icon', fakeAsync(() => {
    const link = fixture.nativeElement.querySelector('a');
    const icon = fixture.nativeElement.querySelector('.fab > svg');
    expect(link).toBeTruthy();
    expect(icon).toBeTruthy();
  }));

  it('should navigate to "new-asset" on click, when user is logged in', fakeAsync(() => {
    store.setState({ apiAuth: { authData: {} } });
    fixture.detectChanges();

    const link = fixture.nativeElement.querySelector('a');
    expect(link).toBeTruthy();

    link.click();
    tick();
    expect(location.path()).toBe(`/${Path.NewAsset}`);
  }));
});
