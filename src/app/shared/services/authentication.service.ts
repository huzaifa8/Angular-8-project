import { AuthApiService } from './api/auth-api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { tokenName } from '@angular/compiler';
import { Token } from '@angular/compiler/src/ml_parser/lexer';


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

  getToken(): string {
    return localStorage.getItem('token') || '';
  }

  constructor(
    private http: HttpClient,
    private authApi: AuthApiService
  ) {}
    
  authenticateUser(payload: LoginPayload) {
    return this.http.post(this.authApi.mock_api , payload, { headers: this._headers })
  }
}



  
  
  
  
  
  
  
  
  
  
  