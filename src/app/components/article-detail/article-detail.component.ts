import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogManagerService } from '../../services/blog-manager.service';
import { Article } from '../../types/blog-types';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
})
export class ArticleDetailComponent implements OnInit {

  public article: Article;

  constructor(
    private route: ActivatedRoute,
    private blogManager: BlogManagerService
  ) { }

  public ngOnInit(): void {
    const articleNumber = parseInt(this.route.snapshot.params.id, 10);
    this.blogManager.getBlog(articleNumber).subscribe(article => {
      this.article = article;
    });
  }

}
