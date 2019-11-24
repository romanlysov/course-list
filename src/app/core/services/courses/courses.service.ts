import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { CourseItem } from '../../../shared/models/course-item.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor(private db: AngularFireDatabase, private http: HttpClient ) {}

  private coursesEndpointPath: string = 'https://courses-list.firebaseio.com/courses/-LuSYgIZ1GzC4jO1npMb';
  private coursesEndpoint: string = `${this.coursesEndpointPath}.json`;
  private corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'append,delete,entries,foreach,get,has,keys,set,values,Authorization',
  };

  public formatCoursesResponse(courses) {
    const keys = Object.keys(courses);
    return keys.map(elem => courses[elem]);
  }

  public pushInitialData(courses: CourseItem[]) {
    const itemsRef = this.db.list('courses');
    itemsRef.push(courses);
  }

  public deleteCourse(id) {
    return this.http.delete(
      `${this.coursesEndpointPath}/${id}.json`, {
        headers: this.corsHeaders,
      }
    );
  }

  public getFullCoursesList() {
    return this.http.get(this.coursesEndpoint, {
      headers: this.corsHeaders,
    });
  }

  public getPartOfCourses(startFrom) {
    return this.http.get(
      this.coursesEndpoint,
      {
        params: {
          orderBy: `\"$key\"`,
          startAt: `\"${startFrom}\"`,
          limitToFirst: '10',
        }
      }
    );
  }

  public getSearchedCourses(query) {
    return this.http.get(
      this.coursesEndpoint,
      {
        params: {
          orderBy: '\"title\"',
          equalTo: `\"${query}\"`,
        }
    }
    );
  }

  public createCourse(course) {
    console.log(course);
    const courseRef = this.db.list('courses/-LuSYgIZ1GzC4jO1npMb');
    return courseRef.update( (course.id).toString(), course);
  }

  public getItemById(id: string) {
    return this.http.get(
      `${this.coursesEndpointPath}/${id}.json`, {
        headers: this.corsHeaders,
      });
  }
}


