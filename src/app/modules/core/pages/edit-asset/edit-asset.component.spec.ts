import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAssetComponent } from './edit-asset.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from '../../core.module';
import { StoreModule } from '@ngrx/store';

describe('EditAssetComponent', () => {
  let component: EditAssetComponent;
  let fixture: ComponentFixture<EditAssetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, RouterTestingModule, StoreModule.forRoot({})],
    });
    fixture = TestBed.createComponent(EditAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
