export class Expenditure {
    constructor(private id: number, 
    			private date: string, 
    			private description: string, 
    			private type: string,
    			private spent: number,
    			private currency: string) { }
}