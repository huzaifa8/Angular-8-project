import { RegistrationService, SignUpPayload } from './registration.service';
import { CacheService } from './../../cache/cache.service';
import { AuthApiService } from './api/auth-api.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface LoginPayload { 
  username: string;
  password: string; 
}

export interface AuthResponse {
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private authApi: AuthApiService,
    private cahce: CacheService,
    private userData:RegistrationService
  ) { }

  authenticateUser(payload?: LoginPayload, userPayload?: SignUpPayload){
    if (payload.username === userPayload.username && payload.password === userPayload.password){
       alert("Success")
    }
  }

  // authenticateUser(payload: LoginPayload) {
  //   this.authApi.authenticate(payload).subscribe((response: AuthResponse) => {
  //     console.log(response[0].name);
  //     console.log(response);
      
  //     if (response[0].status == 'okay') {
  //       console.log("Cookie okay");
  //       localStorage.setItem('token', response[0].token);
  //      }
  //   }
  //   );
  // }

}
