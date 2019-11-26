import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject
} from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-rsvp-modal",
  template: `
    <h1 mat-dialog-title>Reserve your spot</h1>
    <div mat-dialog-content>
      <mat-form-field>
        <input matInput placeholder="Name" />
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-raised-button (click)="submit()">Submit</button>
    </div>
  `,
  styleUrls: ["./rsvp-modal.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RsvpModalComponent {
  constructor(
    public dialogRef: MatDialogRef<RsvpModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  submit() {
    // Save name on DB
    this.dialogRef.close();
  }
}
