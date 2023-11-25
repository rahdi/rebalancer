import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartComponent } from './chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('ChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;
  let store: MockStore;
  const initialState = { apiAuth: { email: '' } };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartComponent],
      imports: [NgxChartsModule],
      providers: [provideMockStore({ initialState })],
    });
    fixture = TestBed.createComponent(ChartComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
