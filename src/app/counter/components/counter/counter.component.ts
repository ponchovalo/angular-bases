import { Component } from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `

      <h3>Counter: {{counter}}</h3>
      <button (click)="increseBy(1)">+1</button>
      <button (click)="reset()">Reset</button>
      <button (click)="increseBy(-1)">-1</button>

  `

})
export class CounterComponent {

  public counter: number = 10;

  increseBy(value: number): void {
    this.counter += value;
  }

  reset(): void {
    this.counter = 10;
  }

}
