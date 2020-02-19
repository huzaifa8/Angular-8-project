import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginPayload, AuthResponse } from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  private loginAPI: string = '';

  constructor(
    private http: HttpClient
  ) {
    if (environment.mocking) {
      this.loginAPI = 'http://localhost:3000/api/login_info';
    } 
  }

  authenticate(payload?: LoginPayload) {
    return this.http.get<AuthResponse>(this.loginAPI);
  }
 
 public get mock_api() : string {
   return this.loginAPI;
 }
 
  
}
