import { Component, signal, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-color-ut',
    templateUrl: './color-ut.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./color-ut.component.css']
})
export class ColorUtComponent {
  divColor = signal('red');

  /**
   * It change the div backgound color
   *
   * @param newColor: string
   */
  changeColor(newColor: string) {
    this.divColor.set(newColor);
  }
}
