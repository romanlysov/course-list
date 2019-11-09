import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public user: string = 'User login';
  constructor() { }

  ngOnInit() {
  }
}
