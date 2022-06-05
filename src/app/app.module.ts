import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {HeaderComponent} from './components/header/header.component';
import {AppRoutingModule} from "./app-routing.module";
import {MainInterceptor} from "./main.interceptor";
import {MovieComponent} from './components/movie/movie.component';
import {IndexComponent} from './components/index/index.component';
import {MoviesComponent} from './components/movies/movies.component';
import {MovieCardComponent} from './components/movie-card/movie-card.component';
import {MovieInfoComponent} from './components/movie-info/movie-info.component';
import {GenresComponent} from './components/genres/genres.component';
import {GenreComponent} from './components/genre/genre.component';
import {GenreMoviesComponent} from './components/genre-movies/genre-movies.component';
import {UserInfoComponent} from './components/user-info/user-info.component';
import {SearchMoviesComponent} from './components/search-movies/search-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    MovieComponent,
    IndexComponent,
    MoviesComponent,
    MovieCardComponent,
    MovieInfoComponent,
    GenresComponent,
    GenreComponent,
    GenreMoviesComponent,
    UserInfoComponent,
    SearchMoviesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: MainInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
