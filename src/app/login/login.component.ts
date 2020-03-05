
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
    email: '',
    password: '',
    status: null
  }

  

  constructor(
    private authService: AuthenticationService,
  ) { 
    
  }

  ngOnInit() {
    localStorage.clear();
    console.log(this.authService.getToken());
  }

  login() {
    if(this.input.email !== "" && this.input.password !== "" ){
      this.authService.authenticateUser(this.input).subscribe((response: any) => {  
        console.log(response);
        if (response.token) { 
          localStorage.setItem('token', response['token']);
        }
        
      }, error => {
        console.log(error.error);
      })
    } else {
      console.log("Invalid Credentials");
    }

    setTimeout(() => {
      console.log(this.authService.getToken());
    }, 2000);
  }
}
  // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTVkNDFjMmEyYzkzZDAwMzQ4YTY1ODYiLCJmaXJzdF9uYW1lIjoiaHV6YWlmYSIsImxhc3RfbmFtZSI6ImphdmFpZCIsInBhc3N3b3JkIjoiJDJhJDEwJDNPcHdMUHVoM1V2UUtZNXkuNlFYMS5Uek9CSVRObGlkdk1kdE1QWkk5YjJ1eWFwLmgxNUF5IiwiZW1haWwiOiJodXphaWZhQGdtYWlsLmNvbSIsImlhdCI6MTU4MzE2OTk4Nn0.AzAqULwkRpBzfl4wt10CWDgjuGwDDzUA_3HNptaL0v8"
   
  