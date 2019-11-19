import { Injectable } from '@angular/core';
import { CourseItem } from './course-item.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  private courseList: CourseItem[] = [
    {
      id: '1',
      title: 'Angular',
      creationDate: new Date('November 10 2019'),
      duration: 661,
      description: 'Introduction to Angular. Angular is a platform for building mobile and desktop web applications.\n' +
      '    Join the community of millions of developers who build compelling user interfaces with Angular.',
      topRated: true,
    },
    {
      id: '2',
      title: 'React',
      creationDate: new Date('October 02 2019'),
      duration: 30,
      description: 'Introduction to React. React can be used as a base in the development of single-page or \n' +
      'applications. as it is optimal for fetching rapidly changing data that needs to be recorded. However, fetching ' +
      'data is only the beginning of what happens on a web page, which is why complex React applications usually require ' +
      'the use of additional libraries for state management, routing, and interaction with an API',
      topRated: false,
    },
    {
      id: '3',
      title: 'Svelte',
      creationDate: new Date('November 28 2019'),
      duration: 15,
      description: 'Introduction to Svelte. Svelte is a radical new approach to building user interfaces. Whereas ' +
      'traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work' +
      ' into a compile step that happens when you build your app.',
      topRated: false,
    },
    {
      id: '4',
      title: 'test',
      creationDate: new Date('November 29 2019'),
      duration: 15,
      description: 'Introduction to Svelte. Svelte is a radical new approach to building user interfaces. Whereas ' +
      'traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work' +
      ' into a compile step that happens when you build your app.',
      topRated: false,
    },
  ];

  public getList() {
    return this.courseList;
  }

  public createCourse(course: CourseItem) {
    this.courseList.push(course);
  }

  public getItemById(id: string) {
    return this.courseList.find((elem: CourseItem) => elem.id === id);
  }

  public updateItem(item: CourseItem) {
    const oldItem = this.getItemById(item.id);
    const keys = Object.keys(oldItem);
    for (const key in keys) {
      if (oldItem[key] !== item[key]) {
        oldItem[key] = item[key];
      }
    }
  }

  public removeItem(id: string) {
    const item = this.getItemById(id);
    const itemIndex = this.courseList.indexOf(item);
    this.courseList.splice(itemIndex, 1);
  }
}
