import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NoticiasComponent } from './noticias/noticias.component';

const PAGES_COMPONENTS = [
  PagesComponent,
  DashboardComponent
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    CKEditorModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    NoticiasComponent
  ]
})
export class PagesModule { }
