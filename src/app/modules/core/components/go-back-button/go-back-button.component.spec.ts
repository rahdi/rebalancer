import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { Location as NgLocation } from '@angular/common';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { GoBackButtonComponent } from './go-back-button.component';
import { Path } from 'shared';
import { Component } from '@angular/core';

@Component({ standalone: true, template: '' })
class TestStubComponent {}

describe('GoBackButtonComponent', () => {
  let component: GoBackButtonComponent;
  let fixture: ComponentFixture<GoBackButtonComponent>;
  let location: NgLocation;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: Path.NewAsset, component: TestStubComponent },
        ]),
      ],
      declarations: [GoBackButtonComponent],
    });
    fixture = TestBed.createComponent(GoBackButtonComponent);
    router = TestBed.inject(Router);
    location = TestBed.inject(NgLocation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be a link with icon', () => {
    const link = fixture.nativeElement.querySelector('a');
    const icon = fixture.nativeElement.querySelector('a > svg');
    expect(link).toBeTruthy();
    expect(icon).toBeTruthy();
  });

  it('should navigate to "dashboard" on click', fakeAsync(() => {
    const link = fixture.nativeElement.querySelector('a');
    expect(link).toBeTruthy();

    link.click();
    tick();
    expect(location.path()).toBe(`/${Path.Dashboard}`);
  }));

  it('should navigate to "new asset" on click, when goBackURL is changed to navigate there', fakeAsync(() => {
    component.goBackURL = Path.NewAsset;
    fixture.detectChanges();

    const link = fixture.nativeElement.querySelector('a');
    expect(link).toBeTruthy();

    link.click();
    tick();
    expect(location.path()).toBe(`/${Path.NewAsset}`);
  }));
});
