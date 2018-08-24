import { Component, OnInit } from '@angular/core';
import { Observable } from 'apollo-client/util/Observable';

import { ArticlesService } from '../../@core/data/articles/articles.service';
import { Article } from '../../@core/data/articles/article.model';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  articles = [];

  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    this.articlesService.getLastArticles()
      .subscribe(data => {
        console.log(data);
        this.articles = data;
      });
  }

}
