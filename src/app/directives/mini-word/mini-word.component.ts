import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-mini-word',
    templateUrl: './mini-word.component.html',
    styleUrls: ['./mini-word.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [NgStyle, FormsModule]
})
export class MiniWordComponent {
  color = signal('red');
  size = signal(75);
  font = signal('garamond');
}
