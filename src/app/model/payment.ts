import { Debt } from './Debt';

export class Payment {
    public id: number;
    public date: string;
    public spent: number;
    public currency: string;
    public debt: Debt;

    constructor(id: number,
                date: string,
                spent: number,
                currency: string) {
        this.id = id;
        this.date = date;
        this.spent = spent;
        this.currency = currency;
    }

    setDebt(debt: Debt) {
        this.debt = debt;
    }
}