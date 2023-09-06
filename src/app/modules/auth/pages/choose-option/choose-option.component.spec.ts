import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseOptionComponent } from './choose-option.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ChooseOptionComponent', () => {
  let component: ChooseOptionComponent;
  let fixture: ComponentFixture<ChooseOptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseOptionComponent],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(ChooseOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
      'You are not logged in. Please choose one of the options below:'
    );
  });

  it('should have 3 links', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    const links = nativeElement.querySelectorAll('a');
    expect(links.length).toBe(3);
  });

  it('should have a link to login', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    const links = nativeElement.querySelectorAll('a');

    let isLogin = false;
    links.forEach(({ innerText }) => {
      if (innerText === 'Log in') {
        isLogin = true;
      }
    });
    expect(isLogin).toBeTrue();
  });

  it('should have a link to register', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    const links = nativeElement.querySelectorAll('a');

    let isRegister = false;
    links.forEach(({ innerText }) => {
      if (innerText === 'Create a free account') {
        isRegister = true;
      }
    });
    expect(isRegister).toBeTrue();
  });

  it('should have a link to continue as a guest', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    const links = nativeElement.querySelectorAll('a');

    let isGuest = false;
    links.forEach(({ innerText }) => {
      if (innerText === 'Continue as a guest') {
        isGuest = true;
      }
    });
    expect(isGuest).toBeTrue();
  });
});
