import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http,Response } from '@angular/http';
import { ISubscription } from 'rxjs/Subscription';

import { DebtService } from '../service/debtService';

import { Debt } from '../model/Debt';

@Component({
  selector: 'app-debt',
  templateUrl: './debt.component.html',
  styleUrls: ['./debt.component.css']
})
export class DebtComponent implements OnInit {

	private debts: Debt[];
	private cur: string;

	constructor(private service : DebtService) { }

	ngOnInit() {
  		this.service.fetchAllDebts()
				.subscribe(res => { this.debts = res;
									console.log(res);
									this.cur = res[0].currency; });
  }
}