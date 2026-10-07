import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-second',
    template: `
    <p>
      second works!
    </p>
  `,
    changeDetection: ChangeDetectionStrategy.Eager,
    styles: []
})
export class SecondComponent {

}
