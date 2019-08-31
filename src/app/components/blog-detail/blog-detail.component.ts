import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogManagerService } from '../../services/blog-manager.service';
import { Blog } from '../../types/blog-types';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {

  public blog: Blog;

  constructor(
    private route: ActivatedRoute,
    private blogManager: BlogManagerService
  ) { }

  public ngOnInit(): void {
    const blogNumber = parseInt(this.route.snapshot.params.id, 10);
    this.blogManager.getBlog(blogNumber).subscribe(blog => {
      this.blog = blog;
    });
  }

}
