import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import {
  FooterComponent,
  HeaderComponent
} from './components';
import {
  DDELayoutComponent
} from './layouts/dde.layout';

const BASE_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  NgbModalModule
];

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  DDELayoutComponent
];

@NgModule({
  imports: [
    ...BASE_MODULES
  ],
  exports: [...BASE_MODULES, ...COMPONENTS],
  declarations: [...COMPONENTS]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule
    };
  }
}
