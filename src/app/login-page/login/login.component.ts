import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthorizationService } from '../../core/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthorizationService) { }
  loginHandler(login, pass) {
    console.log(login + ' logged in successfully');
    this.authService.logIn({login, pass});
  }
  ngOnInit() {
  }

}
