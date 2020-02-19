import { AuthenticationService, LoginPayload } from './../shared/services/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
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
    if (this.input.password === '123') {
      this.authService.authenticateUser(this.input)
    } else {
      console.log('invalid credentials');
    }
  }
}
