import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ContentContainerComponent } from './content-container.component';
import { CoreModule } from '../../core.module';

describe('ContentContainerComponent', () => {
  let component: ContentContainerComponent;
  let fixture: ComponentFixture<ContentContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, RouterTestingModule],
    });
    fixture = TestBed.createComponent(ContentContainerComponent);
    component = fixture.componentInstance;
    component.header = 'My Test Header';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a header "My Test Header"', () => {
    const header = fixture.nativeElement.querySelector('.card h4');
    expect(header.innerText).toBe('My Test Header');
  });

  it('should have a menu button', () => {
    const button = fixture.nativeElement.querySelector('app-menu-button');
    expect(button).toBeTruthy();
  });
});
