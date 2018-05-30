import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DebtService {
  URL = 'http://localhost:8080/debts/';

  constructor(protected httpClient: HttpClient) { }

  fetchDebt(id: string): Observable<any> {
    return this.httpClient.get(this.URL + id);
  }

  fetchAllDebts(): Observable<any> {
  	return this.httpClient.get(this.URL);
  }

  postDebt(description: string,
  					date: string,
  					amount: number,
  					type: string,
  					currency: string): Observable<any> {
    let formHeader = "application/x-www-form-urlencoded";

    const body = new HttpParams()
      .set('description', description)
      .set('date', date)
      .set('amount', amount.toString())
      .set('type', type)
      .set('currency', currency);

    return this.httpClient.post(this.URL + "new", 
                            body.toString(),
                            { headers: { 'Content-type':formHeader } }
                            );
  }

  postDebtPayment(date: string,
                  amount: number,
                  debtID: number): Observable<any> {
    let formHeader = "application/x-www-form-urlencoded";

    const body = new HttpParams()
      .set('id', debtID.toString())
      .set('date', date)
      .set('amount', amount.toString());

    return this.httpClient.post(this.URL + debtID + "/payment", 
                            body.toString(),
                            { headers: { 'Content-type':formHeader } }
                            );
  }

  deleteDebt(id: number) {
    let formHeader = "application/x-www-form-urlencoded";

    const body = new HttpParams()
      .set('id', id.toString());

  return this.httpClient.post(this.URL + "delete", 
                            body.toString(),
                            { headers: { 'Content-type':formHeader } }
                            );
  }
}