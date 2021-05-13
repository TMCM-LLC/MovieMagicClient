import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MovieListComponent
  },
  {
    path: 'search',
    component: MovieSearchComponent
  },
  {
      path: ':id',
      component: MovieDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
