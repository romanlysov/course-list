import { Injectable } from '@angular/core';
import uuidv4 from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() { }

  logIn(userInfo) {
    const storage = localStorage;
    const token = uuidv4();
    const user = JSON.stringify(userInfo);
    storage.setItem('user', user);
    storage.setItem('token', token);
  }

  logOut() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

  isAuthenticated() {
    return !!localStorage.getItem('token');
  }

  getUserInfo() {
    const user = localStorage.getItem('user');
    return JSON.parse(user).login;
  }
}
