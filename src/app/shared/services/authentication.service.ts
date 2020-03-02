import { AuthApiService } from './api/auth-api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface LoginPayload { 
  email: string;
  password: string; 
}

export interface AuthResponse {
}

export interface CanActivate{
status: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService{

  constructor(
    private http: HttpClient,
    private authApi: AuthApiService
  ) { }

  
  authenticateUser(payload: LoginPayload, activate: CanActivate) {
    const promise = new Promise((resolve, reject) => {
      const headers = new HttpHeaders().set("Content-Type", "application/json");
    const body = {
      "email":"" + payload.email,
	    "password":"" + payload.password
    }
    this.http.post(this.authApi.mock_api , body, { headers: headers }).toPromise().then((response: any) => {
      if (response !== ''){
        localStorage.setItem('token', "" + response.token);
        activate.status = true;
      }
    

    }).catch((response: any) => {
      console.log(response);
      activate.status = false;
    });
    }); 
    }
    // canActivate(){
    //  var a = localStorage.getItem('token');
    //   console.log(a);
    // }
  }

  // const headers = new HttpHeaders().set("Content-Type", "application/json");
  //   const body = {
  //     "email":"" + payload.email,
	//     "password":"" + payload.password
  //   }
  //   this.http.post(this.authApi.mock_api , body, { headers: headers }).subscribe((response: AuthResponse) =>{
  //   if (response !== '') {
  //     console.log(response);
  //       localStorage.setItem('token', "" + response);
  //      }
  //   });
      
      


  

 


