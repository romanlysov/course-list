import { createSelector } from '@ngrx/store';
import { AddCourseState } from '../reducers/ad-course.reducers';
import { AppStore } from '../../shared/models/store.model';

const getCourseState = (state: AppStore) => state.addCourse;

export const getCurrentCourse = createSelector(
  getCourseState,
  (courseState: AddCourseState) => courseState.currentCourse
);
