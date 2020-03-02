
import { AuthenticationService, LoginPayload, CanActivate } from './../shared/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

import { NgModule } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  
  input: LoginPayload = {
    email: '',
    password: ''
  }

  hello: CanActivate = {
    status: false
  }

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    
  }

  login() {
    if(this.input.email !== "" && this.input.password !== "" ){
      this.authService.authenticateUser(this.input);
      this.hello.status = true;
      if( this.hello.status === true){
        return true
      }
      this.router.navigate(['/profile']);
    }else {
      alert('Invalid username or password');
      if( this.hello.status !== true){
        return false;
      }
    }
    
  }
}
  // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTVkNDFjMmEyYzkzZDAwMzQ4YTY1ODYiLCJmaXJzdF9uYW1lIjoiaHV6YWlmYSIsImxhc3RfbmFtZSI6ImphdmFpZCIsInBhc3N3b3JkIjoiJDJhJDEwJDNPcHdMUHVoM1V2UUtZNXkuNlFYMS5Uek9CSVRObGlkdk1kdE1QWkk5YjJ1eWFwLmgxNUF5IiwiZW1haWwiOiJodXphaWZhQGdtYWlsLmNvbSIsImlhdCI6MTU4MzE2OTk4Nn0.AzAqULwkRpBzfl4wt10CWDgjuGwDDzUA_3HNptaL0v8"
   
  