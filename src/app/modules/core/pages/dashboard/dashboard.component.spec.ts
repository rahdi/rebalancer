import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DashboardComponent } from './dashboard.component';
import { CoreModule } from '../../core.module';
import { StoreModule } from '@ngrx/store';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, RouterTestingModule, StoreModule.forRoot({})],
    });
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a "content container" element', () => {
    const content = fixture.nativeElement.querySelector('.card');
    expect(content).toBeTruthy();
  });

  it('should have a "Your portfolio" header', () => {
    const header = fixture.nativeElement.querySelector('.card h4');
    expect(header.innerText).toBe('Your portfolio');
  });
});
