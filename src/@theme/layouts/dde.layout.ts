import { Component } from '@angular/core';

// TODO: move layouts into the framework
@Component({
  selector: 'app-dde-layout',
  styleUrls: ['./dde.layout.scss'],
  template: `
    <dde-layout>
      <app-dde-header fixed></app-dde-header>
    </dde-layout>
  `,
})
export class DDELayoutComponent {

  currentTheme: string;

  constructor() { }
}
