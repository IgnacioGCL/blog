import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from '../types/blog-types';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BlogManagerService {

  constructor(private http: HttpClient) { }

  public getBlogs(): Observable<Blog[]> {
    return this.http.get('./assets/data/blogs.json') as Observable<Blog[]>;
  }

  public getBlog(id: number): Observable<Blog> {
    return this.http.get('./assets/data/blogs.json').pipe(map((blogs) => {
      return blogs[id];
    })) as Observable<Blog>;
  }
}
