import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';
import { SharedModule } from 'shared';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeComponent],
      imports: [SharedModule],
    });
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    const h1 = nativeElement.querySelector('h1');
    expect(h1).toBeTruthy();
  });

  it('should have a title "Rebalancer"', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    const h1 = nativeElement.querySelector('h1');
    expect(h1?.innerText).toEqual('Rebalancer');
  });

  it('should have a subtitle', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    const h5 = nativeElement.querySelector('h5');
    expect(h5).toBeTruthy();
  });

  it('should have a subtitle "by Adrian Heidenreich"', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    const h5 = nativeElement.querySelector('h5');
    expect(h5?.innerText).toEqual('by Adrian Heidenreich');
  });

  it('should have a paragraph', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    const p = nativeElement.querySelector('p');
    expect(p).toBeTruthy();
  });

  it('should have a paragraph with description', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    const p = nativeElement.querySelector('p');
    expect(p?.innerText).toEqual(
      'A simple tool to display your investments portfolio, so you can easily tell, if rebalancing is needed'
    );
  });

  it('should have a button', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    const button = nativeElement.querySelector('button');
    expect(button).toBeTruthy();
  });

  it('should have a button with text "Start!"', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    const button = nativeElement.querySelector('button');
    expect(button?.innerText).toEqual('Start!');
  });
});
