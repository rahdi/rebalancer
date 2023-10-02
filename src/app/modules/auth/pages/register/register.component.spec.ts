import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Location as NgLocation } from '@angular/common';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { RegisterComponent } from './register.component';
import { Path, SharedModule } from 'shared';
import { AuthModule } from '../../auth.module';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let location: NgLocation;
  let router: Router;
  let store: MockStore;
  const initialState = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [RouterTestingModule, SharedModule, AuthModule],
      providers: [provideMockStore({ initialState })],
    });
    fixture = TestBed.createComponent(RegisterComponent);
    router = TestBed.inject(Router);
    location = TestBed.inject(NgLocation);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display .card', () => {
    const card = fixture.nativeElement.querySelector('.card');
    expect(card).toBeTruthy();
  });

  it('should display title', () => {
    const title = fixture.nativeElement.querySelector('h4');
    expect(title).toBeTruthy();
    expect(title.innerText).toBe('Register');
  });

  it('should display "email" labeled input', () => {
    const input = fixture.nativeElement.querySelector('#register-email');
    const label = input.previousSibling;
    expect(input).toBeTruthy();
    expect(label).toBeTruthy();
    expect(label.innerText).toBe('Email');
  });

  it('should display "password" labeled input', () => {
    const input = fixture.nativeElement.querySelector('#register-password');
    const label = input.previousSibling;
    expect(input).toBeTruthy();
    expect(label).toBeTruthy();
    expect(label.innerText).toBe('Password');
  });

  it('should display "confirm password" labeled input', () => {
    const input = fixture.nativeElement.querySelector('#register-confirm');
    const label = input.previousSibling;
    expect(input).toBeTruthy();
    expect(label).toBeTruthy();
    expect(label.innerText).toBe('Confirm password');
  });

  it('should display a link to go back', fakeAsync(() => {
    const link = fixture.nativeElement.querySelector('.btn-secondary');
    expect(link).toBeTruthy();
    expect(link.innerText).toBe('Go back');

    link.click();
    tick();

    expect(location.path()).toBe(`/${Path.ChooseOption}`);
  }));

  it('should display "Create account!" button', fakeAsync(() => {
    const button = fixture.nativeElement.querySelector('button.btn');
    expect(button).toBeTruthy();
    expect(button.innerText).toBe('Create account!');
  }));
});
