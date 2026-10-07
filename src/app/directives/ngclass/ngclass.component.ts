import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { NgClass } from '@angular/common';
import { RainbowDirective } from '../rainbow.directive';
import { HighlightDirective } from '../highlight.directive';

@Component({
    selector: 'app-ngclass',
    templateUrl: './ngclass.component.html',
    styleUrls: ['./ngclass.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [NgClass, RainbowDirective, HighlightDirective]
})
export class NgclassComponent {
  isAllume = signal(false);
  interrupteur() {
    this.isAllume.update((isAllume) => !isAllume);
  }
}
