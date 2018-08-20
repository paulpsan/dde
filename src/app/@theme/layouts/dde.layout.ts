import { Component } from '@angular/core';

// TODO: move layouts into the framework
@Component({
  selector: 'app-dde-layout',
  styleUrls: ['./dde.layout.scss'],
  template: `
    <app-dde-header fixed></app-dde-header>
    <ng-content select="router-outlet"></ng-content>
  `,
})
export class DDELayoutComponent {

  currentTheme: string;

  constructor() { }
}
