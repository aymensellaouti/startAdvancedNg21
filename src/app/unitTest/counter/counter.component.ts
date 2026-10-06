import { Component, input, signal } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  public readonly startCount = input(0);

  public count = signal(0);

  public ngOnChanges(): void {
    this.count.set(this.startCount());
  }

  public increment(): void {
    this.count.update((count) => count + 1);
  }

  public decrement(): void {
    this.count.update((count) => count - 1);
  }
}
