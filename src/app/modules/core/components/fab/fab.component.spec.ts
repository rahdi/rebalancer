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

describe('FabComponent', () => {
  let component: FabComponent;
  let fixture: ComponentFixture<FabComponent>;
  let location: NgLocation;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, CoreModule],
    });
    fixture = TestBed.createComponent(FabComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    location = TestBed.inject(NgLocation);
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

    link.click();
    tick();
    expect(location.path()).toBe(`/${Path.NewAsset}`);
  }));
});
