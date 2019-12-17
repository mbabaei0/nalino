import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { P404Component } from './p404/p404.component';


const routes: Routes = [
    // {path: '', component: HomeComponent},
    // {path: 'articles', component: ArticlesPageComponent},
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module')
          .then(m => m.AuthModule),
      },
    {
        path: 'home',
        loadChildren: () => import('./home/home.module')
          .then(m => m.HomeModule),
      },
    {
        path: 'blog',
        loadChildren: () => import('./blog/blog.module')
          .then(m => m.BlogModule),
      },
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component:P404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
