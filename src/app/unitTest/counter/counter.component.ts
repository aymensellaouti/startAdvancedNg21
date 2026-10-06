import { Component, input } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  public readonly startCount = input(0);

  public count = 0;

  public ngOnChanges(): void {
    this.count = this.startCount();
  }

  public increment(): void {
    this.count++;
  }

  public decrement(): void {
    this.count--;
  }
}
