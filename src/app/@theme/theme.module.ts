import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import {
  FooterComponent,
  HeaderComponent,
  DDECalendarComponent
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
  DDECalendarComponent,
  DDELayoutComponent
];

@NgModule({
  imports: [
    ...BASE_MODULES,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  exports: [...BASE_MODULES, ...COMPONENTS],
  declarations: [
    ...COMPONENTS
  ],
  entryComponents: [
    DDECalendarComponent
  ]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule
    };
  }
}
