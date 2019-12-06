import { createSelector } from '@ngrx/store';
import { AppStore } from '../../shared/models/store.model';
import { CoursesState } from '../reducers/courses.reducer';

const getCourses = (state: AppStore) => state.courses;

export const getCoursesList = createSelector(
  getCourses,
  (courses: CoursesState) => courses.list
);

export const getCoursesStatus = createSelector(
  getCourses,
  (courses: CoursesState) => courses.isLoaded
);
