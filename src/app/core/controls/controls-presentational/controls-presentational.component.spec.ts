import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsPresentationalComponent } from './controls-presentational.component';

describe('ControlsPresentationalComponent', () => {
  let component: ControlsPresentationalComponent;
  let fixture: ComponentFixture<ControlsPresentationalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlsPresentationalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlsPresentationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
