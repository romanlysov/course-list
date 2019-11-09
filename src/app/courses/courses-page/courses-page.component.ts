import { Component, OnInit, OnChanges } from '@angular/core';
import { CourseItem } from '../course-item.model';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit, OnChanges {
  public courseItems: CourseItem[];
  constructor() {
    console.log('constructor');
  }
  ngOnInit() {
    console.log('ngOnInit');
    this.courseItems = [
      {
        id: '1',
        title: 'Angular course',
        creationDate: 'November 01 2019',
        duration: 60,
        description: 'Introduction to Angular. Angular is a platform for building mobile and desktop web applications.\n' +
        '    Join the community of millions of developers who build compelling user interfaces with Angular.',
      },
      {
        id: '2',
        title: 'React course',
        creationDate: 'November 02 2019',
        duration: 30,
        description: 'Introduction to React. React can be used as a base in the development of single-page or \n' +
        'applications. as it is optimal for fetching rapidly changing data that needs to be recorded. However, fetching ' +
        'data is only the beginning of what happens on a web page, which is why complex React applications usually require ' +
        'the use of additional libraries for state management, routing, and interaction with an API',
      },
      {
        id: '3',
        title: 'Svelte course',
        creationDate: 'November 03 2019',
        duration: 15,
        description: 'Introduction to Svelte. Svelte is a radical new approach to building user interfaces. Whereas ' +
        'traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work' +
        ' into a compile step that happens when you build your app.',
      },
    ];
  }
  ngOnChanges() {
    console.log('ngOnChanges');
  }

  log(course) {
    console.log(course);
  }

  loadMoreHandler() {
    console.log('loaded more courses');
  }
}
