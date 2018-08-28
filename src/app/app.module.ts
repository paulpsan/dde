import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ApolloBoostModule, ApolloBoost } from 'apollo-angular-boost';
import { ThemeModule } from './@theme/theme.module';

import { ArticlesService } from './@core/data/articles/articles.service';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApolloBoostModule,
    ThemeModule.forRoot()
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
  }
}
