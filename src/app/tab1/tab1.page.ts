import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogManagerService } from '../services/blog-manager.service';
import { Subscription } from 'rxjs';
import { Blog } from '../types/blog-types';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy {

  public blogs: Blog[];
  private blogs$: Subscription;

  constructor(private blogService: BlogManagerService) { }

  public ngOnInit(): void {
    this.blogs$ = this.blogService.getBlogs().subscribe(blogs => {
      this.blogs = blogs;
    });
  }

  public blogTracker(index: number): number {
    return index;
  }

  public ngOnDestroy(): void {
    this.blogs$.unsubscribe();
  }

}
