import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ArticleDetailComponent } from '../components/article-detail/article-detail.component';
import { CustomDatePipe } from '../custom-date.pipe';



const routes = [
  {
    path: '', component: Tab1Page
  }, {
    path: 'article-detail/:id',
    component: ArticleDetailComponent
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab1Page, ArticleDetailComponent, CustomDatePipe],
  entryComponents: [ArticleDetailComponent]
})
export class Tab1PageModule { }
