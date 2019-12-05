import { Action } from '@ngrx/store';

export const AddCourseActionsTypes = {
  getCourseById: '[Add Course] Get Course By Id',
  getCourseByIdSuccess: '[Add Course] Get Course By Id Success',
};

export class GetCourseById implements Action {
  readonly type = AddCourseActionsTypes.getCourseById;

  constructor(public payload) {}
}

export class GetCourseByIdSuccess implements Action {
  readonly type = AddCourseActionsTypes.getCourseByIdSuccess;

  constructor(public payload) {}
}
