import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../../courses/courses.service';

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
      console.log('crumbs', params.id);
      if (params.id) {
        const id = params.id.toString();
        const courseTitle = this.coursesService.getItemById(id).title;
        this.breadCrumbPath = `/${courseTitle}`;
      }
    });
  }
}
