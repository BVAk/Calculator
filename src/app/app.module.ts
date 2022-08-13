import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { CalculatorPlateComponent } from './calculator-plate/calculator-plate.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, CalculatorPlateComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
