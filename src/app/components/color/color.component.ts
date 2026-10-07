import { Component, OnInit, input, signal, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-color",
    templateUrl: "./color.component.html",
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ["./color.component.css"]
})
export class ColorComponent implements OnInit {
  readonly defaultColor = input("red");

  /**
   *
   * The color representing the Div
   */
  divColor = signal("");

  /**
   * It change the div backgound color
   *
   * @param newColor: string
   */

  constructor(private activatedRoute: ActivatedRoute) {
    console.log("In constructor", this.defaultColor());
  }

  ngOnInit(): void {
    const defaultColor = this.defaultColor();
    console.log("In ngOnInit", defaultColor);
    this.divColor.set(defaultColor);
  }

  changeColor(newColor: string) {
    this.divColor.set(newColor);
  }
}
