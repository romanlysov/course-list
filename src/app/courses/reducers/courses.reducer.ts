import { CoursesActionsTypes } from '../actions/courses.actions';

const initialState = {};

export interface CoursesState {
  list?: any[];
  isLoaded?: boolean;
}

export const coursesReducer = (state: CoursesState = initialState, action) => {
  switch (action.type) {
    case CoursesActionsTypes.getCoursesSuccess: {
      return {
        ...state,
        isLoaded: true,
        list: action.payload,
      };
    }
    case CoursesActionsTypes.getPartOfCoursesSuccess: {
      return {
        ...state,
        list: [...state.list, ...action.payload]
      };
    }
    case CoursesActionsTypes.getSearchedCoursesSuccess: {
      return {
        ...state,
        list: action.payload,
      };
    }
    default:
      return state;
  }
};
