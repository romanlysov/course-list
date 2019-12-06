import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedInputComponent } from './top-rated-input.component';

describe('TopRatedInputComponent', () => {
  let component: TopRatedInputComponent;
  let fixture: ComponentFixture<TopRatedInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopRatedInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRatedInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
