import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import * as sha from 'js-sha256'
import {environment} from "../../environments/environment";
import {CanActivate} from "@angular/router";

@Injectable()
export class LoginService implements CanActivate {

  logged: boolean;

  constructor(private http: Http) {

    this.logged = false;
  }

  login(username: string, password: string): Promise<boolean> {

    return this.request('login')(username, password);

  }

  register(username: string, password: string): Promise<boolean> {

    return this.request('register')(username, password);
  }

  request(type: string){

    return (username: string, password: string) => {

      let pwdHash = sha.sha256(password);

      return new Promise<boolean>(resolve => {

        this.http.post(environment.apiurl + '/' + type,
          {username : username, password: pwdHash}).subscribe(response => {

          let result = response.json().status === 'success';
          this.logged = result;
          localStorage.setItem('token', response.json().content);
          resolve(result);
        })
      });

    }
  }

  canActivate(){

    return this.logged;
  }

}
