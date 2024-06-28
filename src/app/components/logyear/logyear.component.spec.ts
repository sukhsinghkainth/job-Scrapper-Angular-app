import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogyearComponent } from './logyear.component';

describe('LogyearComponent', () => {
  let component: LogyearComponent;
  let fixture: ComponentFixture<LogyearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogyearComponent]
    });
    fixture = TestBed.createComponent(LogyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
