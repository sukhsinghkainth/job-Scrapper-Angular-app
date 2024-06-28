import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogFileComponent } from './log-file.component';

describe('LogFileComponent', () => {
  let component: LogFileComponent;
  let fixture: ComponentFixture<LogFileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogFileComponent]
    });
    fixture = TestBed.createComponent(LogFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
