import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GreetingService {
  URL = 'http://localhost:8080/greeting/';

  constructor(protected httpClient: HttpClient) { }

  Greet(name: string): Observable<any> {

    return this.httpClient.get(this.URL + name);
  
  }
}