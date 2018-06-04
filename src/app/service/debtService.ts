import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DebtService {
  URL = 'http://localhost:8091/debts/';

  constructor(protected httpClient: HttpClient) { }

  fetchAllDebts(): Observable<any> {
    return this.httpClient.get(this.URL);
  }

  fetchAllPayments(): Observable<any> {
    return this.httpClient.get(this.URL + 'payments');
  }

  postDebt(description: string,
  					date: string,
            interest: number,
  					amount: number,
  					type: string,
  					currency: string): Observable<any> {
    let formHeader = "application/x-www-form-urlencoded";

    const body = new HttpParams()
      .set('description', description)
      .set('date', date)
      .set('interest', interest.toString())
      .set('amount', amount.toString())
      .set('type', type)
      .set('currency', currency);

    return this.httpClient.post(this.URL + "new", 
                            body.toString(),
                            { headers: { 'Content-type':formHeader } }
                            );
  }

  deleteDebt(id: number): Observable<any> {
    let formHeader = "application/x-www-form-urlencoded";

    const body = new HttpParams()
      .set('id', id.toString());

  return this.httpClient.post(this.URL + "delete", 
                            body.toString(),
                            { headers: { 'Content-type':formHeader } }
                            );
  }

  postDebtPayment(date: string,
                  spent: number,
                  debtID: number): Observable<any> {
    let formHeader = "application/x-www-form-urlencoded";

    const body = new HttpParams()
      .set('date', date)
      .set('spent', spent.toString())
      .set('id', debtID.toString());

    return this.httpClient.post(this.URL + debtID + "/payments/new/yes", 
                            body.toString(),
                            { headers: { 'Content-type':formHeader } }
                            );
  }

  deleteDebtPayment(id: number): Observable<any> {
    let formHeader = "application/x-www-form-urlencoded";

    const body = new HttpParams()
      .set('id', id.toString());

  return this.httpClient.post(this.URL + "payments/delete", 
                            body.toString(),
                            { headers: { 'Content-type':formHeader } }
                            );
  }
}