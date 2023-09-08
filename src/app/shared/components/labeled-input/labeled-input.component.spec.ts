import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabeledInputComponent } from './labeled-input.component';

describe('LabeledInputComponent', () => {
  let component: LabeledInputComponent;
  let fixture: ComponentFixture<LabeledInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabeledInputComponent],
    });
    fixture = TestBed.createComponent(LabeledInputComponent);
    component = fixture.componentInstance;
    component.id = 'my-test-id';
    component.label = 'TestLabel';
    component.type = 'password';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a properly created label', () => {
    const label = fixture.nativeElement.querySelector('label');
    expect(label).toBeTruthy();
    expect(label.innerText).toBe(component.label);

    const attrFor = label.getAttribute('for');
    expect(attrFor).toBe(component.id);
  });

  it('should have a properly created input', () => {
    const input = fixture.nativeElement.querySelector('input');
    expect(input).toBeTruthy();

    const attrId = input.getAttribute('id');
    const attrName = input.getAttribute('name');
    const attrType = input.getAttribute('type');
    expect(attrId).toBe(component.id);
    expect(attrName).toBe(component.id);
    expect(attrType).toBe(component.type);
  });
});
