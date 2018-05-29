import { Expenditure } from './Expenditure';

export class Debt {
	public id: number;
	public description: string;
	public type: string;
	public interest: number;
	public amount: number;
    public currency: string;
    public payments: Expenditure[];

    constructor(id: number,
    			description: string, 
    			type: string,
                interest: number,
    			amount: number,
    			currency: string) {
    	this.id = id;
    	this.description = description;
    	this.type = type;
        this.interest = interest;
    	this.amount = amount;
    	this.currency = currency;
    }

    setPayments(payments: Expenditure[]) {
        this.payments = payments;
    }
}