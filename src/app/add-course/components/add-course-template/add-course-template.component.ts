import { Component, OnChanges, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import uuidv4 from 'uuid';

import { CourseItem } from '../../../shared/models/course-item.model';
import { CoursesService } from '../../../core/services/courses/courses.service';


@Component({
  selector: 'app-add-course',
  templateUrl: './add-course-template.component.html',
  styleUrls: ['./add-course-template.component.scss']
})
export class AddCourseComponent implements OnInit {
  public course: CourseItem = new CourseItem({
    id: '',
    title: '',
    creationDate: '',
    duration: '',
    description: '',
    topRated: false,
  });

  constructor(private route: ActivatedRoute, private router: Router, private coursesService: CoursesService) { }

  ngOnInit() {
    this.route.params.subscribe((params: {id: number}) => {
      if (params.id) {
        const id = params.id.toString();
        this.coursesService.getItemById(id).subscribe((res: CourseItem) => {
            this.course = new CourseItem(res);
            this.course.id = res.id.toString(); // fix for incorrect id type in DB
        });
      }
    });
  }

  saveHandler() {
    if (!this.course.id || this.course.id !== '0') {
      this.course.id = uuidv4();
    }
    console.log(this.course);
    this.coursesService.createCourse(this.course);
    this.router.navigate(['/courses']);
  }

  dateHandler(value) {
    this.course.creationDate = value;
  }

  durationHandler(value) {
    this.course.duration = value;
  }

  topRatedHandler(value) {
    this.course.topRated = value;
  }

  cancelHandler() {
    this.router.navigate(['/courses']);
  }
}
