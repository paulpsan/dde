import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ArticlesService } from '../../@core/data/articles/articles.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  articles$: Observable<any>;

  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    this.articles$ = this.articlesService.getLastArticles().pipe(
      map(({ data }) => {
        return data['articulos'];
      }));
  }

}
