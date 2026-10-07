import { Component, output, ChangeDetectionStrategy } from '@angular/core';
@Component({
    selector: 'app-fils',
    templateUrl: './fils.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./fils.component.css']
})
export class FilsComponent {
  /**
   *
   * Create event
   */
  readonly sendMessageToDad = output<string>();

  /**
   * Method that emits the data to dad
   */
  sendMessage(): void {
    this.sendMessageToDad.emit('cc papa');
  }
}