import { AuthState } from './authorization.model';
import { CoursesState } from '../../courses/reducers/courses.reducer';
import { LoaderState } from '../../core/loader/loader.reducers';
import { AddCourseState } from '../../add-course/reducers/ad-course.reducers';

export interface AppStore {
  auth: AuthState;
  courses: CoursesState;
  loader: LoaderState;
  addCourse: AddCourseState;
}
