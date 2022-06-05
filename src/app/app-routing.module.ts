import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {IndexComponent} from "./components/index/index.component";
import {MoviesComponent} from "./components/movies/movies.component";
import {MovieCardComponent} from "./components/movie-card/movie-card.component";
import {MovieInfoComponent} from "./components/movie-info/movie-info.component";
import {GenreMoviesComponent} from "./components/genre-movies/genre-movies.component";
import {UserInfoComponent} from "./components/user-info/user-info.component";
import {SearchMoviesComponent} from "./components/search-movies/search-movies.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', component: IndexComponent},
      {path: 'movies', component: MoviesComponent},
      {path: 'search', component: SearchMoviesComponent},
      {path: 'userInfo', component: UserInfoComponent},
      {path: 'genre-movies/:id', component: GenreMoviesComponent},
      {
        path: ':id', component: MovieCardComponent, children: [
          {path: 'description/:id', component: MovieInfoComponent}
        ]
      },
    ]
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
