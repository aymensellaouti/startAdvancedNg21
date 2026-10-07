import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { SecondComponent } from '../second.component';

@Component({
    selector: 'app-first',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [SecondComponent]
})
export class FirstComponent {
  name = 'aymen';
  message = signal('');
  isHidden = signal(false);
  changeMessage(newMessage: string) {
    this.message.set(newMessage);
  }
  showHide() {
    this.isHidden.update((isHidden) => !isHidden);
  }
  constructor() {
    /*     setInterval(() => {

    }, 1000); */
  }
}
