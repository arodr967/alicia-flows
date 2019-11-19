import { Component, OnInit } from '@angular/core';

// Create page component to be used in every page
@Component({
  selector: 'app-page',
  template: `
    <div class="page">
      <div class="header">
        <div class="title">
          <h1>today, is your lucky day</h1>
        </div>
        <div class="sub-title">
          <h3>
            you have stumbled upon
            <a href="">your <i>not-so-average</i> yoga teacher</a>
            website
            <ng-content></ng-content>
          </h3>
        </div>
      </div>

      <div class="content">
        <!--TODO: Get ideas as to what should be here.-->
      </div>
    </div>
  `,
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
