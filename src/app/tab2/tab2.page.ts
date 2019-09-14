import { Component, OnInit } from '@angular/core';
import { BlogManagerService } from '../services/blog-manager/blog-manager.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  private form: FormGroup;

  constructor(
    private blogManager: BlogManagerService,
    private formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      writtenBy: ['', Validators.required],
      mainImg: ['', Validators.required],
      contentPreview: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  public createArticle() {
    this.blogManager.addBlog(this.form.value)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
    this.form.reset();
  }

}
