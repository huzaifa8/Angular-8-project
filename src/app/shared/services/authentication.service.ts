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
    private cahce: CacheService
  ) { }

  authenticateUser(payload: LoginPayload) {
    this.authApi.authenticate(payload).subscribe((response: AuthResponse) => {
      console.log(response[0].name);
      console.log(response);
      
      if (response[0].status == 'okay') {
        console.log("Cookie is not okay");
        localStorage.setItem('token', response[0].token);
       }
    }
    );
  }

}
