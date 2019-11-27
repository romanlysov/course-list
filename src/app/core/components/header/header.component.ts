import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { AuthorizationService } from '../../services/authorization/authorization.service';
import {Router} from '@angular/router';
import {AuthResponse} from '../../../shared/models/authorization.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() private user;
  @Output() private isAuth = new EventEmitter();

  public userName: string;
  constructor(private authService: AuthorizationService, private router: Router) { }

  ngOnInit() {
    this.authService.getUserInfo();
    if (this.authService.isAuthenticated()) {
      this.authService.getUserInfo().subscribe((res: AuthResponse) => {
        this.userName = res.email;
      });
    }
  }

  logOffHandler() {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }
}
