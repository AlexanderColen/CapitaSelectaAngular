import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http,Response } from '@angular/http';
import { ISubscription } from 'rxjs/Subscription';

import { DebtService } from '../service/debtService';

import { Debt } from '../model/Debt';
import { Payment } from '../model/Payment';

@Component({
  selector: 'app-debt',
  templateUrl: './debt.component.html',
  styleUrls: ['./debt.component.css']
})
export class DebtComponent implements OnInit {

	private debts: Debt[];
	private payments: Payment[];
	private cur: string;
	private totalDebtAmount: number = 0;
	private totalPaymentAmount: number = 0;
	private selectedDebt: number;
	private debtSelected: boolean = false;

	constructor(private debtService : DebtService) { }

	ngOnInit() {
  		this.debtService.fetchAllDebts()
				.subscribe(res => { this.debts = res;
									this.calculateTotalDebt();
									this.cur = res[0].currency; });

  		this.debtService.fetchAllPayments()
				.subscribe(res => { this.payments = res;
									this.calculateTotalPayment(); });
  	}

  	calculateTotalDebt() {
		this.totalDebtAmount = 0;
		
		for (let debt of this.debts) {
			this.totalDebtAmount += debt.amount;
		}
	}

  	calculateTotalPayment() {
		this.totalPaymentAmount = 0;
		
		for (let payment of this.payments) {
			this.totalPaymentAmount += payment.spent;
		}
	}

	removeDebt(id: number, outcome: boolean) {
		if (outcome) {
			for (let debt of this.debts) {
				if (debt.id == id) {
					this.totalDebtAmount -= debt.amount;
					let index = this.debts.indexOf(debt);
					this.debts.splice(index, 1);
				}
			}

			this.calculateTotalDebt();
		}
	}

	removePayment(id: number, outcome: boolean) {
		if (outcome) {
			for (let payment of this.payments) {
				if (payment.id == id) {
					this.totalPaymentAmount -= payment.spent;
					let index = this.payments.indexOf(payment);
					this.payments.splice(index, 1);
				}
			}

			this.calculateTotalPayment();
		}
	}

	onDeleteDebt(id: number) {
		this.debtService.deleteDebt(id)
				.subscribe((res: boolean) => { this.removeDebt(id, res); });
	}

	onDeletePayment(id: number) {
		this.debtService.deleteDebtPayment(id)
				.subscribe((res: boolean) => { this.removePayment(id, res); });
	}

	onDebtChange(id) {		
		this.debtSelected = true;
        this.selectedDebt = id;
    }

	onPostDebt(form: NgForm) {
		//TODO Fix currency.
		this.debtService.postDebt(form.value.description,
								form.value.date,
								form.value.interest,
								form.value.amount,
								form.value.type,
								'CAD')
				.subscribe(res => { this.debts.push(res);
									this.calculateTotalDebt(); });
		form.reset();
	}

	onPostPayment(form: NgForm) {
		this.debtService.postDebtPayment(form.value.date,
										form.value.spent,
										this.selectedDebt)
				.subscribe(res => { this.payments.push(res);
									this.calculateTotalPayment(); });
		form.reset();
	}
}