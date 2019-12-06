import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent {
  @Input() userName;
  @Output() logOff = new EventEmitter();
  constructor() { }

  logOffEmitter() {
    this.logOff.emit();
  }
}
