import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Path, SharedModule } from 'shared';
import { Location as NgLocation } from '@angular/common';
import { Router } from '@angular/router';
import { AuthModule } from 'modules/auth/auth.module';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let location: NgLocation;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [RouterTestingModule, SharedModule, AuthModule],
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    location = TestBed.inject(NgLocation);
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
    expect(title.innerText).toBe('Log in');
  });

  it('should display "username" labeled input', () => {
    const input = fixture.nativeElement.querySelector('#login-username');
    const label = input.previousSibling;
    expect(input).toBeTruthy();
    expect(label).toBeTruthy();
    expect(label.innerText).toBe('Username');
  });

  it('should display "password" labeled input', () => {
    const input = fixture.nativeElement.querySelector('#login-password');
    const label = input.previousSibling;
    expect(input).toBeTruthy();
    expect(label).toBeTruthy();
    expect(label.innerText).toBe('Password');
  });

  it('should display a text offering registration', fakeAsync(() => {
    const text = fixture.nativeElement.querySelector('p');
    expect(text).toBeTruthy();
    expect(text.innerText).toBe("Don't have an account? Create one here!");

    const link = text.children[0];
    expect(link).toBeTruthy();
    expect(link.innerText).toBe('here');
    link.click();
    tick();

    expect(location.path()).toBe(`/${Path.Register}`);
  }));

  it('should display a link to going back', fakeAsync(() => {
    const link = fixture.nativeElement.querySelector('.btn-secondary');
    expect(link).toBeTruthy();
    expect(link.innerText).toBe('Go back');

    link.click();
    tick();

    expect(location.path()).toBe(`/${Path.ChooseOption}`);
  }));

  it('should display a link to go to dashboard', fakeAsync(() => {
    const link = fixture.nativeElement.querySelector('.btn-primary');
    expect(link).toBeTruthy();
    expect(link.innerText).toBe('Log in');

    link.click();
    tick();

    expect(location.path()).toBe(`/${Path.Empty}`);
  }));
});
