import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { Router } from '@angular/router';
import { Location as NgLocation } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

import { ChooseOptionComponent } from './choose-option.component';
import { AuthModule } from '../../auth.module';
import { Path } from 'shared';

describe('ChooseOptionComponent', () => {
  let component: ChooseOptionComponent;
  let fixture: ComponentFixture<ChooseOptionComponent>;
  let router: Router;
  let location: NgLocation;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseOptionComponent],
      imports: [RouterTestingModule.withRoutes([]), AuthModule],
    });
    fixture = TestBed.createComponent(ChooseOptionComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    location = TestBed.inject(NgLocation);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a paragraph', () => {
    const p = fixture.nativeElement.querySelector('p');
    expect(p).toBeTruthy();
  });

  it('should have a paragraph with description', () => {
    const p = fixture.nativeElement.querySelector('p');
    expect(p?.innerText).toEqual(
      'You are not logged in. Please choose one of the options below:'
    );
  });

  it('should have 3 links', () => {
    const links = fixture.nativeElement.querySelectorAll('a');
    expect(links.length).toBe(3);
  });

  it('should have a link to login', fakeAsync(() => {
    const links = fixture.nativeElement.querySelectorAll('a');

    let clickedLink: HTMLAnchorElement | null = null;
    (links as NodeListOf<HTMLAnchorElement>).forEach((link) => {
      if (link.innerText === 'Log in') {
        clickedLink = link;
      }
    });
    expect(clickedLink).toBeTruthy();

    (clickedLink as unknown as HTMLAnchorElement).click();
    tick();

    expect(location.path()).toBe(`/${Path.Login}`);
  }));

  it('should have a link to register', fakeAsync(() => {
    const links = fixture.nativeElement.querySelectorAll('a');

    let clickedLink: HTMLAnchorElement | null = null;
    (links as NodeListOf<HTMLAnchorElement>).forEach((link) => {
      if (link.innerText === 'Create a free account') {
        clickedLink = link;
      }
    });
    expect(clickedLink).toBeTruthy();

    (clickedLink as unknown as HTMLAnchorElement).click();
    tick();

    expect(location.path()).toBe(`/${Path.Register}`);
  }));

  it('should have a link to continue as a guest', fakeAsync(() => {
    const links = fixture.nativeElement.querySelectorAll('a');

    let clickedLink: HTMLAnchorElement | null = null;
    (links as NodeListOf<HTMLAnchorElement>).forEach((link) => {
      if (link.innerText === 'Continue as a guest') {
        clickedLink = link;
      }
    });
    expect(clickedLink).toBeTruthy();

    (clickedLink as unknown as HTMLAnchorElement).click();
    tick();

    expect(location.path()).toBe(`/${Path.Dashboard}`);
  }));
});
