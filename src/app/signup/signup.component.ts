import { RegistrationService, SignUpPayload } from '../shared/services/registration.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent{


inputUReg: SignUpPayload = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  dateOfBirth: ''
}
  constructor(private userdata: RegistrationService
    ) {
   }
  ngOnInit() {
   
  }

  reguser(){
  
    
  }
}
