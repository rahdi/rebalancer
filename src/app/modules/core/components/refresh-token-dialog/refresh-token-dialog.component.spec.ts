import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshTokenDialogComponent } from './refresh-token-dialog.component';

describe('RefreshTokenDialogComponent', () => {
  let component: RefreshTokenDialogComponent;
  let fixture: ComponentFixture<RefreshTokenDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefreshTokenDialogComponent]
    });
    fixture = TestBed.createComponent(RefreshTokenDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
