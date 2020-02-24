import { AuthenticationService, LoginPayload } from './../shared/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  input: LoginPayload = {
    password: '',
    username: ''
  }

  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    
  }

  login() {
      this.authService.authenticateUser(this.input);
    // if (this.input.password === '123') {
    //   this.authService.authenticateUser(this.input);
    //   console.log(this.input.password);
      
    // } else {
    //   console.log('invalid credentials');
    // }
  }
  
  
}
