import { AuthApiService } from './api/auth-api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  constructor(private http: HttpClient,
   private signUpApi: AuthApiService) { 
  }
registerUser(userData: SignUpPayload){
let firstName = firstNameF1(userData);
let lastName = lastNameF1(userData);
let email = emailF1(userData);
let password = passwordF1(userData);
let dateOfBirth = dobF1(userData);
if (firstName && lastName && email && password && dateOfBirth){
const promise = new Promise((resolve,reject) => {
  const headers = new HttpHeaders().set("Content-Type", "application/json");
  const body = {
    "email":"" + userData.email,
    "password":"" + userData.password,
    "first_name":"" + userData.firstName,
    "last_name":"" + userData.lastName
  }
  this.http.post(this.signUpApi.mock_api_signUp , body, { headers: headers }).toPromise().then((response:any) => {
     console.log(response.token);
  }).catch((response:any) => {
    console.log(response.error);
  });
});
}else
  console.log("Wrong");
  console.log(firstName + " " + lastName + " " + email + " " + password + " " + dateOfBirth); 
}
}

function firstNameF1(userData) {
  let regAlp = /^[A-Za-z]+$/;
  if (userData.firstName === "") {
      return false;
  } else if (regAlp.test(userData.firstName) === false) {
      return false;
  } else if (regAlp.test(userData.firstName) === true) {
      return true;
  }
}
function lastNameF1(userData) {
  let regAlp = /^[A-Za-z]+$/;
  if (userData.lastName === "") {
      return false;
  } else if (regAlp.test(userData.lastName) === false) {
      return false;
  } else if (regAlp.test(userData.lastName) === true) {
      return true;
  }
}
function emailF1(userData) {
  let re1 = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re1.test(userData.email) == true) {
      return true;
  } else if (re1.test(userData.email) == false && userData.email != "") {
      return false;
  } else if (userData.email == "") {
      return false;
  }
}
function passwordF1(userData) {
  let reg = /^(?=.{8,})/;
  if (reg.test(userData.password) == true && userData.password != "") {
      return true;
  } else if (userData.password == "") {
      return false;
  } else if (reg.test(userData.password) == false && userData.password != "") {
      return false;
  }
}
function dobF1(userData) {
let dob = userData.dateOfBirth;
console.log(dob);
dob = dob.split("-", 3);
let year = parseInt(dob[0]);
let month = parseInt(dob[1]);
let day = parseInt(dob[2]);
let today = new Date();
let currentMonth = today.getMonth() + 1;
var age: number = today.getFullYear() - year;
var b = ageCal(age, month, currentMonth, day, today);
if (userData.dateOfBirth == "") {
  return false;
} else if (userData.dateOfBirth != "" && b >= 18) {
     return true;
    } else if (userData.dateOfBirth != "" && b < 18){
    return false;
  }
} 
function ageCal(ageCal1, monthCal, currentMonthCal, dayCal, todayCal)
  {
  if (currentMonthCal < monthCal || (currentMonthCal == monthCal && todayCal.getDate() < dayCal)) {
    ageCal1--;
  }
  return ageCal1;
  }

  
  // const headers = new HttpHeaders().set("Content-Type", "application/json");
  // const body = {
  //   "email":"" + userData.email,
  //   "password":"" + userData.password,
  //   "first_name":"" + userData.firstName,
  //   "last_name":"" + userData.lastName
  // }
  // this.http.post(this.signUpApi.mock_api_signUp , body, { headers: headers }).subscribe((response: tokenResponse) =>{
  // console.log(response);
  // });
