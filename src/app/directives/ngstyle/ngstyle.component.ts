import { Component, input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-ngstyle',
    templateUrl: './ngstyle.component.html',
    styleUrls: ['./ngstyle.component.css'],
    imports: [NgStyle]
})
export class NgstyleComponent {
  readonly color = input('lightgreen');
}
