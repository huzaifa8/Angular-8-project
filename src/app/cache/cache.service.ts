import { AuthApiService } from './../shared/services/api/auth-api.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, publishReplay, refCount } from 'rxjs/operators';

export interface Config {
  componentType: string, 
  show: Boolean
}

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  api_link: string;
  configs: Observable<Config[]>;

  constructor(private httpClient: HttpClient, private api: AuthApiService) {
 this.api_link = api.mock_api;
   }

  // Get configs from server | HTTP GET
  getConfigs(): Observable<Config[]> {

      // Cache it once if configs value is false
      if (!this.configs) {
          this.configs = this.httpClient.get(this.api_link).pipe(
              map(data => data['configs']),
              publishReplay(1), // this tells Rx to cache the latest emitted
              refCount() // and this tells Rx to keep the Observable alive as long as there are any Subscribers
          );
        }
        console.log("cache succes");
        return this.configs;
        
        
    }

    // Clear configs
    clearCache() {
        this.configs = null;
    }
}
console.log("cache succes");