import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAssetComponent } from './new-asset.component';
import { CoreModule } from '../../core.module';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';

describe('NewAssetComponent', () => {
  let component: NewAssetComponent;
  let fixture: ComponentFixture<NewAssetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, RouterTestingModule, StoreModule.forRoot({})],
    });
    fixture = TestBed.createComponent(NewAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
