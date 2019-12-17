import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { ArticlesPageComponent } from './articles/articles.component';
import { NavComponent } from './articles/nav/nav.component';
import { SharedModule } from '../shared/shared.module';
import { SingleComponent } from './single/single.component';
import { AllComponent } from './all/all.component';
import { CommentsComponent } from './comments/comments.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PhotosComponent } from './gallery/photos/photos.component';


@NgModule({
  declarations: [ArticlesPageComponent, NavComponent, SingleComponent, AllComponent, CommentsComponent, GalleryComponent, PhotosComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
  ]
})
export class BlogModule { }
