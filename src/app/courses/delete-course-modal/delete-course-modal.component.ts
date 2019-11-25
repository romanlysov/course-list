import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-delete-course-modal',
  templateUrl: './delete-course-modal.component.html',
  styleUrls: ['./delete-course-modal.component.scss']
})
export class DeleteCourseModalComponent implements OnInit {
  @Output() modalValue = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  clickHandler(value: boolean) {
    this.modalValue.emit(value);
  }
}
