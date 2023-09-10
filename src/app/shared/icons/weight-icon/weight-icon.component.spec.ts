import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightIconComponent } from './weight-icon.component';

describe('WeightIconComponent', () => {
  let component: WeightIconComponent;
  let fixture: ComponentFixture<WeightIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeightIconComponent],
    });
    fixture = TestBed.createComponent(WeightIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
