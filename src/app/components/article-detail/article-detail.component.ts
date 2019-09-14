import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogManagerService } from '../../services/blog-manager/blog-manager.service';
import { Article } from '../../types/blog-types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
})
export class ArticleDetailComponent implements OnInit, OnDestroy {

  public article: Article;
  private blog$: Subscription;

  constructor(
    private route: ActivatedRoute,
    private blogManager: BlogManagerService
  ) { }

  public ngOnInit(): void {
    const articleNumber = parseInt(this.route.snapshot.params.id, 10);
    this.blog$ = this.blogManager.getBlog(articleNumber).subscribe(article => {
      this.article = article;
    });
  }

  public ngOnDestroy(): void {
    this.blog$.unsubscribe();
  }

}
