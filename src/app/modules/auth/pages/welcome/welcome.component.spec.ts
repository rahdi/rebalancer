import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { WelcomeComponent } from './welcome.component';
import { AuthModule } from '../../auth.module';
import { Path } from 'shared';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let router: Router;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeComponent],
      imports: [RouterTestingModule.withRoutes([]), AuthModule],
    });
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    const h1 = fixture.nativeElement.querySelector('h1');
    expect(h1).toBeTruthy();
  });

  it('should have a title "Rebalancer"', () => {
    const h1 = fixture.nativeElement.querySelector('h1');
    expect(h1?.innerText).toEqual('Rebalancer');
  });

  it('should have a subtitle', () => {
    const h5 = fixture.nativeElement.querySelector('h5');
    expect(h5).toBeTruthy();
  });

  it('should have a subtitle "by Adrian Heidenreich"', () => {
    const h5 = fixture.nativeElement.querySelector('h5');
    expect(h5?.innerText).toEqual('by Adrian Heidenreich');
  });

  it('should have a paragraph', () => {
    const p = fixture.nativeElement.querySelector('p');
    expect(p).toBeTruthy();
  });

  it('should have a paragraph with description', () => {
    const p = fixture.nativeElement.querySelector('p');
    expect(p?.innerText).toEqual(
      'A simple tool to display your investments portfolio, so you can easily tell, if rebalancing is needed'
    );
  });

  it('should have a link', () => {
    const a = fixture.nativeElement.querySelector('a');
    expect(a).toBeTruthy();
  });

  it('should have a link with text "Start!"', () => {
    const a = fixture.nativeElement.querySelector('a');
    expect(a?.innerText).toEqual('Start!');
  });

  it(`should navigate to "/${Path.ChooseOption}" when the link is clicked`, fakeAsync(() => {
    const link = fixture.nativeElement.querySelector('a');
    link.click();
    tick();
    expect(location.path()).toBe(`/${Path.ChooseOption}`);
  }));
});
