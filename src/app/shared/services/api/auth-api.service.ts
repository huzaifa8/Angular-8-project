import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginPayload } from '../authentication.service';



@Injectable({
  providedIn: 'root'
})


export class AuthApiService {

  private loginAPI: string = '';
  private signUpApi: string = '';

  constructor(
    private http: HttpClient
  ) {
    if (environment.mocking) {
      this.loginAPI = "https://ahmad-api.herokuapp.com/login";
      this.signUpApi = "https://ahmad-api.herokuapp.com/signup";
    } 
  }

 public get mock_api() : string {
   return this.loginAPI;
 }
 public get mock_api_signUp(): string {
   return this.signUpApi
 }
 
  
}
