import { Pipe, PipeTransform } from '@angular/core';
import {CourseItem} from '../course-item.model';

@Pipe({
  name: 'searchCourse'
})
export class SearchCoursePipe implements PipeTransform {

  transform(value: string, courses: CourseItem[]): CourseItem[] {
    console.log('pipe', courses);
    return value.length > 0
      ? courses.filter(course => course.title.toLowerCase() === value.toLowerCase())
      : courses;
    }
}
