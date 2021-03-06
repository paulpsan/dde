import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es';

import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ApolloBoostModule, ApolloBoost } from 'apollo-angular-boost';
import { ThemeModule } from './@theme/theme.module';

import { ArticlesService } from './@core/data/articles/articles.service';
import { environment } from '../environments/environment';

const config: SocketIoConfig = { url: environment.BASE_SOCKET_IO_URL, options: {} };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ApolloBoostModule,
    ThemeModule.forRoot(),
    ToastrModule.forRoot({
      newestOnTop: true
    }),
    SocketIoModule.forRoot(config)
  ],
  providers: [
    { provide:  APP_BASE_HREF, useValue: '/' },
    ArticlesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private apollo: ApolloBoost) {
    apollo.create( {
      uri: environment.BASE_GRAPHQL_URL
    });

    registerLocaleData(localEs, 'es');
  }
}
