import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req, next) {
    const token = localStorage.getItem('token');
    const authReq = token
      ? req.clone({headers: req.headers.set('Authorization-token', token)})
      : req;
    return next.handle(authReq);
  }
}
