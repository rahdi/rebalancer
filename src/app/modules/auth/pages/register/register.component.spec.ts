import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Path, SharedModule } from 'shared';
import { AuthModule } from 'modules/auth/auth.module';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let location: Location;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [RouterTestingModule, SharedModule, AuthModule],
    });
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
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

  it('should display "username" labeled input', () => {
    const input = fixture.nativeElement.querySelector('#register-username');
    const label = input.previousSibling;
    expect(input).toBeTruthy();
    expect(label).toBeTruthy();
    expect(label.innerText).toBe('Username');
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
    expect(link.innerText).toBe('Create account!');

    link.click();
    tick();

    expect(location.path()).toBe(`/${Path.Empty}`);
  }));
});
