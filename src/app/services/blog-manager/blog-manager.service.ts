import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../../types/blog-types';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class BlogManagerService {


  constructor(private db: AngularFirestore) { }

  public getBlogs(): Observable<Article[]> {
    return this.db.collection<Article>('articulos', ref => ref.orderBy('creationDate', 'asc')).valueChanges();
  }

  public getBlog(id: number): Observable<Article> {
    return this.db.doc<Article>(`articulos/${id}`).valueChanges();
  }

  public addBlog(articleId: string, newArticle: Article): Promise<void> {
    return this.db.doc<Article>(`articulos/${articleId}`).set({ ...newArticle, id: articleId });
  }

}
