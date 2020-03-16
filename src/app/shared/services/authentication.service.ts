import { AuthApiService } from './api/auth-api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



export interface LoginPayload { 
  email: string;
  password: string;
  status: boolean;
}
 

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService{

  
  private _headers = new HttpHeaders().set("Content-Type", "application/json");

  constructor(
    private http: HttpClient,
    private authApi: AuthApiService
  ) {}
    
  authenticateUser(payload: LoginPayload) {
    return this.http.post(this.authApi.mock_api , payload, { headers: this._headers })
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
      if (token){
        return true;
      } else {
      return false;
      }
}

userProfile(){
  return this.http.get("https://ahmad-api.herokuapp.com/me");
}

getToken(): any {
  return localStorage.getItem('token');
}
}



  
  
  
  
  
  
  
  
  
  
  