import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, debounce, exhaustMap, map, switchMap } from 'rxjs/internal/operators';
import { interval, of } from 'rxjs/index';

import {
  CoursesActionsTypes,
  DeleteCourse,
  DeleteCourseSuccess,
  GetCoursesFailure,
  GetCoursesSuccess,
  GetPartOfCourses,
  GetPartOfCoursesSuccess,
  GetSearchedCourses,
  GetSearchedCoursesSuccess
} from '../actions/courses.actions';
import { CoursesService } from '../../core/services/courses/courses.service';
import { SetLoaderStatus } from '../../core/loader/loader.actions';

@Injectable()
export class CoursesEffects {
  @Effect()
  getFirstCourses$ = this.actions$.pipe(
    ofType(CoursesActionsTypes.getFirstCourses),
    exhaustMap(() => this.coursesService.getPartOfCourses(0).pipe(
      switchMap((res) => [
          new GetCoursesSuccess(this.coursesService.formatCoursesResponse(this.coursesService.filterNull(res))),
          new SetLoaderStatus(false)
        ]
      ),
      catchError(error => of(new GetCoursesFailure()))
    ))
  );

  @Effect()
  getPartOfCourses$ = this.actions$.pipe(
    ofType(CoursesActionsTypes.getPartOfCourses),
    map((action: GetPartOfCourses) => action.payload),
    exhaustMap((startFrom: number) => this.coursesService.getPartOfCourses(startFrom).pipe(
      switchMap((res) => [
        new GetPartOfCoursesSuccess(this.coursesService.formatCoursesResponse(this.coursesService.filterNull(res))),
        new SetLoaderStatus(false)
      ]),
      )
    )
  );

  @Effect()
  getSearchedCourses$ = this.actions$.pipe(
    ofType(CoursesActionsTypes.getSearchedCourses),
    debounce(() => interval(3000)),
    map((action: GetSearchedCourses) => action.payload),
    exhaustMap((query) => this.coursesService.getSearchedCourses(query).pipe(
      switchMap(res => [
        new GetSearchedCoursesSuccess(this.coursesService.formatCoursesResponse(res)),
        new SetLoaderStatus(false)
      ])
      )
    )
  );
  @Effect()
  deleteCourse$ = this.actions$.pipe(
    ofType(CoursesActionsTypes.deleteCourse),
    map((action: DeleteCourse) => action.payload),
    exhaustMap((id) => this.coursesService.deleteCourse(id).pipe(
      switchMap(() => [
          new DeleteCourseSuccess()
        ]
      )
    ))
  );

  constructor(private actions$: Actions, private coursesService: CoursesService) {
  }
}
