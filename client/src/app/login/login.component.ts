import { Component, OnInit } from '@angular/core';
import {LoginService} from "./login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  wrongCredentials: boolean;

  constructor(private service: LoginService, private router: Router) { }

  ngOnInit() {

    this.wrongCredentials = false;
  }

  login(){

    this.service.login(this.username,this.password).then(result => {

      if(result){
        this.wrongCredentials = false;
        this.router.navigate(['/owned']);
      }
      else this.wrongCredentials = true;
    })
  }

  register(){

    this.service.register(this.username, this.password).then(result => {

      if(result){
        this.wrongCredentials = false;
        this.router.navigate(['/owned']);
      }
      else this.wrongCredentials = true;
    })
  }

}
