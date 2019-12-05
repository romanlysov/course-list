import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { interval, Observable } from 'rxjs/index';
import { debounce } from 'rxjs/operators';

import { SearchCoursePipe } from '../../../shared/pipes/search-course/search-course.pipe';
import { AuthorizationService } from '../../../core/services/authorization/authorization.service';
import { LoaderService } from '../../../core/loader/loader.service';
import { DeleteCourse, GetCourses, GetPartOfCourses, GetSearchedCourses } from '../../actions/courses.actions';
import { getCoursesList, getCoursesStatus } from '../../selectors/courses.selectors';
import { SetLoaderStatus } from '../../../core/loader/loader.actions';
import { AppStore } from '../../../shared/models/store.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  providers: [SearchCoursePipe]
})

export class CoursesListComponent implements OnInit, OnChanges {
  public showModal: boolean = false;
  public isAuthorized: boolean;
  private deletedCourseId: string;
  public courses$;
  public isLoaded$;

  @Input() searchValue: string;

  constructor(private authService: AuthorizationService,
              private loaderService: LoaderService,
              private store: Store<AppStore>) {
  }

  ngOnInit() {
    this.store.dispatch(new GetCourses());
    this.courses$ = this.store.pipe(select(getCoursesList));
    this.isLoaded$ = this.store.pipe(select(getCoursesStatus));
    this.isAuthorized = this.authService.isAuthenticated();
  }

  ngOnChanges(changes) {
    if (changes.searchValue && this.courses$) {

      const obs = new Observable(observer => {
        observer.next(this.searchValue);
      });

      obs
        .pipe(debounce(() => interval(2000)))
        .subscribe((value: string) => {
          if (value.length > 2) {
            this.store.dispatch(new SetLoaderStatus(true));
            this.store.dispatch(new GetSearchedCourses(value));
          }
          if (value.length === 0) {
            this.store.dispatch(new SetLoaderStatus(true));
            this.store.dispatch(new GetCourses());
          }
        });
    }

  }

  private setModalState(state) {
    this.showModal = state;
  }

  public deleteCourseHandler(id: string) {
    this.setModalState(true);
    this.deletedCourseId = id;
  }

  public modalHandler(state: boolean) {
    if (state) {
      console.log(state);
      this.courses$.subscribe(courses => {
        const deletedItem = courses.find(elem => elem.id === this.deletedCourseId);
        const deletedItemIndex = courses.indexOf(deletedItem);
        this.store.dispatch(new DeleteCourse(this.deletedCourseId));
        courses.splice(deletedItemIndex, 1);
        this.setModalState(false);
      });
    }
  }

  loadMoreHandler() {
    this.store.dispatch(new SetLoaderStatus(true));
    this.courses$.subscribe(courses => {
      if (!courses || courses.length === 0) {
        this.store.dispatch(new GetCourses());
        this.loaderService.setLoading(false);
        return;
      }
      const lastLoadedCourse = courses.pop();
      this.store.dispatch(new GetPartOfCourses(lastLoadedCourse.id));
    });
  }
}
