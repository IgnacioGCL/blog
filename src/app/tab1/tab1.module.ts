import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { BlogDetailComponent } from '../components/blog-detail/blog-detail.component';



const routes = [
  {
    path: '', component: Tab1Page
  }, {
    path: 'blog-detail/:id',
    component: BlogDetailComponent
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab1Page, BlogDetailComponent],
  entryComponents: [BlogDetailComponent]
})
export class Tab1PageModule { }
