import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import gql from 'graphql-tag';
import { query } from '@angular/animations';
import { map } from 'rxjs/operators';

@Injectable()
export class EventsService {

  constructor(private apollo: Apollo) { }

  getEventsByFilter(filter: string) {
    const QUERY = gql`
      {
        eventos {
          titulo,
          inicio,
          fin
        }
      }
    `;

    return this.apollo
      .watchQuery({
        query: QUERY
      }).valueChanges;
  }
}
