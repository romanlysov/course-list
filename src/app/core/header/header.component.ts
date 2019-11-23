import {Component, EventEmitter, Input, Output} from '@angular/core';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() private user;
  @Output() private isAuth = new EventEmitter();

  constructor(private authService: AuthorizationService) { }

  logOffHandler() {
    this.authService.logOut();
    console.log('logged off');
  }
}
