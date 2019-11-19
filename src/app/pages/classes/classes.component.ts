import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-classes',
  template: `
    <div class="classes">
      <h3>Group classes</h3>
      <h3>Personal classes</h3>
    </div>
  `,
  styleUrls: ['./classes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClassesComponent implements OnInit {
// provide prices and packages and discounts
  constructor() { }

  ngOnInit() {
  }

}
