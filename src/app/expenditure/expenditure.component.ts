import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http,Response } from '@angular/http';
import { ISubscription } from 'rxjs/Subscription';

import { ExpenditureService } from './expenditureService';

import { Expenditure } from '../model/Expenditure';

@Component({
  selector: 'app-expenditure',
  templateUrl: './expenditure.component.html',
  styleUrls: ['./expenditure.component.css']
})
export class ExpenditureComponent implements OnInit {

	private expenditures: Expenditure[];
	private expenditure: Expenditure;
	private totalSpent: number = 0;
	private totalIncome: number = 0;

  	constructor(private service : ExpenditureService) { }

  	ngOnInit() {
  		this.service.fetchAllExpenditures()
				.subscribe(res => { this.expenditures = res;
									console.log(res);
									this.calculateTotals(); });
  	}

  	onFetch(form: NgForm) {
		this.service.fetchExpenditure(form.value.id)
				.subscribe(res => { this.expenditure = res;
									console.log(res); });
	}

	calculateTotals() {
		for (let ex of this.expenditures) {
			this.totalSpent += ex.spent;
		}
	}
}