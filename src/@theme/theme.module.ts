import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import {
  FooterComponent,
  HeaderComponent
} from './components';
import {
  DDELayoutComponent
} from './layouts';

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  DDELayoutComponent
];

@NgModule({
  imports: [...BASE_MODULES],
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
