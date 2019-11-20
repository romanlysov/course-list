import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from '../core/authorization.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CoursesGuard implements CanActivate {
  constructor(private authService: AuthorizationService, private router: Router) {}
  canActivate(): Observable<boolean> | boolean {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
    return this.authService.isAuthenticated();
  }
}
