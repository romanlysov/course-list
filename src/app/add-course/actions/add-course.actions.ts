import { Action } from '@ngrx/store';

export const AddCourseActionsTypes = {
  getCourseById: '[Add Course] Get Course By Id',
  getCourseByIdSuccess: '[Add Course] Get Course By Id Success',
  getAuthor: '[Add Course] Get Author',
  getAuthorSuccess: '[Add Course] Get Author Success',
};

export class GetCourseById implements Action {
  readonly type = AddCourseActionsTypes.getCourseById;

  constructor(public payload) {}
}

export class GetCourseByIdSuccess implements Action {
  readonly type = AddCourseActionsTypes.getCourseByIdSuccess;

  constructor(public payload) {}
}

export class GetAuthor implements Action {
  readonly type = AddCourseActionsTypes.getAuthor;

  constructor(public payload) {}
}

export class GetAuthorSuccess implements Action {
  readonly type = AddCourseActionsTypes.getAuthorSuccess;

  constructor(public payload) {}
}
