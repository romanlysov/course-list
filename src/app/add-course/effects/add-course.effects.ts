import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { CoursesService } from '../../core/services/courses/courses.service';
import {
  AddCourseActionsTypes, GetAuthor, GetAuthorSuccess, GetCourseById,
  GetCourseByIdSuccess
} from '../actions/add-course.actions';
import { debounce, exhaustMap, map, switchMap } from 'rxjs/internal/operators';
import { SetLoaderStatus } from '../../core/loader/loader.actions';
import { interval } from 'rxjs/index';

@Injectable()
export class AddCourseEffects {
  @Effect()
  getSearchedCourse$ = this.actions$.pipe(
    ofType(AddCourseActionsTypes.getCourseById),
    map((action: GetCourseById) => action.payload),
    exhaustMap((id) => {
      return this.coursesService.getItemById(id).pipe(
        switchMap((res) => [
          new GetCourseByIdSuccess(res),
          new SetLoaderStatus(false)
        ])
      );
    })
  );

  @Effect()
  getAuthor$ = this.actions$.pipe(
    ofType(AddCourseActionsTypes.getAuthor),
    // debounce(() => interval(2000)),
    map((action: GetAuthor) => {  return action.payload; }),
      exhaustMap((value) => {
      return this.coursesService.getSearchedAuthors(value).pipe(
        switchMap((res) =>  [new GetAuthorSuccess(res)])
      );
      }));

  constructor(private actions$: Actions, private coursesService: CoursesService) {}
}
