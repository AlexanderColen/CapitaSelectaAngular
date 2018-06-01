import { Payment } from './Payment';

export class Debt {
	public id: number;
    public date: string;
	public description: string;
	public type: string;
	public interest: number;
	public amount: number;
    public currency: string;
    public payments: Payment[];

    constructor(id: number,
                date: string;
    			description: string, 
    			type: string,
                interest: number,
    			amount: number,
    			currency: string) {
    	this.id = id;
        this.date = date;
    	this.description = description;
    	this.type = type;
        this.interest = interest;
    	this.amount = amount;
    	this.currency = currency;
    }

    setPayments(payments: Payment[]) {
        this.payments = payments;
    }
}