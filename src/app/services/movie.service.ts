import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {urls} from "../constants";
import {IMovie} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) {
  }

  getGenreMovies(genre: string, page: string): Observable<IMovie> {
    return this.httpClient.get<IMovie>(urls.movie + `?with_genres=${genre}&page=${page}`)
  }

  getSearchMovies(query: string, page: string): Observable<IMovie> {
    return this.httpClient.get<IMovie>(urls.movieSearch + `?query=${query}&page=${page}`)
  }

  getMoviePages(page: string): Observable<IMovie> {
    return this.httpClient.get<IMovie>(urls.movie + `?page=${page}`)
  }

}
