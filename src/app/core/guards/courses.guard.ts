import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthorizationService } from '../services/authorization/authorization.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CoursesGuard implements CanActivate {
  constructor(private authService: AuthorizationService, private router: Router) {}
  canActivate(): Observable<boolean> {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
    return of(this.authService.isAuthenticated());
  }
}
