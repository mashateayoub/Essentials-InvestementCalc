import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { UserInputComponent } from './user-input/user-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {
  results: {
    valueEndOfYear: number;
    yearlyInterest: number;
    totalInterest: number;
    investedCapital: number;
  }[] = [];

  userData = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  };

  calculateResults(userData: any) {
    this.userData = userData;
    this.results = [];
    let valueEndOfYear = this.userData.initialInvestment;
    let yearlyInterest = 0;
    let totalInterest = 0;
    let investedCapital = this.userData.initialInvestment;
    for (let i = 0; i < this.userData.duration; i++) {
      yearlyInterest = (valueEndOfYear * this.userData.expectedReturn) / 100;
      totalInterest += yearlyInterest;
      investedCapital += this.userData.annualInvestment;
      valueEndOfYear =
        valueEndOfYear + yearlyInterest + this.userData.annualInvestment;
      this.results.push({
        valueEndOfYear,
        yearlyInterest,
        totalInterest,
        investedCapital,
      });
    }
  }
}
