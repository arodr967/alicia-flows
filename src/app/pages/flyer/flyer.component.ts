import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RsvpModalComponent } from "./rsvp-modal/rsvp-modal.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-flyer",
  template: `
    <div class="app-flyer">
      <p><i>free</i></p>
      <h1>Sunset Yoga</h1>
      <h3>
        with
        <a href="https://www.instagram.com/aliciaflows" target="_blank">
          @aliciaflows
        </a>
      </h3>

      <br />
      <br />
      <br />

      <h5>November 30th 2019</h5>
      <h2>Sunday at 5:00 PM</h2>
      <h4>At The Plaza Pool</h4>

      <br />
      <br />
      <br />

      <div>10 spots available</div>

      <br />
      <br />

      <button mat-raised-button (click)="onClick()">Reserve your spot</button>
    </div>
  `,
  styleUrls: ["./flyer.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlyerComponent {
  // TODO: get dynamic date using moment
  // TODO: add css transitions/animations
  constructor(public dialog: MatDialog) {}

  onClick() {
    this.dialog.open(RsvpModalComponent, {
      width: "250px",
      data: {}
    });
  }
}
