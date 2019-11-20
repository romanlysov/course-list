import {Component, EventEmitter, Input, Output} from '@angular/core';
import { AuthorizationService } from '../authorization.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() private user;
  @Output() private isAuth = new EventEmitter();

  constructor(private authService: AuthorizationService, private router: Router) { }

  logOffHandler() {
    this.authService.logOut();
    console.log('logged off');
    this.router.navigate(['/login']);
  }
}
