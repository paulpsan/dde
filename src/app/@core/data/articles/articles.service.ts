import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private apollo: Apollo) { }

  // TODO: Add Types for GraphQL responses
  getLastArticles() {
    const GET_LAST_ARTICLES = gql`
      {
        articulos(limit: 3, sort: "updatedAt:desc") {
          titulo
        }
      }
    `;
    return this.apollo
      .watchQuery({
        query: GET_LAST_ARTICLES
      })
      .valueChanges.pipe(
        map(result => result.data['articulos'])
      );
  }
}
