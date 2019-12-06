import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

import { CourseItem } from '../../../shared/models/course-item.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseItemComponent {

  @Input() public courseItem: CourseItem;
  @Output() public deletedCourseId = new EventEmitter<string>();

  constructor() { }

  deleteCourse(courseId) {
    this.deletedCourseId.emit(courseId);
  }
}
