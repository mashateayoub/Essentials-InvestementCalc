import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { InvestmentsResultsModel } from './investment-results/investments.results.model';
import { UserInputComponent } from './user-input/user-input.component';
import { UserInputModel } from './user-input/user-input.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {
  results = signal<InvestmentsResultsModel[] | undefined>(undefined);
  
  
  
  // : InvestmentsResultsModel[] = [];

  userData: UserInputModel = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  };

  calculateResults(userData: UserInputModel) {
    this.userData = userData;
    const newResults: InvestmentsResultsModel[] = [];
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
      newResults.push({
        valueEndOfYear,
        yearlyInterest,
        totalInterest,
        investedCapital,
      });
    }
    this.results.set(newResults);
  }
}
