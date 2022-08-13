import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-calculator-plate',
  templateUrl: './calculator-plate.component.html',
  styleUrls: ['./calculator-plate.component.css'],
})
export class CalculatorPlateComponent {
  checkoutForm = this.formBuilder.group({
    calculation: '',
  });
  constructor(private formBuilder: FormBuilder) {}

  onSubmit(): void {
    // Process checkout data here
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
