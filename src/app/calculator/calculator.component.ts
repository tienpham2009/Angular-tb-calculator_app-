import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  number1: number = 0;
  number2: number = 0;
  operator: any;
  result: number = 0;

  constructor() {}

  ngOnInit(): void {}

  total(value: string) {
    switch (value) {
      case '+':
        this.result = this.number1 + this.number2;
        break;
      case "-":
        this.result = this.number1 - this.number2;
        break;
      case "*":
        this.result = this.number1 * this.number2;
        break;
      case "/":
        this.result = this.number1 / this.number2;
        break;
    }
  }
}
