import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../core/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public login: string;
  public password: string;
  constructor(private authService: AuthorizationService, private router: Router) { }
  loginHandler(login, pass) {
    console.log(login + ' logged in successfully');
    this.authService.logIn({login, pass});
    this.router.navigate(['/courses']);
  }
  ngOnInit() {
  }

}
