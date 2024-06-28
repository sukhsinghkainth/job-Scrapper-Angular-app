import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogMonthComponent } from './log-month.component';

describe('LogMonthComponent', () => {
  let component: LogMonthComponent;
  let fixture: ComponentFixture<LogMonthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogMonthComponent]
    });
    fixture = TestBed.createComponent(LogMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
