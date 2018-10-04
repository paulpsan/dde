import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { DDECalendarComponent } from './ddecalendar.component';


@NgModule({
  declarations: [
    DDECalendarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  exports: [
    DDECalendarComponent
  ]
})
export class DDECalendarModule {}
export { DDECalendarComponent };
