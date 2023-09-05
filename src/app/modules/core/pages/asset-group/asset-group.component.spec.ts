import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetGroupComponent } from './asset-group.component';

describe('AssetGroupComponent', () => {
  let component: AssetGroupComponent;
  let fixture: ComponentFixture<AssetGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssetGroupComponent]
    });
    fixture = TestBed.createComponent(AssetGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
