import { Action } from '@ngrx/store';

export const CoursesActionsTypes = {
  getFirstCourses: '[Courses] Get First Courses',
  getCoursesSuccess: '[Courses] Get Courses Success',
  getCoursesFailure: '[Courses] Get Courses Failure',
  getPartOfCourses: '[Courses] Get Part of Courses',
  getPartOfCoursesSuccess: '[Courses] Get Part of Courses Success',
  getSearchedCourses: '[Courses] Get Searched Courses',
  getSearchedCoursesSuccess: '[Courses] Get Searched Courses Success',
  deleteCourse: '[Courses] Delete Course',
  deleteCourseSuccess: '[Courses] Delete Course Success',
};

export class GetCourses implements Action {
  readonly type = CoursesActionsTypes.getFirstCourses;

  constructor() {
  }
}

export class GetCoursesSuccess implements Action {
  readonly type = CoursesActionsTypes.getCoursesSuccess;

  constructor(public payload) {
  }
}

export class GetCoursesFailure implements Action {
  readonly type = CoursesActionsTypes.getCoursesFailure;

  constructor() {
  }
}

export class GetPartOfCourses implements Action {
  readonly type = CoursesActionsTypes.getPartOfCourses;

  constructor(public payload) {
  }
}

export class GetPartOfCoursesSuccess implements Action {
  readonly type = CoursesActionsTypes.getPartOfCoursesSuccess;

  constructor(public payload) {
  }
}

export class GetSearchedCourses implements Action {
  readonly type = CoursesActionsTypes.getSearchedCourses;

  constructor(public payload) {
  }
}

export class GetSearchedCoursesSuccess implements Action {
  readonly type = CoursesActionsTypes.getSearchedCoursesSuccess;

  constructor(public payload) {
  }
}

export class DeleteCourse implements Action {
  readonly type = CoursesActionsTypes.deleteCourse;

  constructor(public payload) {
  }
}

export class DeleteCourseSuccess implements Action {
  readonly type = CoursesActionsTypes.deleteCourseSuccess;

  constructor() {
  }
}
