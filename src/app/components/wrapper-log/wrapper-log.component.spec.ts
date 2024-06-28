import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperLogComponent } from './wrapper-log.component';

describe('WrapperLogComponent', () => {
  let component: WrapperLogComponent;
  let fixture: ComponentFixture<WrapperLogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WrapperLogComponent]
    });
    fixture = TestBed.createComponent(WrapperLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
