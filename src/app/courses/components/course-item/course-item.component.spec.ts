import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { CourseItemComponent } from './course-item.component';

@Component({
  template: `<app-course-item [courseItem]="courseItem"></app-course-item>`
})

class TestHostComponent {
  public courseItem = {
    title: 'test',
    id: 'test',
    creationDate: '20 November',
    duration: 120,
    description: 'test course',
  };
}

describe('CourseItemComponent Host test', () => {
  let testHostComponent: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemComponent, TestHostComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    fixture.detectChanges();
    expect(testHostComponent).toBeTruthy();
  });
});

describe('CourseItemComponent Stand-alone test', () => {
  let fixture: ComponentFixture<CourseItemComponent>;
  let cut: CourseItemComponent;
  let courseItemMock;
  let courseItemEl;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemComponent ]
    });
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    cut = fixture.componentInstance;

    const courseItemDe = fixture.debugElement;
    courseItemEl = courseItemDe.nativeElement;
    courseItemMock = {
      title: 'test',
      id: 'test',
      creationDate: '20 November',
      duration: 120,
      description: 'test course',
    };
    cut.courseItem = courseItemMock;
    fixture.detectChanges();
  });
  it('should display title of the course (input)', () => {
    expect(courseItemEl.querySelector('.course-item__title').textContent).toContain(courseItemMock.title);
  });
  it('should emit Delete click (output)', () => {
    cut.deletedCourseId.subscribe(l => {
      expect(l).toEqual(courseItemMock.id);
    });
    cut.deleteCourse(courseItemMock.id);
  });
});
