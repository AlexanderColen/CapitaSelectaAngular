import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ExpenditureService {
  URL = 'http://localhost:8080/expenditures/';

  constructor(protected httpClient: HttpClient) { }

  fetchExpenditure(id: string): Observable<any> {
    return this.httpClient.get(this.URL + id);
  }

  fetchAllExpenditures(): Observable<any> {
  	return this.httpClient.get(this.URL);
  }
}