import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetGroupComponent } from './asset-group.component';
import { CoreModule } from '../../core.module';
import { StoreModule } from '@ngrx/store';

describe('AssetGroupComponent', () => {
  let component: AssetGroupComponent;
  let fixture: ComponentFixture<AssetGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, StoreModule.forRoot({})],
    });
    fixture = TestBed.createComponent(AssetGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
