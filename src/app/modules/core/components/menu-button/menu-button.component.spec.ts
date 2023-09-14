import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuButtonComponent } from './menu-button.component';
import { StoreModule } from '@ngrx/store';

describe('MenuButtonComponent', () => {
  let component: MenuButtonComponent;
  let fixture: ComponentFixture<MenuButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuButtonComponent],
      imports: [StoreModule.forRoot({})],
    });
    fixture = TestBed.createComponent(MenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an SVG', () => {
    const icon = fixture.nativeElement.querySelector('svg');
    expect(icon).toBeTruthy();
  });
});
