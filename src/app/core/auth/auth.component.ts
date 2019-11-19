import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  @Output() logOff = new EventEmitter();
  public userName: string = 'User login';
  constructor() { }

  ngOnInit() {
  }

  logOffEmitter() {
    this.logOff.emit();
  }
}
