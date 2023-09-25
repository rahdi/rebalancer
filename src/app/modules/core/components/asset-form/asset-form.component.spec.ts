import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { AssetFormComponent } from './asset-form.component';
import { Path, SharedModule } from 'shared';
import { RouterTestingModule } from '@angular/router/testing';
import { Location as NgLocation } from '@angular/common';
import { Router } from '@angular/router';

describe('AssetFormComponent', () => {
  let component: AssetFormComponent;
  let fixture: ComponentFixture<AssetFormComponent>;
  let location: NgLocation;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssetFormComponent],
      imports: [SharedModule, RouterTestingModule],
    });
    fixture = TestBed.createComponent(AssetFormComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    location = TestBed.inject(NgLocation);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 inputs', () => {
    const input = fixture.nativeElement.querySelectorAll('input');
    expect(input.length).toBe(3);
  });

  it('should display "Asset\'s name" labeled input', () => {
    const input = fixture.nativeElement.querySelector('#new-asset-name');
    const label = input.previousSibling;
    expect(input).toBeTruthy();
    expect(label).toBeTruthy();
    expect(label.innerText).toBe("Asset's name");
  });

  it('should display "Group of investments" labeled input', () => {
    const input = fixture.nativeElement.querySelector('#new-asset-group');
    const label = input.previousSibling;
    expect(input).toBeTruthy();
    expect(label).toBeTruthy();
    expect(label.innerText).toBe('Group of investments');
  });

  it('should display "Amount of money invested" labeled input', () => {
    const input = fixture.nativeElement.querySelector('#new-asset-amount');
    const label = input.previousSibling;
    expect(input).toBeTruthy();
    expect(label).toBeTruthy();
    expect(label.innerText).toBe('Amount of money invested');
  });

  it('should display "Amount of money invested" labeled input for "Edit asset" page', () => {
    component.edit = true;
    fixture.detectChanges();
    const input = fixture.nativeElement.querySelector('#edit-asset-amount');
    const label = input.previousSibling;
    expect(input).toBeTruthy();
    expect(label).toBeTruthy();
    expect(label.innerText).toBe('Amount of money invested');
  });

  it('should display a button to go back', fakeAsync(() => {
    const link = fixture.nativeElement.querySelector('.btn-secondary');
    expect(link).toBeTruthy();
    expect(link.innerText).toBe('Cancel');

    link.click();
    tick();

    expect(location.path()).toBe(`/${Path.Dashboard}`);
  }));

  it('should display a Confirm button', () => {
    const button = fixture.nativeElement.querySelector('.btn-primary');
    expect(button).toBeTruthy();
    expect(button.innerText).toBe('Add');
  });
});
