import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobscardComponent } from './jobscard.component';

describe('JobscardComponent', () => {
  let component: JobscardComponent;
  let fixture: ComponentFixture<JobscardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobscardComponent]
    });
    fixture = TestBed.createComponent(JobscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
