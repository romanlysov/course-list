import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CoursesService } from '../../services/courses/courses.service';
import { CourseItem } from '../../../shared/models/course-item.model';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private coursesService: CoursesService) { }

  public breadCrumbPath: string = '';

  ngOnInit() {
    this.route.params.subscribe((params: {id: number}) => {
      if (params.id) {
        const id = params.id.toString();
        this.coursesService.getItemById(id).subscribe((res: CourseItem) => {
          const courseTitle = res.title;
          this.breadCrumbPath = `/${courseTitle}`;
        });
      }
    });
  }
}
