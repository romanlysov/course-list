import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { CoursesService } from '../../core/services/courses/courses.service';
import { AddCourseActionsTypes, GetCourseById, GetCourseByIdSuccess } from '../actions/add-course.actions';
import { exhaustMap, map, switchMap } from 'rxjs/internal/operators';
import { SetLoaderStatus } from '../../core/loader/loader.actions';

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

  constructor(private actions$: Actions, private coursesService: CoursesService) {}
}
