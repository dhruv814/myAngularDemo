import { Injectable } from '@angular/core';
import { fail } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn : boolean;
  constructor() { }

  setLogin(isLogged){
    this.isLoggedIn = isLogged;
  }
}
