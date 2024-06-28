import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogdayComponent } from './logday.component';

describe('LogdayComponent', () => {
  let component: LogdayComponent;
  let fixture: ComponentFixture<LogdayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogdayComponent]
    });
    fixture = TestBed.createComponent(LogdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
