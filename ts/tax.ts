export class taxCalculation {
    static tax: number = 0.08;
    static price: number = 1000;

    static print():number{
        let priceWithTax = this.price + this.price * taxCalculation.tax;
        return priceWithTax;
    }
}