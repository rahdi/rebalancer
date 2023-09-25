import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { NotFoundComponent } from './not-found.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location as NgLocation } from '@angular/common';
import { Path } from 'shared';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;
  let router: Router;
  let location: NgLocation;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundComponent],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    location = TestBed.inject(NgLocation);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display "404"', () => {
    const h1 = fixture.nativeElement.querySelector('h1');
    expect(h1.innerText).toBe('404');
  });

  it('should display first text', () => {
    const paragraphs = fixture.nativeElement.querySelectorAll('p');

    let isTextFound = false;
    (paragraphs as NodeListOf<HTMLParagraphElement>).forEach(
      ({ innerText }) => {
        if (innerText === 'You ran out of money. :(') {
          isTextFound = true;
        }
      }
    );
    expect(isTextFound).toBeTrue();
  });

  it('should display second text', () => {
    const paragraphs = fixture.nativeElement.querySelectorAll('p');

    let isTextFound = false;
    (paragraphs as NodeListOf<HTMLParagraphElement>).forEach(
      ({ innerText }) => {
        if (innerText === 'A special dollar tree is here for you.') {
          isTextFound = true;
        }
      }
    );
    expect(isTextFound).toBeTrue();
  });

  it('should display dolar tree icon', () => {
    const dolarTree = fixture.nativeElement.querySelector(
      'svg.special-dollar-tree-icon'
    );
    expect(dolarTree).toBeTruthy();
  });

  it('should display a "Go to homepage" link', fakeAsync(() => {
    const link = fixture.nativeElement.querySelector('a');
    expect(link.innerText).toBe('Go to homepage');

    link.click();
    tick();
    expect(location.path()).toBe(`/${Path.Dashboard}`);
  }));
});
