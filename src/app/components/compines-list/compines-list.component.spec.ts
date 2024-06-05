import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompinesListComponent } from './compines-list.component';

describe('CompinesListComponent', () => {
  let component: CompinesListComponent;
  let fixture: ComponentFixture<CompinesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompinesListComponent]
    });
    fixture = TestBed.createComponent(CompinesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
