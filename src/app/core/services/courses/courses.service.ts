import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { HttpClient } from '@angular/common/http';

import { CourseItem } from '../../../shared/models/course-item.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor(private db: AngularFireDatabase, private http: HttpClient) {
  }

  private coursesEndpointPath: string = 'https://courses-list.firebaseio.com/courses/-LuSYgIZ1GzC4jO1npMb';
  private authorsEndpointPath: string = 'https://courses-list.firebaseio.com/authors/-Lvu9lqIpMAjhvpqCrpJ';
  private coursesEndpoint: string = `${this.coursesEndpointPath}.json`;
  private authorsEndpoint: string = `${this.authorsEndpointPath}.json`;
  private corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'append,delete,entries,foreach,get,has,keys,set,values,Authorization',
  };

  public formatCoursesResponse(courses) {
    const keys = Object.keys(courses);
    return keys.map(elem => courses[elem]);
  }

  public pushInitialData(data, path) {
    const itemsRef = this.db.list(path);
    itemsRef.push(data);
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

  public getSearchedAuthors(query) {
    return this.http.get(
      this.authorsEndpoint,
      {
        params: {
          orderBy: '\"firstName\"',
          equalTo: `\"${query}\"`,
        }
      }
    );
  }

  public createCourse(course) {
    const courseRef = this.db.list('courses/-LuSYgIZ1GzC4jO1npMb');
    return courseRef.update((course.id).toString(), course);
  }

  public getItemById(id: string) {
    return this.http.get(
      `${this.coursesEndpointPath}/${id}.json`, {
        headers: this.corsHeaders,
      });
  }

  public filterNull(list) {
    if (Array.isArray(list)) {
      return list.filter(elem => elem);
    }
    return list;
  }
}




