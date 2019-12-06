import { AddCourseActionsTypes } from '../actions/add-course.actions';
import { CourseItem } from '../../shared/models/course-item.model';

export interface AddCourseState {
  currentCourse?: CourseItem;
}

export const addCourseReducer = (state: AddCourseState = {currentCourse: null}, action) => {
  switch (action.type) {
    case AddCourseActionsTypes.getCourseByIdSuccess: {
      return {
        ...state,
        currentCourse: action.payload,
      };
    }
    default:
      return state;
  }
};
