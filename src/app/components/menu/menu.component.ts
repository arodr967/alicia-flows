import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
    <div class="menu">
      <div class="title">
        <h1>aliciaflows</h1>
        <h3>your personal yoga teacher</h3>
      </div>
      <div class="menu-items">
        <button mat-raised-button routerLink="/">Home</button>
        <button mat-raised-button routerLink="/about-me">
          About me
        </button>
        <button mat-raised-button routerLink="/classes">
          Classes
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
