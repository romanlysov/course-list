import { Component, OnInit } from '@angular/core';
import { CourseItem } from '../course-item.model';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {
  public courseItems: CourseItem[] = [
    {
    id: '1',
    title: 'Angular course',
    creationDate: 'November 01 2019',
    duration: 60,
    description: 'Introduction to Angular',
    },
    {
      id: '2',
      title: 'React course',
      creationDate: 'November 02 2019',
      duration: 30,
      description: 'Introduction to React',
      },
      {
        id: '3',
        title: 'Svelte course',
        creationDate: 'November 03 2019',
        duration: 15,
        description: 'Introduction to Svelte',
        },
  ];
  constructor() { }

  ngOnInit() {
  }

}
