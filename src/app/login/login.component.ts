import { Router } from '@angular/router';
import { AuthguardService } from './../shared/services/authguard.service';
import { AuthenticationService, LoginPayload } from './../shared/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  

  
  input: LoginPayload = {
    email: '',
    password: '',
    status: null
  }

  

  constructor(
    private authService: AuthenticationService,
    private authGuardService: AuthguardService,
    private router: Router,
  ) { 
    
  }

  ngOnInit() {
    localStorage.clear();
  }

  login() {
    if(this.input.email !== "" && this.input.password !== "" ){
      this.authService.authenticateUser(this.input).subscribe((response: any) => {  
        if (response) { 
          console.log(response.token);
          localStorage.setItem('token', response.token);
        }
        
      }, error => {
        console.log(error.error);
      })
    } else {
      console.log("Invalid Credentials");
    }

    setTimeout(() => {
      this.authService.isAuthenticated();
      
      if(this.authGuardService.canActivate()){
        this.router.navigate(['profile']);
        this.authService.userProfile().subscribe((response: any) => {
          console.log(response);
        })
      }
      
    }, 2000);
  }

  
}

   
  