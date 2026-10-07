import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { NgStyle } from '@angular/common';
import { DefaultImagePipe } from '../pipes/default-image.pipe';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [NgStyle, DefaultImagePipe]
})
export class ItemComponent {
  readonly cv = input<Cv | null>(null);
  readonly size = input(50);
  constructor(private cvService: CvService) {}
  readonly selectCv = output<Cv>(); 

  onSelectCv() {
    const cv = this.cv();
    if (cv) this.selectCv.emit(cv);
  }
}
