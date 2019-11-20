import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.scss']
})
export class DurationInputComponent implements OnInit {
  @Input() duration: string;
  constructor() { }

  ngOnInit() {
  }

}
