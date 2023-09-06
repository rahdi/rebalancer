import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PigIconComponent } from './pig-icon.component';

describe('PigIconComponent', () => {
  let component: PigIconComponent;
  let fixture: ComponentFixture<PigIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PigIconComponent],
    });
    fixture = TestBed.createComponent(PigIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
