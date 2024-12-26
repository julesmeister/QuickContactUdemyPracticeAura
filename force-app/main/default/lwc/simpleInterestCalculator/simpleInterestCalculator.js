// Note: starting with LWC 1.11, all fields are reactive so track decorator is no longer needed
import { LightningElement } from 'lwc';

export default class SimpleInterestCalculator extends LightningElement {
    principalAmount = 0;
    interestRate = 0;
    timePeriod = 0;
    simpleInterest = '';
    
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