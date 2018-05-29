export class Expenditure {
	public id: number;
	public date: string;
	public description: string;
	public type: string;
	public spent: number;
	public currency: string;
    public debtID: number;

    constructor(id: number, 
    			date: string, 
    			description: string, 
    			type: string,
    			spent: number,
    			currency: string,
                debtID: number) {
    	this.id = id;
    	this.date = date;
    	this.description = description;
    	this.type = type;
    	this.spent = spent;
    	this.currency = currency;
        this.debtID  = debtID;
    }
}