import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs/index';
import uuidv4 from 'uuid';

import { CourseItem } from '../../../shared/models/course-item.model';
import { CoursesService } from '../../../core/services/courses/courses.service';
import { GetAuthor, GetCourseById } from '../../actions/add-course.actions';
import { SetLoaderStatus } from '../../../core/loader/loader.actions';
import { getCurrentCourse } from '../../selectors/add-course.selectors';
import { AppStore } from '../../../shared/models/store.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { dateValidator } from '../date-input/date-input.validators';
import { durationValidator } from '../duration-input/duration-input.validators';


@Component({
  selector: 'app-add-course',
  templateUrl: './add-course-template.component.html',
  styleUrls: ['./add-course-template.component.scss']
})
export class AddCourseComponent implements OnInit, OnDestroy, OnChanges {
  public course$: Observable<CourseItem>;
  private courseSubscription;

  public courseForm = new FormGroup({
    title: new FormControl('', [Validators.maxLength(50)]),
    description: new FormControl('', [Validators.maxLength(500)]),
    date: new FormControl('', [dateValidator]),
    duration: new FormControl('', [durationValidator]),
    author: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesService,
    private store: Store<AppStore>
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: {id: number}) => {
      if (params.id) {
        const id = params.id.toString();
        this.store.dispatch(new SetLoaderStatus(true));
        this.store.dispatch(new GetCourseById(id));
        this.course$ = this.store.pipe(select(getCurrentCourse));
        this.course$.subscribe(course => {
          console.log(course.creationDate);
          this.courseForm.setValue({
            title: course.title,
            description: course.description,
            date: course.creationDate,
            duration: course.duration,
            author: ''
          });

        });
        return;
      }
      this.course$ = of(new CourseItem());
    });
  }

  ngOnDestroy() {
    if (this.courseSubscription) {
      this.courseSubscription.unsubscribe();
    }
  }

  ngOnChanges(changes) {
    console.log(changes);
  }

  saveHandler() {
    console.log(this.courseForm);
    this.courseSubscription = this.course$.subscribe(course => {
      if (!course.id) {
        course.id = uuidv4();
      }
      this.coursesService.createCourse(course);
      this.router.navigate(['/courses']);
      }
    );
  }

  dateHandler(value) {
    this.course$.subscribe(course => {
      course.creationDate = value;
    });
  }

  durationHandler(value) {
    this.course$.subscribe(course => {
      course.duration = value;
      }
    );
  }

  topRatedHandler(value) {
    this.course$.subscribe(course => {
        course.topRated = value;
      }
    );
  }

  cancelHandler() {
    this.router.navigate(['/courses']);
  }

  searchAuthors(value) {
    this.store.dispatch(new GetAuthor(value));
  }
}
