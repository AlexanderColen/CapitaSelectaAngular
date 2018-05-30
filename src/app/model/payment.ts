export class Payment {
    public id: number;
    public amount: number;
    public currency: string;

    constructor(id: number,
                amount: number,
                currency: string) {
        this.id = id;
        this.amount = amount;
        this.currency = currency;
    }
}