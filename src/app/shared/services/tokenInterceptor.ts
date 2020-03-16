import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class TokenInterceptor implements HttpInterceptor{
constructor(private auth: AuthenticationService){

}


intercept(request: HttpRequest<any>, next: HttpHandler):
Observable<HttpEvent<any>>  {

  
request = request.clone({
        setHeaders: {
          auth: this.auth.getToken()
        }
      });
  
    
      console.table(request);
      return next.handle(request);
    }
}
