import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogManagerService } from '../services/blog-manager.service';
import { Subscription } from 'rxjs';
import { Article } from '../types/blog-types';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy {

  public articles: Article[];
  private articles$: Subscription;

  constructor(
    private blogService: BlogManagerService,
    private nav: NavController) { }

  public ngOnInit(): void {
    this.articles$ = this.blogService.getBlogs().subscribe(articles => {
      this.articles = articles;
    });
  }

  public articleTracker(index: number): number {
    return index;
  }

  public goToArticle(index: number): void {
    this.nav.navigateForward(['tabs', 'tab1', 'article-detail', index]);
  }

  public ngOnDestroy(): void {
    this.articles$.unsubscribe();
  }

}
