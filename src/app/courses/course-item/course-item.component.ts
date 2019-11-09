import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourseItem } from '../course-item.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {

  @Input() public courseItem: CourseItem;
  @Output() public logCourseId = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  deleteCourse(courseId) {
    this.logCourseId.emit(courseId);
  }
}
