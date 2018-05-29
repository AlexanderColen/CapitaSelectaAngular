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

  postExpenditure(description: string,
  					date: string,
  					spent: number,
  					type: string,
  					currency: string): Observable<any> {
    let formHeader = "application/x-www-form-urlencoded";

    const body = new HttpParams()
      .set('description', description)
      .set('date', date)
      .set('spent', spent.toString())
      .set('type', type)
      .set('currency', currency);

	return this.httpClient.post(this.URL + "new", 
                            body.toString(),
                            { headers: { 'Content-type':formHeader } }
                            );
  }

  deleteExpenditure(id: number) {
    let formHeader = "application/x-www-form-urlencoded";

    const body = new HttpParams()
      .set('id', id.toString());

  return this.httpClient.post(this.URL + "delete", 
                            body.toString(),
                            { headers: { 'Content-type':formHeader } }
                            );
  }
}