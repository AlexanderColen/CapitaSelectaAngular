import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http,Response } from '@angular/http';
import { ISubscription } from 'rxjs/Subscription';

import { DebtService } from '../service/debtService';
import { ExpenditureService } from '../service/expenditureService';

import { Debt } from '../model/Debt';
import { Expenditure } from '../model/Expenditure';

@Component({
  selector: 'app-expenditure',
  templateUrl: './expenditure.component.html',
  styleUrls: ['./expenditure.component.css']
})
export class ExpenditureComponent implements OnInit {

	private debts: Debt[];
	private expenditures: Expenditure[];
	private expenditure: Expenditure;
	private cur: string;
	private totalSpent: number = 0;
	private isDebtPayment: boolean  = false;
	private selectedDebt: number;

  	constructor(private expenditureService : ExpenditureService,
  				private debtService: DebtService) { }

  	ngOnInit() {
  		this.expenditureService.fetchAllExpenditures()
				.subscribe(res => { this.expenditures = res;
									this.calculateTotals();
									this.cur = res[0].currency; });

		this.debtService.fetchAllDebts()
				.subscribe(res => { this.debts = res;
									this.selectedDebt = res[0].id; });
  	}

	calculateTotals() {
		this.totalSpent = 0;
		
		for (let ex of this.expenditures) {
			this.totalSpent += ex.spent;
		}
	}

	removeExpenditure(id: number, outcome: boolean) {
		if (outcome) {
			for (let ex of this.expenditures) {
				if (ex.id == id) {
					this.totalSpent -= ex.spent;
					let index = this.expenditures.indexOf(ex);
					this.expenditures.splice(index, 1);
				}
			}

			this.calculateTotals();
		}
	}

  	onFetch(form: NgForm) {
  		if (form.value.id != '') {
			this.expenditureService.fetchExpenditure(form.value.id)
					.subscribe(res => { this.expenditure = res; });
		} else {
			this.expenditure = null;
		}
	}

	onPost(form: NgForm) {
		let debtID = 0;

		if (this.isDebtPayment) {
			debtID = this.selectedDebt;
		}

		//TODO Fix currency with select box or something.
		this.expenditureService.postExpenditure(form.value.description,
									form.value.date,
									form.value.spent,
									form.value.type,
									"CAD",
									debtID)
				.subscribe(res => { this.expenditures.push(res);
									this.calculateTotals(); });
		form.reset();
	}

	onDebtChange(id) {
        this.selectedDebt = id;
    }

	onDelete(id: number) {
		this.expenditureService.deleteExpenditure(id)
				.subscribe((res: boolean) => { this.removeExpenditure(id, res); });
	}
}