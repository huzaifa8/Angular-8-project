import { Injectable } from '@angular/core';


export interface SignUpPayload {
  firstName: string;
  lastName:string;
  email: string;
  password: string;
  dateOfBirth: string;
}

@Injectable({
  providedIn: 'root'
})

export class RegistrationService {
  constructor() { 
  }
registerUser(userData: SignUpPayload){
  
}
  
}
