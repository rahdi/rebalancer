import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { LayoutComponent } from './layout.component';
import { PigIconComponent, WeightIconComponent } from 'shared/icons';
import { SharedModule } from '../../shared.module';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;
  let store: MockStore;
  const initialState = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeightIconComponent, PigIconComponent],
      imports: [RouterTestingModule, SharedModule],
      providers: [provideMockStore({ initialState })],
    });
    fixture = TestBed.createComponent(LayoutComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
