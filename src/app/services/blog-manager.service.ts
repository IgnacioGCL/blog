import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from '../types/blog-types';


@Injectable({
  providedIn: 'root'
})
export class BlogManagerService {

  constructor(private http: HttpClient) { }

  public getBlogs(): Observable<Blog[]> {
    return this.http.get('./assets/data/blogs.json') as Observable<Blog[]>;
  }
}
