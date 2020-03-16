import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(
    private authentication: AuthenticationService,
    private router: Router
    ) { 
  }
  
  canActivate(): boolean {
    if (!this.authentication.isAuthenticated()) {
      console.log("No token exists in cache");
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
      
  
