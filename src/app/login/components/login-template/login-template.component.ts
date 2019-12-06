import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthorizationService } from '../../../core/services/authorization/authorization.service';
import { AuthResponse } from '../../../shared/models/authorization.model';

@Component({
  selector: 'app-login',
  templateUrl: './login-template.component.html',
  styleUrls: ['./login-template.component.scss']
})
export class LoginComponent implements OnInit {
  public login: string;
  public password: string;
  public authError: boolean;
  constructor(private authService: AuthorizationService, private router: Router) { }

  loginHandler(login, pass) {
    this.authService.logIn({login, pass}).subscribe((res: AuthResponse) => {
      this.authService.setUserToken(res.idToken);
      this.router.navigate(['/courses']);
    }, (error: HttpErrorResponse) => {
      this.authService.removeUserToken();
      console.log(error);
      this.authError = true;
    });
  }
  ngOnInit() {
  }

}
