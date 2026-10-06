import { OnInit, input } from '@angular/core';
import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({ selector: '[appHighlight]' })
export class HighlightDirective implements OnInit {
  readonly in = input('yellow');
  readonly out = input('red');
  @HostBinding('style.backgroundColor') bgc = this.out();
  constructor(private element: ElementRef) {}
  ngOnInit() {
    this.bgc = this.out();
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.innerHTML = 'IN';
    this.bgc = this.in();
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.innerHTML = 'OUT';
    this.bgc = this.out();
  }
}
