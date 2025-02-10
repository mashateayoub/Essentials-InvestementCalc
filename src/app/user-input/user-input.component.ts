import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  userData: {
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
  } = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  };

  @Output() calculate = new EventEmitter<{
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
  }>();

  onSubmit() {
    console.log(this.userData);
    this.calculate.emit(this.userData);
  }
}
