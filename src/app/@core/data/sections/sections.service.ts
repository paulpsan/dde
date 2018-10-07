import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionsService {

  sections = [
    {
      id: '',
      target: '',
      type: 'news',
      orientation: 'left',
      title: 'DIRECCION DEPARTAMENTAL DE EDUCACION LA PAZ',
      content: `Dirección Departamental de Educación,
      consolidada, fortalecida garantizando la implementación de una
      educación productiva comunitaria y de calidad para todas y todos,
      con pertinencia sociocultural, contribuyendo a la construcción
      de una sociedad justa, en equilibrio y relación armónica con la
      naturaleza que sustenta el desarrollo plurinacional para vivir bien.`
    }
  ];

  constructor(private apollo: Apollo) { }

  // TODO: Add Types for GraphQL responses
  getMainSections() {
    return of(this.sections);
  }
}
