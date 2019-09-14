import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Article } from '../../types/blog-types';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})
export class BlogManagerService {


  constructor(private db: AngularFirestore, private storage: AngularFireStorage) { }

  public getBlogs(): Observable<Article[]> {
    return this.db.collection<Article>('articulos', ref => ref.orderBy('creationDate', 'asc')).valueChanges();
  }

  public getBlog(id: number): Observable<Article> {
    return this.db.doc<Article>(`articulos/${id}`).valueChanges();
  }

  public addBlog(newArticle: Article): Promise<void> {
    const articleId = this.db.createId();
    return this.uploadImageAndGetUrl(articleId, newArticle.mainImg)
      .then(res => {
        console.log(res);
      });
    // return this.db.doc<Article>(`articulos/${articleId}`).set({ ...newArticle, id: articleId });
  }

  private uploadImageAndGetUrl(articleId: string, image: string): Promise<any> {
    const upload = this.storage.upload(`articulos/${articleId}`, image);
    return upload.then(success => success);
  }
}
