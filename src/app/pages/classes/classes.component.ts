import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-classes',
  template: `
    <p>
      classes works!
    </p>
  `,
  styleUrls: ['./classes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClassesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
