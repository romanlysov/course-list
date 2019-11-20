import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CourseItem } from '../../courses/course-item.model';
import { CoursesService } from '../../courses/courses.service';


@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  public course?: CourseItem;
  constructor(private route: ActivatedRoute, private router: Router, private coursesService: CoursesService) { }

  ngOnInit() {
    this.route.params.subscribe((params: {id: number}) => {
      if (params.id) {
        const id = params.id.toString();
        this.course = this.coursesService.getItemById(id);
      }
    });
    console.log(this.course);
  }

  saveHandler() {
    if (this.course) {
      this.coursesService.updateItem(this.course);
    }
    this.router.navigate(['/courses']);
  }

  cancelHandler() {
    this.router.navigate(['/courses']);
  }
}
