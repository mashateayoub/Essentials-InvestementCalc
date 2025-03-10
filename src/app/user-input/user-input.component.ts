import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInputModel } from './user-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  userData: UserInputModel = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 5,
    duration: 10,
  };

  @Output() calculate = new EventEmitter<UserInputModel>();

  onSubmit() {
    console.log(this.userData);
    this.calculate.emit(this.userData);
    
    this.resetForm();
  }

  resetForm() {
    this.userData = {
      initialInvestment: 0,
      annualInvestment: 0,
      expectedReturn: 5,
      duration: 10,
    };
  }
}
