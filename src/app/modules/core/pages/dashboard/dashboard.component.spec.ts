import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DashboardComponent } from './dashboard.component';
import { CoreModule } from '../../core.module';
import { Location as NgLocation } from '@angular/common';
import { Router } from '@angular/router';
import { Path } from 'shared';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let location: NgLocation;
  let router: Router;
  let store: MockStore;
  const initialState = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, RouterTestingModule],
      providers: [provideMockStore({ initialState })],
    });
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    location = TestBed.inject(NgLocation);
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a "content container" element', () => {
    const content = fixture.nativeElement.querySelector('.card');
    expect(content).toBeTruthy();
  });

  it('should have a "Your portfolio" header', () => {
    const header = fixture.nativeElement.querySelector('.card h4');
    expect(header.innerText).toBe('Your portfolio');
  });

  it('should have a "You don\'t have any assets yet." text', () => {
    const text = fixture.nativeElement.querySelector('h6');
    expect(text.innerText).toBe("You don't have any assets yet.");
  });

  it('should have a "Add new asset!" link, that works when user is logged in', fakeAsync(() => {
    store.setState({ api: { authData: {} } });

    const link = fixture.nativeElement.querySelector('a');
    expect(link.innerText).toBe('Add new asset!');

    link.click();
    tick();

    expect(location.path()).toBe(`/${Path.NewAsset}`);
  }));
});
