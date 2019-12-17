import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesPageComponent } from './articles/articles.component';
import { SingleComponent } from './single/single.component';
import { AllComponent } from './all/all.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PhotosComponent } from './gallery/photos/photos.component';


const routes: Routes = [
    {path: '', component: ArticlesPageComponent,

    children: [
        { path: '', component:  AllComponent },
        {path: 'single', component: SingleComponent},
        {path: 'gallery', component: GalleryComponent },
        {path: 'gallery/photos', component: PhotosComponent},

       ]
},
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
