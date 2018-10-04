import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { CalendarComponent } from './calendar/calendar.component';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const PAGES_COMPONENTS = [
  PagesComponent,
  DashboardComponent,
  CalendarComponent
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  declarations: [
    ...PAGES_COMPONENTS
  ]
})
export class PagesModule { }
