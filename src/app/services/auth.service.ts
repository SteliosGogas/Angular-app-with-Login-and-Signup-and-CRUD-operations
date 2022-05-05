import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(){
    return localStorage.getItem('token');
  }

  isAdmin(){
    return localStorage.getItem('token') === "Admin Connected"
  }
}
