import { Component, OnInit } from '@angular/core';
import { BlogManagerService } from '../services/blog-manager/blog-manager.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  private form: FormGroup;
  private imgUrl: string;

  constructor(
    private blogManager: BlogManagerService,
    private formBuilder: FormBuilder,
    private db: AngularFirestore,
    private storage: AngularFireStorage) { }

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      writtenBy: ['', Validators.required],
      mainImg: ['', Validators.required],
      contentPreview: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  public onFileChange(event): void {
    if (event.target.files && event.target.files.length) {
      this.form.patchValue({
        mainImg: event.target.files[0]
      });
    }
  }

  public createArticle() {
    const articleId = this.db.createId();
    this.uploadImageAndGetUrl(articleId, this.form.value.mainImg);
  }

  private uploadImageAndGetUrl(articleId: string, image: File) {
    const ref = `articulos/${articleId}`;
    const upload = this.storage.upload(ref, image);
    const storageRef = this.storage.ref(ref);
    upload.snapshotChanges().pipe(
      finalize(() => storageRef.getDownloadURL().subscribe(url => {
        this.uploadBlog(articleId, url);
      }))
    ).subscribe();
  }

  private uploadBlog(articleId: string, url: string): void {
    this.blogManager.addBlog(articleId, { ...this.form.value, mainImg: url, creationDate: new Date().getTime() })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
    this.form.reset();
  }

}
