import { LightningElement, track } from 'lwc';

export default class SimpleInterestCalculator extends LightningElement {
    @track principalAmount = 0;
    @track interestRate = 0;
    @track timePeriod = 0;
    @track simpleInterest = '';
    
    handlePrincipalAmountChange(event) {
        this.principalAmount = event.target.value;
    }
    
    handleInterestRateChange(event) {
        this.interestRate = event.target.value;
    }
    
    handleTimePeriodChange(event) {
        this.timePeriod = event.target.value;
    }
    
    calculateSIHandler() {
        this.simpleInterest = `The simple interest is $${(this.principalAmount * this.interestRate * this.timePeriod) / 100} for principal amount of $${this.principalAmount}, interest rate of ${this.interestRate}% and time period of ${this.timePeriod} years.`;
    }
}